// const express = require("express");
// const router = express.Router();
// const upload = require("../middleware/uploadMiddleware");
// const { sendReminder } = require("../controllers/reminderController");

// router.post(
//   "/send-email",
//   (req, res, next) => {
//     upload.array("attachments")(req, res, (err) => {
//       if (err) {
//         const message =
//           err instanceof multer.MulterError
//             ? "File too large. Max size is 5MB."
//             : err.message;
//         return res.status(400).json({ message });
//       }
//       next();
//     });
//   },
//   sendReminder
// );

// module.exports = router;

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