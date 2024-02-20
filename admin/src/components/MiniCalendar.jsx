import React, { useState } from 'react';
import { Card, Typography } from '@mui/material';

import { useTheme } from "@mui/material";
import { ResponsiveCalendar } from "@nivo/calendar";
import { tokens } from "../theme";
import { mockCalendarData as data } from "../data/mockCalendarData";

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'; // Import icons
import Calendar from 'react-calendar';


const MiniCalendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: 'max-content',
    padding: '20px 15px',
    height: 'max-content',
  };

  const [value, onChange] = useState(new Date());

  return (
    <Card sx={containerStyles}> {/* Use Card component with defined styles */}
      <Calendar
        onChange={onChange}
        value={value}
        view="month"
        tileContent={<Typography color='blueAccent[500]'></Typography>}

        prevLabel={<MdChevronLeft style={{ width: '24px', height: '24px', marginTop: '4px' }} />}
        nextLabel={<MdChevronRight style={{ width: '24px', height: '24px', marginTop: '4px' }} />}
      />
    </Card>
  );
};

export default MiniCalendar;
