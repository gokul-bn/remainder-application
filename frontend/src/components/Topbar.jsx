import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Select,
  MenuItem,
  Popover,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const Topbar = () => {
  const [range, setRange] = useState("This month");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleCalendarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            background: "linear-gradient(to right, #6a11cb, #2575fc)", // Purple to blue
            color: "#fff",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Vyoobam Reminder
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton size="small" onClick={handleCalendarClick}>
              <CalendarTodayIcon />
            </IconButton>

            <Select
              size="small"
              value={range}
              onChange={(e) => setRange(e.target.value)}
              variant="outlined"
            >
              <MenuItem value="This month">This month</MenuItem>
              <MenuItem value="Last month">Last month</MenuItem>
              <MenuItem value="This year">This year</MenuItem>
            </Select>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Calendar Popover */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box sx={{ p: 2 }}>
          <DatePicker
            label="Pick a date"
            value={selectedDate}
            onChange={(newValue) => {
              setSelectedDate(newValue);
              handleClose();
            }}
            sx={{ width: 200 }}
          />
        </Box>
      </Popover>
    </LocalizationProvider>
  );
};

export default Topbar;
