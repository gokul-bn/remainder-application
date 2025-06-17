import React from "react";
import {
  Box,
  Avatar,
  Typography,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import EditNotificationsIcon from "@mui/icons-material/EditNotifications";
import LoginIcon from "@mui/icons-material/Login";
import {
  Dashboard,
  ListAlt,
  Category,
  
  
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const navItems = [
  {
    icon: <Dashboard sx={{ color: "#E3E8F8", fontSize: 25 }} />,
    label: "Dashboard",
    path: "/",
  },
  {
    icon: <EditNotificationsIcon sx={{ color: "#E3E8F8", fontSize: 25 }} />,
    label: "Reminder",
    path: "/reminder-ap",
  },
  {
    icon: <ListAlt sx={{ color: "#E3E8F8", fontSize: 25 }} />,
    label: "Task",
    path: "#",
  },
  {
    icon: <Category sx={{ color: "#E3E8F8", fontSize: 25 }} />,
    label: "Notes",
    path: "#",
  },
  {
    icon: <LoginIcon sx={{ color: "#E3E8F8", fontSize: 25 }} />,
    label: "Login",
    path: "/login",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: { xs: "none", sm: "block" },
        width: 250,
        background: "linear-gradient(to bottom, #7743DB, #F7418F)",
        minHeight: "100vh",
        p: 2,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Avatar sx={{ width: 64, height: 64, mx: "auto", mb: 1 }}></Avatar>
        <Typography variant="h6" sx={{ color: "white" }}></Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItemButton key={item.label} onClick={() => navigate(item.path)}>
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText sx={{ color: "white" }} primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
