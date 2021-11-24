import { Container, Grid } from '@mui/material';
import React from 'react';
import Time from '../Time/Time';

const TimeContainer = ({
  entryTime,
  setEntryTime,
  endTime,
  setEndTime,
  myEventsList,
  setMyEventsList,
}) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Time
            time={entryTime}
            setTime={setEntryTime}
            label="Entry Time"
            myEventsList={myEventsList}
            setMyEventsList={setMyEventsList}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Time
            time={endTime}
            setTime={setEndTime}
            label="Left Time"
            myEventsList={myEventsList}
            setMyEventsList={setMyEventsList}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TimeContainer;
