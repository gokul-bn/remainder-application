import React from "react";
import { Box, Typography } from "@mui/material";

import TaskCard from "../components/TaskCard";
import TaskStatus from "../components/TaskStatus";
import { taskData, completedTasks } from "../utils/tasks";

const DashboardPage = () => {
  const userName = "Luffy";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        fontFamily: '"Nunito", sans-serif',
      }}
    >
      <Box sx={{ flexGrow: 1, backgroundColor: "#111827", minHeight: "100vh" }}>
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Welcome, {userName}
          </Typography>
          <TaskStatus />
          <Typography variant="h6" gutterBottom>
            Reminder Task
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
            {taskData.map((task, idx) => (
              <TaskCard key={idx} {...task} />
            ))}
          </Box>
          <Typography variant="h6" gutterBottom>
            Completed Task
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {completedTasks.map((task, idx) => (
              <TaskCard
                key={idx}
                title={task.title}
                status="Completed"
                color="#69db7c"
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;
