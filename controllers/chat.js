const Chat = require("../models/chat");

module.exports = {
  getAll: async (req, res) => {
    let { id } = req.params;
    if (!id) return res.status(400).send("order id is required");

    let chatlist = await Chat.findOne({ order: id })
      .populate("messages.fromUser")
      .populate("messages.toUser");

    if (!chatlist) return res.status(400).send("order id is wrong");
    res.send(chatlist);
  },
};
