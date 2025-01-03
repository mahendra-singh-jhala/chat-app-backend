const { Server } = require("socket.io")
const http = require("http")
const express = require("express")

const app = express();

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "https://newly-chat-app.netlify.app",  
        methods: ["GET", "POST"]
    }
});

const userSocketMap = {};

const getReciverSocketId = (receiverId) => {
    return userSocketMap[receiverId]
}

io.on('connection', (socket) => {
    console.log(`user connected ${socket.id}`)

    const userId = socket.handshake.query.userId
    if(userId != "undefined") userSocketMap[userId] = socket.id;

    io.emit("getOnlineUser", Object.keys(userSocketMap))

    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id)
        delete userSocketMap[userId];
        io.emit("getOnlineUser", Object.keys(userSocketMap))
    })
})

module.exports = {app, io, server, getReciverSocketId}