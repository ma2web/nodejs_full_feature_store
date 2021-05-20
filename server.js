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
// routes
const User = require("./models/user");
const s = require("./controllers/socket");
const UserRoutes = require("./routes/user");
const ProductRoutes = require("./routes/product");
const CategoryRoutes = require("./routes/category");
const OrderRoutes = require("./routes/order");
// init app
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

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
  res.sendFile(path.join(__dirname, "./views", "index.html"));
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
  (err) => {
    if (err) console.log(err.message);

    console.log("MongoDB Connected");

    const port = config.get("PORT") || 6969;
    // listen to server
    server.listen(port, (err) => {
      if (err) console.log(err.message);
      console.log(`Listen To ${port}`);
    });

    io.on("connection", (socket) => {
      io.use((socket, next) => {
        const token = socket.handshake.auth.token;

        const user = jwt.verify(token, config.get("jwtSecret"));

        if (!user) {
          const err = new Error("not authorized");
          err.data = { content: "Please retry later" }; // additional details
          next(err);
        } else {
          socket.broadcast.emit("welcome to app socket");
          console.log(`${user.email} connected to socket`);
          socket.on("disconnect", () => {
            console.log("user disconnected");
          });
        }
        next();
      });

      socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
      });
    });
  }
);
