const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const winston = require("winston");
const initApp = require("./utils/createDir").modules.initApp;
require("winston-mongodb");
require("express-async-errors");
const config = require("config");
// middlewares
const ErrorMiddleware = require("./middlwares/error");

const User = require("./models/user");
// routes
const s = require("./controllers/socket");
const UserRoutes = require("./routes/user");
const ProductRoutes = require("./routes/product");
const CategoryRoutes = require("./routes/category");
const OrderRoutes = require("./routes/order");
const CardRoutes = require("./routes/card");
const Chat = require("./models/chat");
const Order = require("./models/order");
const FavoriteRoutes = require("./routes/favorite");
const ChatRoutes = require("./routes/chat");

// init app
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const { uuidv4 } = require("uuid");
const io = new Server(server, {
  pingInterval: 10000,
  pingTimeout: 5000,
  maxHttpBufferSize: 1e4,
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

//  middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (app.get("env") === "development") app.use(morgan("tiny"));

//  routes
app.use(UserRoutes);
app.use(ProductRoutes);
app.use(CategoryRoutes);
app.use(OrderRoutes);
app.use(CardRoutes);
app.use(CardRoutes);
app.use(FavoriteRoutes);
app.use(ChatRoutes);

// error middleware
app.use(ErrorMiddleware);
// winston
winston.add(new winston.transports.File({ filename: "error-log.log" }));
winston.add(
  new winston.transports.MongoDB({
    db: config.get("mongoURI"),
    options: {
      useUnifiedTopology: true,
    },
  })
);
// handle errors
process.on("uncaughtException", (error) => winston.error(error.message));
process.on("unhandledRejection", (error) => winston.error(error.message));

// views
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.static(path.join(__dirname, "./views")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./views", "chat.html"));
});

// connect to db
mongoose.connect(
  config.get("mongoURI"),
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  () => console.log("DB Conected")
);

const port = 8989;

server.listen(port, (err) => {
  if (err) console.log(err.message);
  console.log(`Listen To ${port}`);

  io.on("connection", (socket) => {
    io.use(async (socket, next) => {
      const token = socket.handshake.auth.token;

      const user = jwt.verify(token, config.get("jwtSecret"));

      if (!user) {
        const err = new Error("not authorized");
        err.data = { content: "Please retry later" }; // additional details
        next(err);
      } else {
        let User = require("./models/user");

        await User.updateOne(
          {
            _id: user._id,
          },
          {
            $set: { socketId: socket.id },
          },
          (err, data) => {
            if (err) console.log(err);
            socket.user = user;
            console.log(`${user.email} connected to socket`);
          }
        );

        socket.on("disconnect", () => {
          console.log("user disconnected");
        });
      }
      next();
    });

    socket.on("join", (data) => {
      let { order } = data;
      socket.join(order);
    });

    socket.on("sendMessage", async (data) => {
      let { fromUser, toUser, body, order, type } = data;

      let findChat = await Chat.findOne({ order });

      let message = {
        fromUser,
        toUser,
        body,
        type,
        order,
      };
      if (!findChat) {
        let newChat = new Chat({
          order,
          messages: [message],
        });
        await newChat.save();
        socket.to(order).emit("receiveMessage", message);
        let newList = await Order.findOne({ _id: order });

        socket.emit("newConversation", newList);
      } else {
        let messages = [...findChat.messages, message];
        await Chat.updateOne(
          { order },
          {
            messages,
          },
          () => socket.to(order).emit("receiveMessage", message)
        );
      }
      await findChat.save();
    });
  });
});
