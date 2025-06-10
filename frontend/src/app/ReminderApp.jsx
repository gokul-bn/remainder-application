import { Box, Paper, Typography } from "@mui/material";
import { FaBell } from "react-icons/fa";
import ReminderForm from "../components/ReminderForm";
import ReminderList from "../components/ReminderList";
import useReminders from "../hooks/useReminders";

const ReminderApp = () => {
  const reminderProps = useReminders();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#111827", color: "white", p: 4 }}>
      <Paper sx={{ maxWidth: 600, mx: "auto", p: 4, bgcolor: "#1F2937" }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            color: "white",
          }}
        >
          <FaBell style={{ color: "#818CF8" }} /> Reminder App
        </Typography>
        <ReminderForm {...reminderProps} />
      </Paper>
      <ReminderList {...reminderProps} />
    </Box>
  );
};

export default ReminderApp;
