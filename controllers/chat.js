const Chat = require("../models/chat");

module.exports = {
  getAll: async (req, res) => {
    let { id } = req.params;
    if (!id) return res.status(400).send("order id is required");

    let chatlist = await Chat.findOne({ order: id })
      .populate("messages.fromUser")
      .populate("messages.toUser");

    res.send(chatlist);
  },
  getAllChats: async (req, res) => {
    let chatlist = await Chat.findOne()
      .populate("messages.fromUser")
      .populate("messages.toUser");

    res.send(chatlist);
  },
};
