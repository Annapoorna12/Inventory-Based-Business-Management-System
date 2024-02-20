import React from 'react';
import { Box, useTheme } from "@mui/material";
import MiniCalendar from "../../components/MiniCalendar"; // Import the MiniCalendar component
import Header from "../../components/Header";
import { tokens } from "../../theme";

const CalendarPage = () => { // Rename function component to start with uppercase letter
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Mini Calendar" /> {/* Update title and subtitle */}
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <MiniCalendar /> {/* Render the MiniCalendar component */}
      </Box>
    </Box>
  );
};

export default CalendarPage;
