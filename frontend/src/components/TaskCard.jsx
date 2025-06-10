import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const TaskCard = ({ title, status, color }) => (
  <Card sx={{ width: 250, borderLeft: `6px solid ${color || "#ccc"}` }}>
    <CardContent>
      <Typography variant="subtitle1" fontWeight="bold">
        {title}
      </Typography>
      {status && (
        <Typography variant="body2" color="textSecondary">
          {status}
        </Typography>
      )}
    </CardContent>
  </Card>
);

export default TaskCard;
