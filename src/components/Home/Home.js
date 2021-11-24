import React, { useState } from 'react';
import { Box } from '@mui/material';
import Calender from '../Calender/Calender';
import TimeContainer from '../TimeContainer/TimeContainer';

const Home = () => {
  const [entryTime, setEntryTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  return (
    <Box sx={{ my: 2 }}>
      <TimeContainer
        entryTime={entryTime}
        setEntryTime={setEntryTime}
        endTime={endTime}
        setEndTime={setEndTime}
      />

      <Calender entryTime={entryTime} endTime={endTime} />
    </Box>
  );
};

export default Home;
