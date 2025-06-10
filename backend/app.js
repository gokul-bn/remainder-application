const express = require("express");
const cors = require("cors");
const reminderRoutes = require("./routes/reminderRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", reminderRoutes);

module.exports = app;
