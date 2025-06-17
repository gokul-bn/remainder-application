const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  time: String,
  email: String,
  whatsapp: String,
  attachments: [
    {
      filename: String,
      contentType: String,
      data: Buffer,
    },
  ],
});

module.exports = mongoose.model("Reminder", reminderSchema);