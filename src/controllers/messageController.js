const messages = require("../models/messages");

const messageController = {
	getAllMessages: (req, res) => {
		res.render("index", {
			title: "Mini Message board",
			messages: messages,
		});
	},

	getNewMessageForm: (req, res) => {
		res.render("form", { title: "Add new message" });
	},

	createNewMessage: (req, res) => {
		const { messageText, messageUser } = req.body;
		messages.push({ text: messageText, user: messageUser, added: new Date() });
		res.redirect("/");
	},

	getMessageDetails: (req, res) => {
		const id = req.params.id;
		const message = messages[id];

		if (message) {
			res.render("message", { title: "Message details", message });
		} else {
			res.status(404).send("Message not found");
		}
	},
};

module.exports = messageController;
