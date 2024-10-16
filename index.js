const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const router = require("./router/chatRouter")

// Load enviorment variables
require("dotenv").config();

const app = express();

app.use(bodyparser.json());

app.use(cors());

// router
app.use("/", router);

PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})