// import { useState, useEffect, useRef } from "react";
// import { Box } from "@mui/material";
// import axios from "axios";
// import ReminderForm from "../components/ReminderForm";
// import ReminderTable from "../components/ReminderTable";

// const ReminderPage = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [whatsapp, setWhatsapp] = useState("");
//   const [files, setFiles] = useState([]);
//   const [previews, setPreviews] = useState([]);
//   const [reminders, setReminders] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);
//   const notifiedRemindersRef = useRef(new Set());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date();
//       const nowFormatted = `${now.getFullYear()}-${String(
//         now.getMonth() + 1
//       ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(
//         now.getHours()
//       ).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

//       reminders.forEach((reminder, index) => {
//         const reminderTime = `${reminder.date} ${reminder.time}`;
//         if (
//           reminderTime === nowFormatted &&
//           !notifiedRemindersRef.current.has(index)
//         ) {
//           const formData = new FormData();
//           formData.append("to", reminder.email);
//           formData.append("subject", `Reminder: ${reminder.title}`);
//           formData.append("text", reminder.description);
//           formData.append("title", reminder.title);
//           formData.append("description", reminder.description);
//           formData.append("date", reminder.date);
//           formData.append("time", reminder.time);
//           formData.append("email", reminder.email);
//           formData.append("whatsapp", reminder.whatsapp);

//           reminder.files?.forEach((file) => {
//             formData.append("attachments", file);
//           });

//           axios
//             .post("http://localhost:5000/send-email", formData)
//             .then((res) => console.log("Notification sent:", res.data))
//             .catch((err) => console.error("Notification error:", err));

//           notifiedRemindersRef.current.add(index);
//         }
//       });
//     }, 60000);

//     return () => clearInterval(interval);
//   }, [reminders]);

//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     const maxSize = 5 * 1024 * 1024;
//     const allowedTypes = ["image/png", "image/jpeg", "application/pdf"];
//     const validFiles = selectedFiles.filter(
//       (file) => allowedTypes.includes(file.type) && file.size <= maxSize
//     );
//     setFiles(validFiles);
//     setPreviews(validFiles.map((file) => URL.createObjectURL(file)));
//   };

//   const addReminder = () => {
//     if (!title || !description || !date || !time || !email) return;

//     if (!email.endsWith("@gmail.com")) {
//       setEmailError("Only @gmail.com addresses are allowed");
//       return;
//     }

//     const newReminder = {
//       title,
//       description,
//       date,
//       time,
//       email,
//       whatsapp,
//       files,
//     };

//     if (editIndex !== null) {
//       const updated = reminders.map((r, i) =>
//         i === editIndex ? newReminder : r
//       );
//       setReminders(updated);
//       notifiedRemindersRef.current.delete(editIndex);
//       setEditIndex(null);
//     } else {
//       setReminders([...reminders, newReminder]);
//     }

//     setTitle("");
//     setDescription("");
//     setDate("");
//     setTime("");
//     setEmail("");
//     setWhatsapp("");
//     setFiles([]);
//     setPreviews([]);
//     setEmailError("");
//   };

//   const editReminder = (index) => {
//     const reminder = reminders[index];
//     setTitle(reminder.title);
//     setDescription(reminder.description);
//     setDate(reminder.date);
//     setTime(reminder.time);
//     setEmail(reminder.email);
//     setWhatsapp(reminder.whatsapp);
//     setFiles(reminder.files || []);
//     setPreviews(reminder.files?.map((file) => URL.createObjectURL(file)) || []);
//     setEditIndex(index);
//     setEmailError("");
//   };

//   const deleteReminder = (index) => {
//     setReminders(reminders.filter((_, i) => i !== index));
//     notifiedRemindersRef.current.delete(index);
//   };

//   return (
//     <Box sx={{ p: 4 }}>
//       <ReminderForm
//         title={title}
//         setTitle={setTitle}
//         description={description}
//         setDescription={setDescription}
//         date={date}
//         setDate={setDate}
//         time={time}
//         setTime={setTime}
//         email={email}
//         setEmail={setEmail}
//         emailError={emailError}
//         setEmailError={setEmailError}
//         whatsapp={whatsapp}
//         setWhatsapp={setWhatsapp}
//         files={files}
//         handleFileChange={handleFileChange}
//         previews={previews}
//         editIndex={editIndex}
//         addReminder={addReminder}
//       />
//       <Box mt={5}>
//         <ReminderTable
//           reminders={reminders}
//           editReminder={editReminder}
//           deleteReminder={deleteReminder}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default ReminderPage;

//new 1

// import { useState } from "react";
// import { Container, Typography, Paper } from "@mui/material";
// import { FaBell } from "react-icons/fa";


// import ReminderForm from "../components/ReminderForm";
// import ReminderTable from "../components/ReminderTable";
// import useReminderChecker from "../hooks/useReminders";
// import { isValidGmail } from "../utils/validators";


// const ReminderPage = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [whatsapp, setWhatsapp] = useState("");
//   const [files, setFiles] = useState([]);
//   const [previews, setPreviews] = useState([]);
//   const [reminders, setReminders] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   useReminderChecker(reminders);

//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     const maxSize = 5 * 1024 * 1024;
//     const allowedTypes = ["image/png", "image/jpeg", "application/pdf"];
//     const validFiles = selectedFiles.filter(
//       (file) => allowedTypes.includes(file.type) && file.size <= maxSize
//     );
//     setFiles(validFiles);
//     setPreviews(validFiles.map((file) => URL.createObjectURL(file)));
//   };

//   const addReminder = () => {
//     if (!title || !description || !date || !time || !email) return;
//     if (!isValidGmail(email)) {
//       setEmailError("Only @gmail.com addresses are allowed");
//       return;
//     }

//     const newReminder = {
//       title,
//       description,
//       date,
//       time,
//       email,
//       whatsapp,
//       files,
//     };
//     const updatedReminders = [...reminders];

//     if (editIndex !== null) {
//       updatedReminders[editIndex] = newReminder;
//       setEditIndex(null);
//     } else {
//       updatedReminders.push(newReminder);
//     }

//     setReminders(updatedReminders);
//     setTitle("");
//     setDescription("");
//     setDate("");
//     setTime("");
//     setEmail("");
//     setWhatsapp("");
//     setFiles([]);
//     setPreviews([]);
//   };

//   const editReminder = (index) => {
//     const reminder = reminders[index];
//     setTitle(reminder.title);
//     setDescription(reminder.description);
//     setDate(reminder.date);
//     setTime(reminder.time);
//     setEmail(reminder.email);
//     setWhatsapp(reminder.whatsapp);
//     setFiles(reminder.files || []);
//     setPreviews(reminder.files?.map((file) => URL.createObjectURL(file)) || []);
//     setEditIndex(index);
//     setEmailError("");
//   };

//   const deleteReminder = (index) => {
//     setReminders(reminders.filter((_, i) => i !== index));
//   };

//   return (
//     <>
//       <Container maxWidth="md" sx={{ py: 4 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           <FaBell style={{ color: "#5C6BC0", marginRight: 8 }} />
//           Reminder App
//         </Typography>

//         <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
//           <ReminderForm
//             {...{
//               title,
//               setTitle,
//               description,
//               setDescription,
//               email,
//               setEmail,
//               emailError,
//               setEmailError,
//               date,
//               setDate,
//               time,
//               setTime,
//               whatsapp,
//               setWhatsapp,
//               handleFileChange,
//               previews,
//               editIndex,
//               addReminder,
//             }}
//           />
//         </Paper>

//         <Paper elevation={3}>
//           <ReminderTable
//             reminders={reminders}
//             editReminder={editReminder}
//             deleteReminder={deleteReminder}
//           />
//         </Paper>
//       </Container>
//     </>
//   );
// };


// export default ReminderPage;
import React from "react";
import ReminderApp from "../app/ReminderApp";

const ReminderPage = () => <ReminderApp />;

export default ReminderPage;