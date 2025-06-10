// const nodemailer = require("nodemailer");

// const sendEmail = async ({ to, subject, text, html, attachments }) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.GMAIL_USER,
//       pass: process.env.GMAIL_PASS,
//     },
//   });

//   await transporter.sendMail({
//     from: `"Reminder App" <${process.env.GMAIL_USER}>`,
//     to,
//     subject,
//     text,
//     html,
//     attachments,
//   });
// };

// module.exports = sendEmail;
