const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
connectDB();

const app = express();
const authRoutes = require("./routes/authRoutes");

app.use(express.json());

app.use("/api/auth", authRoutes);

module.exports = app;