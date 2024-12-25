const express = require("express");
const messageController = require("../controllers/messageController")
const authmiddleware = require("../middleware/authMiddleware")


// create router
const router = express.Router();

// This route handles POST requests for sending user message
router.post("/send/:id", authmiddleware.userSignin, messageController.sendMessages)

// This route handles GET requests for geting messages
router.get("/:id", authmiddleware.userSignin, messageController.getMessages)

module.exports = router