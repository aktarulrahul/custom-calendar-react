import React, { useState } from 'react';
import { Box } from '@mui/material';
import CalenderContainer from '../CalenderContainer/CalenderContainer';
import TimeContainer from '../TimeContainer/TimeContainer';

const Home = () => {
  const [entryTime, setEntryTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [myEventsList, setMyEventsList] = useState([]);

  return (
    <Box sx={{ my: 2 }}>
      <TimeContainer
        entryTime={entryTime}
        setEntryTime={setEntryTime}
        endTime={endTime}
        setEndTime={setEndTime}
        myEventsList={myEventsList}
        setMyEventsList={setMyEventsList}
      />

      <CalenderContainer
        entryTime={entryTime}
        endTime={endTime}
        myEventsList={myEventsList}
      />
    </Box>
  );
};

export default Home;
