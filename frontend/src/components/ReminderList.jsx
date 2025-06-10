// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Avatar,
//   Typography,
//   IconButton,
//   Box,
// } from "@mui/material";
// import { FaEdit, FaTrash } from "react-icons/fa";

// const ReminderTable = ({ reminders, editReminder, deleteReminder }) => {
//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow sx={{ backgroundColor: "#673ab7" }}>
//             <TableCell sx={{ color: "#fff" }}>Title</TableCell>
//             <TableCell sx={{ color: "#fff" }}>Description</TableCell>
//             <TableCell sx={{ color: "#fff" }}>Email</TableCell>
//             <TableCell sx={{ color: "#fff" }}>WhatsApp</TableCell>
//             <TableCell sx={{ color: "#fff" }}>Date & Time</TableCell>
//             <TableCell sx={{ color: "#fff" }}>Attachments</TableCell>
//             <TableCell sx={{ color: "#fff" }}>Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {reminders.map((reminder, index) => (
//             <TableRow key={index}>
//               <TableCell>{reminder.title}</TableCell>
//               <TableCell>{reminder.description}</TableCell>
//               <TableCell>{reminder.email}</TableCell>
//               <TableCell>{reminder.whatsapp}</TableCell>
//               <TableCell>
//                 {reminder.date} {reminder.time}
//               </TableCell>
//               <TableCell>
//                 <Box sx={{ display: "flex", gap: 1 }}>
//                   {reminder.files?.map((file, i) =>
//                     file.type.startsWith("image/") ? (
//                       <Avatar
//                         key={i}
//                         src={URL.createObjectURL(file)}
//                         variant="rounded"
//                       />
//                     ) : (
//                       <Typography key={i} variant="caption" color="primary">
//                         {file.name}
//                       </Typography>
//                     )
//                   )}
//                 </Box>
//               </TableCell>
//               <TableCell>
//                 <IconButton color="warning" onClick={() => editReminder(index)}>
//                   <FaEdit />
//                 </IconButton>
//                 <IconButton color="error" onClick={() => deleteReminder(index)}>
//                   <FaTrash />
//                 </IconButton>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default ReminderTable;

//new 1

// import {
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Grid,
//   Typography,
//   IconButton,
// } from "@mui/material";
// import { FaEdit, FaTrash } from "react-icons/fa";

// const ReminderTable = ({ reminders, editReminder, deleteReminder }) => (
//   <Table>
//     <TableHead sx={{ backgroundColor: "#7E57C2" }}>
//       <TableRow>
//         <TableCell>Title</TableCell>
//         <TableCell>Description</TableCell>
//         <TableCell>Email</TableCell>
//         <TableCell>WhatsApp</TableCell>
//         <TableCell>Date & Time</TableCell>
//         <TableCell>Attachments</TableCell>
//         <TableCell>Actions</TableCell>
//       </TableRow>
//     </TableHead>
//     <TableBody>
//       {reminders.map((reminder, index) => (
//         <TableRow key={index}>
//           <TableCell>{reminder.title}</TableCell>
//           <TableCell>{reminder.description}</TableCell>
//           <TableCell>{reminder.email}</TableCell>
//           <TableCell>{reminder.whatsapp}</TableCell>
//           <TableCell>
//             {reminder.date} {reminder.time}
//           </TableCell>
//           <TableCell>
//             <Grid container spacing={1}>
//               {reminder.files?.map((file, i) => (
//                 <Grid item key={i}>
//                   {file.type.startsWith("image/") ? (
//                     <img
//                       src={URL.createObjectURL(file)}
//                       alt={file.name}
//                       width={40}
//                       height={40}
//                       style={{ objectFit: "cover", borderRadius: 4 }}
//                     />
//                   ) : (
//                     <Typography variant="caption" color="primary">
//                       PDF: {file.name}
//                     </Typography>
//                   )}
//                 </Grid>
//               ))}
//             </Grid>
//           </TableCell>
//           <TableCell>
//             <IconButton color="warning" onClick={() => editReminder(index)}>
//               <FaEdit />
//             </IconButton>
//             <IconButton color="error" onClick={() => deleteReminder(index)}>
//               <FaTrash />
//             </IconButton>
//           </TableCell>
//         </TableRow>
//       ))}
//     </TableBody>
//   </Table>
// );

// export default ReminderTable;

//perfect

import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { FaEdit, FaTrash } from "react-icons/fa";

const ReminderList = ({ reminders, editReminder, deleteReminder }) => (
  <Paper
    sx={{
      maxWidth: 800,
      mx: "auto",
      mt: 4,
      overflowX: "auto",
      bgcolor: "#1F2937",
    }}
  >
    <Table sx={{ minWidth: 650 }}>
      <TableHead sx={{ bgcolor: "#7C3AED" }}>
        <TableRow>
          {[
            "Title",
            "Description",
            "Email",
            "WhatsApp",
            "Date & Time",
            "Attachments",
            "Actions",
          ].map((text, i) => (
            <TableCell key={i} sx={{ color: "white", borderColor: "#374151" }}>
              {text}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {reminders.map((reminder, index) => (
          <TableRow
            key={index}
            sx={{ bgcolor: index % 2 === 0 ? "#374151" : "#4B5563" }}
          >
            <TableCell sx={{ color: "white" }}>{reminder.title}</TableCell>
            <TableCell sx={{ color: "white" }}>
              {reminder.description}
            </TableCell>
            <TableCell sx={{ color: "white" }}>{reminder.email}</TableCell>
            <TableCell sx={{ color: "white" }}>{reminder.whatsapp}</TableCell>
            <TableCell sx={{ color: "white" }}>
              {reminder.date} {reminder.time}
            </TableCell>
            <TableCell>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {reminder.files?.map((file, i) => {
                  if (file.type.startsWith("image/")) {
                    return (
                      <Avatar
                        key={i}
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        variant="rounded"
                        sx={{ width: 48, height: 48 }}
                      />
                    );
                  } else if (file.type === "application/pdf") {
                    return (
                      <Typography
                        key={i}
                        sx={{ color: "#93C5FD", fontSize: 12 }}
                      >
                        PDF: {file.name}
                      </Typography>
                    );
                  }
                  return null;
                })}
              </Box>
            </TableCell>
            <TableCell>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    bgcolor: "#FACC15",
                    color: "black",
                    ":hover": { bgcolor: "#EAB308" },
                  }}
                  onClick={() => editReminder(index)}
                >
                  <FaEdit />
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    bgcolor: "#DC2626",
                    ":hover": { bgcolor: "#B91C1C" },
                  }}
                  onClick={() => deleteReminder(index)}
                >
                  <FaTrash />
                </Button>
              </Box>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default ReminderList;


//new table 4.6

// import {
//   Paper,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Avatar,
//   Typography,
//   Button,
//   Box,
//   TableContainer,
// } from "@mui/material";
// import { FaEdit, FaTrash } from "react-icons/fa";

// const ReminderList = ({ reminders, editReminder, deleteReminder }) => (
//   <Box sx={{ width: "100%", overflowX: "auto", mt: 4 }}>
//     <TableContainer
//       component={Paper}
//       sx={{ bgcolor: "#1F2937", width: "100%" }}
//     >
//       <Table sx={{ minWidth: 800 }}>
//         <TableHead sx={{ bgcolor: "#7C3AED" }}>
//           <TableRow>
//             {[
//               "Title",
//               "Description",
//               "Email",
//               "WhatsApp",
//               "Date & Time",
//               "Attachments",
//               "Actions",
//             ].map((text, i) => (
//               <TableCell
//                 key={i}
//                 sx={{
//                   color: "white",
//                   borderColor: "#374151",
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 {text}
//               </TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {reminders.map((reminder, index) => (
//             <TableRow
//               key={index}
//               sx={{ bgcolor: index % 2 === 0 ? "#374151" : "#4B5563" }}
//             >
//               <TableCell sx={{ color: "white" }}>{reminder.title}</TableCell>
//               <TableCell sx={{ color: "white" }}>
//                 {reminder.description}
//               </TableCell>
//               <TableCell sx={{ color: "white" }}>{reminder.email}</TableCell>
//               <TableCell sx={{ color: "white" }}>{reminder.whatsapp}</TableCell>
//               <TableCell sx={{ color: "white" }}>
//                 {reminder.date} {reminder.time}
//               </TableCell>
//               <TableCell>
//                 <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
//                   {reminder.files?.map((file, i) => {
//                     if (file.type.startsWith("image/")) {
//                       return (
//                         <Avatar
//                           key={i}
//                           src={URL.createObjectURL(file)}
//                           alt={file.name}
//                           variant="rounded"
//                           sx={{ width: 48, height: 48 }}
//                         />
//                       );
//                     } else if (file.type === "application/pdf") {
//                       return (
//                         <Typography
//                           key={i}
//                           sx={{ color: "#93C5FD", fontSize: 12 }}
//                         >
//                           PDF: {file.name}
//                         </Typography>
//                       );
//                     }
//                     return null;
//                   })}
//                 </Box>
//               </TableCell>
//               <TableCell>
//                 <Box sx={{ display: "flex", gap: 1 }}>
//                   <Button
//                     variant="contained"
//                     size="small"
//                     sx={{
//                       bgcolor: "#FACC15",
//                       color: "black",
//                       ":hover": { bgcolor: "#EAB308" },
//                     }}
//                     onClick={() => editReminder(index)}
//                   >
//                     <FaEdit />
//                   </Button>
//                   <Button
//                     variant="contained"
//                     size="small"
//                     sx={{
//                       bgcolor: "#DC2626",
//                       ":hover": { bgcolor: "#B91C1C" },
//                     }}
//                     onClick={() => deleteReminder(index)}
//                   >
//                     <FaTrash />
//                   </Button>
//                 </Box>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   </Box>
// );

// export default ReminderList;
