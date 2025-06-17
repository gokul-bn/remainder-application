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
