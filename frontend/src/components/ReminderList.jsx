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

