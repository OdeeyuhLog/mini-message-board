const express = require("express");
const router = express();
const messageController = require("../controllers/messageController");

router.get("/", messageController.getAllMessages);
router.get("/new", messageController.getNewMessageForm);
router.post("/new", messageController.createNewMessage);
router.get("/message/:id", messageController.getMessageDetails);

module.exports = router;
