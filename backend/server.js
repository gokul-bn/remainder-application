// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// require("dotenv").config();

// const reminderRoutes = require("./routes/reminderRoutes");
// const connectDB = require("./config/db");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// connectDB();

// // Routes
// app.use("/", reminderRoutes);

// // Start server
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


require("dotenv").config();
const connectDB = require("./config/db");
const app = require("./app");

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));