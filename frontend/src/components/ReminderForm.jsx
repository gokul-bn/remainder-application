// import React from "react";
// import {
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   Paper,
//   Input,
//   Avatar,
//   Box,
// } from "@mui/material";
// import { FaBell } from "react-icons/fa";
// import useReminder from "../hooks/useReminder";
// import FilePreview from "./FilePreview";

// const ReminderForm = () => {
//   const {
//     title,
//     setTitle,
//     description,
//     setDescription,
//     date,
//     setDate,
//     time,
//     setTime,
//     email,
//     setEmail,
//     emailError,
//     setEmailError,
//     whatsapp,
//     setWhatsapp,
//     files,
//     setFiles,
//     previews,
//     setPreviews,
//     editIndex,
//     setEditIndex,
//     reminders,
//     setReminders,
//     notifiedRemindersRef,
//   } = useReminder();

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

//     setEmailError("");

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
//       const updatedReminders = reminders.map((reminder, index) =>
//         index === editIndex ? newReminder : reminder
//       );
//       setReminders(updatedReminders);
//       notifiedRemindersRef.current.delete(editIndex);
//       setEditIndex(null);
//     } else {
//       setReminders([...reminders, newReminder]);
//     }

//     // Clear fields
//     setTitle("");
//     setDescription("");
//     setDate("");
//     setTime("");
//     setEmail("");
//     setWhatsapp("");
//     setFiles([]);
//     setPreviews([]);
//   };

//   return (
//     <Box sx={{ p: 4 }}>
//       <Paper elevation={3} sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           <FaBell /> Reminder App
//         </Typography>

//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Email"
//               type="email"
//               value={email}
//               error={!!emailError}
//               helperText={emailError}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//                 if (emailError) setEmailError("");
//               }}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               label="Date"
//               type="date"
//               InputLabelProps={{ shrink: true }}
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               label="Time"
//               type="time"
//               InputLabelProps={{ shrink: true }}
//               value={time}
//               onChange={(e) => setTime(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="WhatsApp Number"
//               placeholder="with country code"
//               value={whatsapp}
//               onChange={(e) => setWhatsapp(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Input
//               type="file"
//               inputProps={{ multiple: true, accept: ".png,.jpg,.jpeg,.pdf" }}
//               onChange={handleFileChange}
//             />
//             <FilePreview previews={previews} />
//           </Grid>
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               color={editIndex !== null ? "warning" : "primary"}
//               fullWidth
//               onClick={addReminder}
//             >
//               {editIndex !== null ? "Update Reminder" : "Schedule Reminder"}
//             </Button>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Box>
//   );
// };

// export default ReminderForm;


// new 1
// import { Grid, TextField, Button, InputLabel } from "@mui/material";
// import FilePreview from "./FilePreview";

// const ReminderForm = ({
//   title,
//   setTitle,
//   description,
//   setDescription,
//   email,
//   setEmail,
//   emailError,
//   setEmailError,
//   date,
//   setDate,
//   time,
//   setTime,
//   whatsapp,
//   setWhatsapp,
//   handleFileChange,
//   previews,
//   editIndex,
//   addReminder,
// }) => {
//   return (
//     <Grid container spacing={2}>
//       <Grid xs={12}>
//         <TextField
//           fullWidth
//           label="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </Grid>
//       <Grid xs={12}>
//         <TextField
//           fullWidth
//           label="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </Grid>
//       <Grid xs={12}>
//         <TextField
//           fullWidth
//           label="Email"
//           type="email"
//           error={!!emailError}
//           helperText={emailError}
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//             if (emailError) setEmailError("");
//           }}
//         />
//       </Grid>
//       <Grid xs={6}>
//         <TextField
//           fullWidth
//           label="Date"
//           type="date"
//           InputLabelProps={{ shrink: true }}
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//       </Grid>
//       <Grid xs={6}>
//         <TextField
//           fullWidth
//           label="Time"
//           type="time"
//           InputLabelProps={{ shrink: true }}
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//         />
//       </Grid>
//       <Grid xs={12}>
//         <TextField
//           fullWidth
//           label="WhatsApp Number"
//           placeholder="Enter WhatsApp number"
//           value={whatsapp}
//           onChange={(e) => setWhatsapp(e.target.value)}
//         />
//       </Grid>
//       <Grid xs={12}>
//         <InputLabel>Invoice</InputLabel>
//         <input
//           type="file"
//           multiple
//           accept=".png,.jpg,.jpeg,.pdf"
//           onChange={handleFileChange}
//         />
//         <FilePreview previews={previews} />
//       </Grid>
//       <Grid xs={12}>
//         <Button
//           variant="contained"
//           color="primary"
//           fullWidth
//           onClick={addReminder}
//         >
//           {editIndex !== null ? "Update Reminder" : "Schedule Reminder"}
//         </Button>
//       </Grid>
//     </Grid>
//   );
// };

// export default ReminderForm;

//30/5

// import { Grid, TextField, Button, InputLabel } from "@mui/material";
// import FilePreview from "./FilePreview";

// const ReminderForm = ({
//   title,
//   setTitle,
//   description,
//   setDescription,
//   email,
//   setEmail,
//   emailError,
//   setEmailError,
//   date,
//   setDate,
//   time,
//   setTime,
//   whatsapp,
//   setWhatsapp,
//   handleFileChange,
//   previews,
//   editIndex,
//   addReminder,
// }) => {
//   return (
//     <Grid
//       container
//       columns={{ xs: 4, sm: 8, md: 12 }} // Responsive columns
//       columnSpacing={2}
//       rowSpacing={2}
//     >
//       <Grid span={{ xs: 4, sm: 8, md: 12 }}>
//         <TextField
//           fullWidth
//           label="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </Grid>

//       <Grid span={{ xs: 4, sm: 8, md: 12 }}>
//         <TextField
//           fullWidth
//           label="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </Grid>

//       <Grid span={{ xs: 4, sm: 8, md: 12 }}>
//         <TextField
//           fullWidth
//           label="Email"
//           type="email"
//           error={!!emailError}
//           helperText={emailError}
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//             if (emailError) setEmailError("");
//           }}
//         />
//       </Grid>

//       <Grid span={{ xs: 4, sm: 4, md: 6 }}>
//         <TextField
//           fullWidth
//           label="Date"
//           type="date"
//           InputLabelProps={{ shrink: true }}
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//       </Grid>

//       <Grid span={{ xs: 4, sm: 4, md: 6 }}>
//         <TextField
//           fullWidth
//           label="Time"
//           type="time"
//           InputLabelProps={{ shrink: true }}
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//         />
//       </Grid>

//       <Grid span={{ xs: 4, sm: 8, md: 12 }}>
//         <TextField
//           fullWidth
//           label="WhatsApp Number"
//           placeholder="Enter WhatsApp number"
//           value={whatsapp}
//           onChange={(e) => setWhatsapp(e.target.value)}
//         />
//       </Grid>

//       <Grid span={{ xs: 4, sm: 8, md: 12 }}>
//         <InputLabel>Invoice</InputLabel>
//         <input
//           type="file"
//           multiple
//           accept=".png,.jpg,.jpeg,.pdf"
//           onChange={handleFileChange}
//         />
//         <FilePreview previews={previews} />
//       </Grid>

//       <Grid span={{ xs: 4, sm: 8, md: 12 }}>
//         <Button
//           variant="contained"
//           color="primary"
//           fullWidth
//           onClick={addReminder}
//         >
//           {editIndex !== null ? "Update Reminder" : "Schedule Reminder"}
//         </Button>
//       </Grid>
//     </Grid>
//   );
// };

// export default ReminderForm;

//new 1

// import { Grid, TextField, Button, InputLabel } from "@mui/material";
// import FilePreview from "./FilePreview";

// const ReminderForm = ({
//   title,
//   setTitle,
//   description,
//   setDescription,
//   email,
//   setEmail,
//   emailError,
//   setEmailError,
//   date,
//   setDate,
//   time,
//   setTime,
//   whatsapp,
//   setWhatsapp,
//   handleFileChange,
//   previews,
//   editIndex,
//   addReminder,
// }) => {
//   return (
//     <Grid
//       container
//       columns={{ xs: 4, sm: 8, md: 12 }} // Responsive columns
//       columnSpacing={2}
//       rowSpacing={2}
//     >
//       <Grid span={{ xs: 4, sm: 8, md: 12 }}>
//         <TextField
//           fullWidth
//           label="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </Grid>

//       <Grid span={{ xs: 4, sm: 8, md: 12 }}>
//         <TextField
//           fullWidth
//           label="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </Grid>

//       <Grid span={{ xs: 4, sm: 8, md: 12 }}>
//         <TextField
//           fullWidth
//           label="Email"
//           type="email"
//           error={!!emailError}
//           helperText={emailError}
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//             if (emailError) setEmailError("");
//           }}
//         />
//       </Grid>

//       <Grid span={{ xs: 4, sm: 4, md: 6 }}>
//         <TextField
//           fullWidth
//           label="Date"
//           type="date"
//           InputLabelProps={{ shrink: true }}
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//       </Grid>
//       <Grid span={{ xs: 4, sm: 4, md: 6 }}>
//         <TextField
//           fullWidth
//           label="Time"
//           type="time"
//           InputLabelProps={{ shrink: true }}
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//         />
//         <Grid container spacing={1} sx={{ mt: 1 }}>
//           <Grid item xs={6}>
//             <Button
//               variant="outlined"
//               fullWidth
//               onClick={() => {
//                 // Programmatically trigger the native time input
//                 document.getElementById("hidden-time-input")?.click();
//               }}
//             >
//               Set
//             </Button>
//             {/* Hidden input to trigger time picker */}
//             <input
//               id="hidden-time-input"
//               type="time"
//               style={{ display: "none" }}
//               onChange={(e) => setTime(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <Button
//               variant="outlined"
//               color="secondary"
//               fullWidth
//               onClick={() => setTime("")}
//             >
//               Clear
//             </Button>
//           </Grid>
//         </Grid>
//       </Grid>

//       <Grid span={{ xs: 4, sm: 8, md: 12 }}>
//         <TextField
//           fullWidth
//           label="WhatsApp Number"
//           placeholder="Enter WhatsApp number"
//           value={whatsapp}
//           onChange={(e) => setWhatsapp(e.target.value)}
//         />
//       </Grid>

//       <Grid span={{ xs: 4, sm: 8, md: 12 }}>
//         <InputLabel>Invoice</InputLabel>
//         <input
//           type="file"
//           multiple
//           accept=".png,.jpg,.jpeg,.pdf"
//           onChange={handleFileChange}
//         />
//         <FilePreview previews={previews} />
//       </Grid>

//       <Grid span={{ xs: 4, sm: 8, md: 12 }}>
//         <Button
//           variant="contained"
//           color="primary"
//           fullWidth
//           onClick={addReminder}
//         >
//           {editIndex !== null ? "Update Reminder" : "Schedule Reminder"}
//         </Button>
//       </Grid>
//     </Grid>
//   );
// };

// export default ReminderForm;

//new4

// import {
//   Grid,
//   TextField,
//   Button,
//   InputLabel,
//   Typography,
//   Box,
// } from "@mui/material";
// import FilePreview from "./FilePreview";

// const ReminderForm = ({
//   title,
//   setTitle,
//   description,
//   setDescription,
//   email,
//   setEmail,
//   emailError,
//   setEmailError,
//   date,
//   setDate,
//   time,
//   setTime,
//   whatsapp,
//   setWhatsapp,
//   handleFileChange,
//   previews,
//   editIndex,
//   addReminder,
// }) => {
//   return (
//     <Box component="form" sx={{ px: 2, py: 3 }}>
//       <Typography variant="h5" gutterBottom>
//         {editIndex !== null ? "Edit Reminder" : "New Reminder"}
//       </Typography>

//       <Grid container spacing={2}>
//         {/* Title */}
//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             label="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </Grid>

//         {/* Description */}
//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             label="Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </Grid>

//         {/* Email */}
//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             label="Email"
//             type="email"
//             error={!!emailError}
//             helperText={emailError}
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//               if (emailError) setEmailError("");
//             }}
//           />
//         </Grid>

//         {/* WhatsApp */}
//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             label="WhatsApp Number"
//             placeholder="Enter WhatsApp number"
//             value={whatsapp}
//             onChange={(e) => setWhatsapp(e.target.value)}
//           />
//         </Grid>

//         {/* Date */}
//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             label="Date"
//             type="date"
//             InputLabelProps={{ shrink: true }}
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </Grid>

//         {/* Time & Buttons */}
//         <Grid item xs={12} md={6}>
//           <Grid container spacing={1}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Time"
//                 type="time"
//                 InputLabelProps={{ shrink: true }}
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//               />
//             </Grid>

//             <Grid item xs={6}>
//               <Button
//                 variant="outlined"
//                 fullWidth
//                 onClick={() => {
//                   document.getElementById("hidden-time-input")?.click();
//                 }}
//               >
//                 Set
//               </Button>
//               <input
//                 id="hidden-time-input"
//                 type="time"
//                 style={{ display: "none" }}
//                 onChange={(e) => setTime(e.target.value)}
//               />
//             </Grid>

//             <Grid item xs={6}>
//               <Button
//                 variant="outlined"
//                 color="secondary"
//                 fullWidth
//                 onClick={() => setTime("")}
//               >
//                 Clear
//               </Button>
//             </Grid>
//           </Grid>
//         </Grid>

//         {/* File Upload */}
//         <Grid item xs={12}>
//           <InputLabel sx={{ mb: 1 }}>Invoice</InputLabel>
//           <input
//             type="file"
//             multiple
//             accept=".png,.jpg,.jpeg,.pdf"
//             onChange={handleFileChange}
//             style={{ marginBottom: "8px" }}
//           />
//           <FilePreview previews={previews} />
//         </Grid>

//         {/* Submit Button */}
//         <Grid item xs={12}>
//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             onClick={addReminder}
//           >
//             {editIndex !== null ? "Update Reminder" : "Schedule Reminder"}
//           </Button>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default ReminderForm;

// //newkklde
// import { Grid, TextField, Button, InputLabel } from "@mui/material";
// import FilePreview from "./FilePreview";

// const ReminderForm = ({
//   title,
//   setTitle,
//   description,
//   setDescription,
//   email,
//   setEmail,
//   emailError,
//   setEmailError,
//   date,
//   setDate,
//   time,
//   setTime,
//   whatsapp,
//   setWhatsapp,
//   handleFileChange,
//   previews,
//   editIndex,
//   addReminder,
// }) => {
//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12}>
//         <TextField
//           fullWidth
//           label="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </Grid>

//       <Grid item xs={12}>
//         <TextField
//           fullWidth
//           label="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </Grid>

//       <Grid item xs={12}>
//         <TextField
//           fullWidth
//           label="Email"
//           type="email"
//           error={!!emailError}
//           helperText={emailError}
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//             if (emailError) setEmailError("");
//           }}
//         />
//       </Grid>

//       <Grid item xs={12} sm={6}>
//         <TextField
//           fullWidth
//           label="Date"
//           type="date"
//           InputLabelProps={{ shrink: true }}
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//       </Grid>

//       <Grid item xs={12} sm={6}>
//         <TextField
//           fullWidth
//           label="Time"
//           type="time"
//           InputLabelProps={{ shrink: true }}
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//         />
//         <Grid container spacing={1} sx={{ mt: 1 }}>
//           <Grid item xs={6}>
//             <Button
//               variant="outlined"
//               fullWidth
//               onClick={() =>
//                 document.getElementById("hidden-time-input")?.click()
//               }
//             >
//               Set
//             </Button>
//             <input
//               id="hidden-time-input"
//               type="time"
//               style={{ display: "none" }}
//               onChange={(e) => setTime(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <Button
//               variant="outlined"
//               color="secondary"
//               fullWidth
//               onClick={() => setTime("")}
//             >
//               Clear
//             </Button>
//           </Grid>
//         </Grid>
//       </Grid>

//       <Grid item xs={12}>
//         <TextField
//           fullWidth
//           label="WhatsApp Number"
//           placeholder="Enter WhatsApp number"
//           value={whatsapp}
//           onChange={(e) => setWhatsapp(e.target.value)}
//         />
//       </Grid>

//       <Grid item xs={12}>
//         <InputLabel sx={{ mb: 1 }}>Invoice</InputLabel>
//         <input
//           type="file"
//           multiple
//           accept=".png,.jpg,.jpeg,.pdf"
//           onChange={handleFileChange}
//         />
//         <FilePreview previews={previews} />
//       </Grid>

//       <Grid item xs={12}>
//         <Button
//           variant="contained"
//           color="primary"
//           fullWidth
//           onClick={addReminder}
//         >
//           {editIndex !== null ? "Update Reminder" : "Schedule Reminder"}
//         </Button>
//       </Grid>
//     </Grid>
//   );
// };

// export default ReminderForm;

//jj

// import { Grid, TextField, Input, Button, Box } from "@mui/material";
// import FilePreview from "./FilePreview";

// const ReminderForm = ({
//   title,
//   setTitle,
//   description,
//   setDescription,
//   date,
//   setDate,
//   time,
//   setTime,
//   email,
//   setEmail,
//   emailError,
//   setEmailError,
//   whatsapp,
//   setWhatsapp,
//   // files,
//   previews,
//   handleFileChange,
//   addReminder,
//   editIndex,
// }) => (
//   <Grid container spacing={2}>
//     <Grid item xs={12}>
//       <TextField
//         fullWidth
//         label="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         variant="outlined"
//         InputProps={{ style: { color: "white" } }}
//         InputLabelProps={{ style: { color: "white" } }}
//         sx={{ bgcolor: "#374151" }}
//       />
//     </Grid>
//     <Grid item xs={12}>
//       <TextField
//         fullWidth
//         label="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         variant="outlined"
//         InputProps={{ style: { color: "white" } }}
//         InputLabelProps={{ style: { color: "white" } }}
//         sx={{ bgcolor: "#374151" }}
//       />
//     </Grid>
//     <Grid item xs={12}>
//       <TextField
//         fullWidth
//         label="Email"
//         value={email}
//         onChange={(e) => {
//           setEmail(e.target.value);
//           if (emailError) setEmailError("");
//         }}
//         error={!!emailError}
//         helperText={emailError}
//         variant="outlined"
//         InputProps={{ style: { color: "white" } }}
//         InputLabelProps={{ style: { color: "white" } }}
//         sx={{ bgcolor: "#374151" }}
//       />
//     </Grid>
//     <Grid item xs={6}>
//       <TextField
//         fullWidth
//         type="date"
//         label="Date"
//         InputLabelProps={{ shrink: true, style: { color: "white" } }}
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//         sx={{ bgcolor: "#374151" }}
//         InputProps={{ style: { color: "white" } }}
//       />
//     </Grid>
//     <Grid item xs={6}>
//       <TextField
//         fullWidth
//         type="time"
//         label="Time"
//         InputLabelProps={{ shrink: true, style: { color: "white" } }}
//         value={time}
//         onChange={(e) => setTime(e.target.value)}
//         sx={{ bgcolor: "#374151" }}
//         InputProps={{ style: { color: "white" } }}
//       />
//     </Grid>
//     <Grid item xs={12}>
//       <TextField
//         fullWidth
//         label="WhatsApp Number"
//         value={whatsapp}
//         onChange={(e) => setWhatsapp(e.target.value)}
//         placeholder="Enter WhatsApp number (with country code)"
//         InputProps={{ style: { color: "white" } }}
//         InputLabelProps={{ style: { color: "white" } }}
//         sx={{ bgcolor: "#374151" }}
//       />
//     </Grid>
//     <Grid item xs={12}>
//       <Input
//         type="file"
//         inputProps={{ multiple: true, accept: ".png,.jpg,.jpeg,.pdf" }}
//         onChange={handleFileChange}
//         sx={{ bgcolor: "#374151", color: "white", p: 1 }}
//         fullWidth
//       />
//       <FilePreview previews={previews} />
//     </Grid>
//     <Grid item xs={12}>
//       <Button
//         fullWidth
//         variant="contained"
//         color="primary"
//         onClick={addReminder}
//         sx={{ bgcolor: "#6366F1", ":hover": { bgcolor: "#4F46E5" } }}
//       >
//         {editIndex !== null ? "Update Reminder" : "Schedule Reminder"}
//       </Button>
//     </Grid>
//   </Grid>
// );

// export default ReminderForm;

//twtfq

// import {
//   Grid,
//   TextField,
//   Input,
//   Button,
//   IconButton,
//   Box,
//   Typography,
// } from "@mui/material";
// import { AddCircle, RemoveCircle } from "@mui/icons-material";
// import FilePreview from "./FilePreview";

// const ReminderForm = ({
//   title,
//   setTitle,
//   description,
//   setDescription,
//   date,
//   setDate,
//   time,
//   setTime,
//   email,
//   setEmail,
//   emailError,
//   setEmailError,
//   whatsapp,
//   setWhatsapp,
//   previews,
//   handleFileChange,
//   addReminder,
//   editIndex,
// }) => {
//   // Allow multiple emails & WhatsApp numbers
//   const handleAddEmail = () => setEmail([...email, ""]);
//   const handleRemoveEmail = (i) =>
//     setEmail(email.filter((_, idx) => idx !== i));
//   const handleEmailChange = (val, i) => {
//     const updated = [...email];
//     updated[i] = val;
//     setEmail(updated);
//     if (emailError) setEmailError("");
//   };

//   const handleAddWhatsapp = () => setWhatsapp([...whatsapp, ""]);
//   const handleRemoveWhatsapp = (i) =>
//     setWhatsapp(whatsapp.filter((_, idx) => idx !== i));
//   const handleWhatsappChange = (val, i) => {
//     const updated = [...whatsapp];
//     updated[i] = val;
//     setWhatsapp(updated);
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12}>
//         <TextField
//           fullWidth
//           label="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           variant="outlined"
//           InputProps={{ style: { color: "white" } }}
//           InputLabelProps={{ style: { color: "white" } }}
//           sx={{ bgcolor: "#374151" }}
//         />
//       </Grid>

//       <Grid item xs={12}>
//         <TextField
//           fullWidth
//           label="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           variant="outlined"
//           InputProps={{ style: { color: "white" } }}
//           InputLabelProps={{ style: { color: "white" } }}
//           sx={{ bgcolor: "#374151" }}
//         />
//       </Grid>

//       {/* Multiple Emails */}
//       {email.map((emailVal, i) => (
//         <Grid item xs={12} key={`email-${i}`}>
//           <Box display="flex" alignItems="center">
//             <TextField
//               fullWidth
//               label={`Email ${i + 1}`}
//               value={emailVal}
//               onChange={(e) => handleEmailChange(e.target.value, i)}
//               error={!!emailError}
//               helperText={i === 0 && emailError}
//               variant="outlined"
//               InputProps={{ style: { color: "white" } }}
//               InputLabelProps={{ style: { color: "white" } }}
//               sx={{ bgcolor: "#374151", flex: 1 }}
//             />
//             <IconButton
//               onClick={() => handleRemoveEmail(i)}
//               disabled={email.length === 1}
//             >
//               <RemoveCircle sx={{ color: "white" }} />
//             </IconButton>
//             {i === email.length - 1 && (
//               <IconButton onClick={handleAddEmail}>
//                 <AddCircle sx={{ color: "white" }} />
//               </IconButton>
//             )}
//           </Box>
//         </Grid>
//       ))}

//       <Grid item xs={6}>
//         <TextField
//           fullWidth
//           type="date"
//           label="Date"
//           InputLabelProps={{ shrink: true, style: { color: "white" } }}
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           sx={{ bgcolor: "#374151" }}
//           InputProps={{ style: { color: "white" } }}
//         />
//       </Grid>
//       <Grid item xs={6}>
//         <Box display="flex">
//           <TextField
//             fullWidth
//             type="time"
//             label="Time"
//             InputLabelProps={{ shrink: true, style: { color: "white" } }}
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             sx={{ bgcolor: "#374151", flex: 1 }}
//             InputProps={{ style: { color: "white" } }}
//           />
//           <Button onClick={() => setTime("")} sx={{ ml: 1 }} variant="outlined">
//             Clear
//           </Button>
//         </Box>
//       </Grid>

//       {/* Multiple WhatsApp Numbers */}
//       {whatsapp.map((whatsappVal, i) => (
//         <Grid item xs={12} key={`whatsapp-${i}`}>
//           <Box display="flex" alignItems="center">
//             <TextField
//               fullWidth
//               label={`WhatsApp ${i + 1}`}
//               value={whatsappVal}
//               onChange={(e) => handleWhatsappChange(e.target.value, i)}
//               placeholder="With country code"
//               InputProps={{ style: { color: "white" } }}
//               InputLabelProps={{ style: { color: "white" } }}
//               sx={{ bgcolor: "#374151", flex: 1 }}
//             />
//             <IconButton
//               onClick={() => handleRemoveWhatsapp(i)}
//               disabled={whatsapp.length === 1}
//             >
//               <RemoveCircle sx={{ color: "white" }} />
//             </IconButton>
//             {i === whatsapp.length - 1 && (
//               <IconButton onClick={handleAddWhatsapp}>
//                 <AddCircle sx={{ color: "white" }} />
//               </IconButton>
//             )}
//           </Box>
//         </Grid>
//       ))}

//       {/* File Upload & Preview */}
//       <Grid item xs={12}>
//         <Input
//           type="file"
//           inputProps={{ multiple: true, accept: ".png,.jpg,.jpeg,.pdf" }}
//           onChange={handleFileChange}
//           sx={{ bgcolor: "#374151", color: "white", p: 1 }}
//           fullWidth
//         />
//         <FilePreview previews={previews} />
//       </Grid>

//       {/* Submit Button */}
//       <Grid item xs={12}>
//         <Button
//           fullWidth
//           variant="contained"
//           color="primary"
//           onClick={addReminder}
//           sx={{ bgcolor: "#6366F1", ":hover": { bgcolor: "#4F46E5" } }}
//         >
//           {editIndex !== null ? "Update Reminder" : "Schedule Reminder"}
//         </Button>
//       </Grid>
//     </Grid>
//   );
// };

// export default ReminderForm;




//new 10.06


import { Grid, TextField, Input, Button, Box } from "@mui/material";
import FilePreview from "./FilePreview";

const ReminderForm = ({
  title,
  setTitle,
  description,
  setDescription,
  date,
  setDate,
  time,
  setTime,
  email,
  setEmail,
  emailError,
  setEmailError,
  whatsapp,
  setWhatsapp,
  // files,
  previews,
  handleFileChange,
  addReminder,
  editIndex,
}) => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        variant="outlined"
        InputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
        sx={{ bgcolor: "#374151" }}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        variant="outlined"
        InputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
        sx={{ bgcolor: "#374151" }}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (emailError) setEmailError("");
        }}
        error={!!emailError}
        helperText={emailError}
        variant="outlined"
        InputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
        sx={{ bgcolor: "#374151" }}
      />
    </Grid>
    <Grid item xs={6}>
      <TextField
        fullWidth
        type="date"
        label="Date"
        InputLabelProps={{ shrink: true, style: { color: "white" } }}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        sx={{ bgcolor: "#374151" }}
        InputProps={{ style: { color: "white" } }}
      />
    </Grid>
    <Grid item xs={6}>
      <TextField
        fullWidth
        type="time"
        label="Time"
        InputLabelProps={{ shrink: true, style: { color: "white" } }}
        value={time}
        onChange={(e) => setTime(e.target.value)}
        sx={{ bgcolor: "#374151" }}
        InputProps={{ style: { color: "white" } }}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="WhatsApp Number"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        placeholder="Enter WhatsApp number (with country code)"
        InputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
        sx={{ bgcolor: "#374151" }}
      />
    </Grid>
    <Grid item xs={12}>
      <Input
        type="file"
        inputProps={{ multiple: true, accept: ".png,.jpg,.jpeg,.pdf" }}
        onChange={handleFileChange}
        sx={{ bgcolor: "#374151", color: "white", p: 1 }}
        fullWidth
      />
      <FilePreview previews={previews} />
    </Grid>
    <Grid item xs={12}>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={addReminder}
        sx={{ bgcolor: "#6366F1", ":hover": { bgcolor: "#4F46E5" } }}
      >
        {editIndex !== null ? "Update Reminder" : "Schedule Reminder"}
      </Button>
    </Grid>
  </Grid>
);

export default ReminderForm; 
