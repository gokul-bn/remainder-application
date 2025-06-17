const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const reminderController = require("../controllers/reminderController");

router.post(
  "/send-email",
  (req, res, next) => {
    upload.array("attachments")(req, res, (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      next();
    });
  },
  reminderController.createReminder
);

module.exports = router;