// // services/notificationService.js
// const nodemailer = require("nodemailer");
// const axios = require("axios");
// const qs = require("qs");

// const sendEmailAndWhatsapp = async ({
//   to,
//   subject,
//   text,
//   title,
//   description,
//   date,
//   time,
//   email,
//   whatsapp,
//   attachments,
// }) => {
//   // Nodemailer
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
//     subject: `Reminder: ${title} on ${date} at ${time}`,
//     text: `${text}\n\nRegards,\nReminder App`,
//     html: `
//       <h3>${title}</h3>
//       <p><strong>Description:</strong> ${description}</p>
//       <p><strong>Date:</strong> ${date}</p>
//       <p><strong>Time:</strong> ${time}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>WhatsApp:</strong> ${whatsapp}</p>
//       <br/>
//       <p>Regards,<br/>Reminder App</p>
//     `,
//     attachments,
//   });

//   // UltraMsg
//   const waData = qs.stringify({
//     token: process.env.ULTRAMSG_TOKEN,
//     to: whatsapp,
//     body: `*Reminder*\n\n*Title:* ${title}\n*Description:* ${description}\n*Date:* ${date}\n*Time:* ${time}\n\n- Reminder App`,
//   });

//   await axios.post(
//     `https://api.ultramsg.com/${process.env.ULTRAMSG_INSTANCE_ID}/messages/chat`,
//     waData,
//     { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
//   );
// };

// module.exports = { sendEmailAndWhatsapp };
