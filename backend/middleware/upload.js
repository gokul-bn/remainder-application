// const multer = require("multer");

// const storage = multer.memoryStorage();

// const upload = multer({
//   storage,
//   limits: { fileSize: 5 * 1024 * 1024 },
//   fileFilter: (req, file, cb) => {
//     const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
//     if (!allowedTypes.includes(file.mimetype)) {
//       return cb(new Error("Only JPEG, PNG, and PDF files are allowed."));
//     }
//     cb(null, true);
//   },
// });

// module.exports = upload;


// upload.js
// const multer = require("multer");

// const storage = multer.memoryStorage();

// const upload = multer({
//   storage,
//   limits: { fileSize: 5 * 1024 * 1024 },
//   fileFilter: (req, file, cb) => {
//     const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
//     if (!allowedTypes.includes(file.mimetype)) {
//       return cb(new Error("Only JPEG, PNG, and PDF files are allowed."));
//     }
//     cb(null, true);
//   },
// });

// module.exports = upload;

const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error("Only JPEG, PNG, and PDF files are allowed."));
    }
    cb(null, true);
  },
});

module.exports = upload;

