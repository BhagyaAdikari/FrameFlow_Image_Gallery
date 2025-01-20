import React, { useState } from "react";
import './Sample.css';
import { Button, TextField, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UserTaskReport = () => {
  const [userId, setUserId] = useState("");
  const [userDetails, setUserDetails] = useState(null);

  // Dummy data for demonstration purposes
  const dummyData = {
    1: { name: "John Doe", tasks: ["Task 1", "Task 2", "Task 3"] },
    2: { name: "Jane Smith", tasks: ["Task A", "Task B"] },
  };

  const handleFetchDetails = () => {
    const details = dummyData[userId];
    if (details) {
      setUserDetails(details);
    } else {
      alert("No user found with this ID");
    }
  };

  const handleDownloadReport = () => {
    if (userDetails) {
      const reportContent = `User Report\n\nName: ${userDetails.name}\nTasks Completed:\n${userDetails.tasks.join("\n")}`;
      const blob = new Blob([reportContent], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `User_${userId}_Report.txt`;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom>
        User Task Report
      </Typography>
      <TextField
        label="Enter User ID"
        variant="outlined"
        fullWidth
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <Button variant="contained" color="primary" onClick={handleFetchDetails}>
        Fetch Details
      </Button>

      {userDetails && (
        <div style={{ marginTop: "20px" }}>
          <Typography variant="h6">Name: {userDetails.name}</Typography>
          <Typography variant="h6" style={{ marginTop: "10px" }}>
            Tasks Completed:
          </Typography>
          <TableContainer component={Paper} style={{ marginTop: "10px" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Task</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userDetails.tasks.map((task, index) => (
                  <TableRow key={index}>
                    <TableCell>{task}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDownloadReport}
            style={{ marginTop: "20px" }}
          >
            Download Report
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserTaskReport;