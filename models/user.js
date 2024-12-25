const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },

    profilePicture: { 
        type: String, 
        default: ""
    }

}, {timestamps: true})

const User = mongoose.model("User", userSchema)

module.exports = User