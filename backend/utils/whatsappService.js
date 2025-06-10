// const qs = require("qs");
// const axios = require("axios");

// const sendWhatsApp = async ({ to, body }) => {
//   const waData = qs.stringify({
//     token: process.env.ULTRAMSG_TOKEN,
//     to,
//     body,
//   });

//   await axios.post(
//     `https://api.ultramsg.com/${process.env.ULTRAMSG_INSTANCE_ID}/messages/chat`,
//     waData,
//     { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
//   );
// };

// module.exports = sendWhatsApp;
