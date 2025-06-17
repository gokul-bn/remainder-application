const Reminder = require("../models/Reminder");
const transporter = require("../config/mail");
const qs = require("qs");
const axios = require("axios");

exports.createReminder = async (req, res) => {
  const { to, subject, text, title, description, date, time, email, whatsapp } =
    req.body;

  if (
    !to ||
    !subject ||
    !text ||
    !title ||
    !description ||
    !date ||
    !time ||
    !email ||
    !whatsapp
  ) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  try {
    const attachments =
      req.files?.map((file) => ({
        filename: file.originalname,
        contentType: file.mimetype,
        content: file.buffer,
      })) || [];

    const mongoAttachments =
      req.files?.map((file) => ({
        filename: file.originalname,
        contentType: file.mimetype,
        data: file.buffer,
      })) || [];

    // Send Email
    await transporter.sendMail({
      from: `"Reminder App" <${process.env.GMAIL_USER}>`,
      to,
      subject: `Reminder: ${title} on ${date} at ${time}`,
      text: `${text}\n\nRegards,\nReminder App`,
      html: `
        <h3>${title}</h3>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <br/>
        <p>Regards,<br/>Reminder App</p>
      `,
      attachments,
    });

    // Send WhatsApp via UltraMsg
    const waData = qs.stringify({
      token: process.env.ULTRAMSG_TOKEN,
      to: whatsapp,
      body: `*Reminder*\n\n*Title:* ${title}\n*Description:* ${description}\n*Date:* ${date}\n*Time:* ${time}\n\n- Reminder App`,
    });

    await axios.post(
      `https://api.ultramsg.com/${process.env.ULTRAMSG_INSTANCE_ID}/messages/chat`,
      waData,
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    // Save to MongoDB
    const newReminder = new Reminder({
      title,
      description,
      date,
      time,
      email,
      whatsapp,
      attachments: mongoAttachments,
    });
    await newReminder.save();

    res
      .status(200)
      .json({ message: "Email and WhatsApp sent, reminder saved!" });
  } catch (error) {
    console.error("Error sending notifications:", error);
    res
      .status(500)
      .json({ message: error.message || "Failed to send notifications." });
  }
};


