// Import dependencies ...
require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const userRouter = require("./api/users/userRouter");

// API router calling ...
app.use("/api", userRouter);

// Port open Server start ...
const port = process.env.port;
app.listen(process.env.port, () => { 
    console.log(`node application live at ${port} ✅`) 
}) ;