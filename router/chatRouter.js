const express = require("express");
const chatcontrollers = require("../controllers/chatControllers")

const router = express.Router();

// router send message
router.post("/send", chatcontrollers.sendChat);

// route get message
router.get("/messages", chatcontrollers.message);

module.exports = router;