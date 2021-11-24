import { Container, Grid } from '@mui/material';
import React from 'react';
import Time from '../Time/Time';

const TimeContainer = ({ entryTime, setEntryTime, endTime, setEndTime }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Time time={entryTime} setTime={setEntryTime} label="Entry Time" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Time time={endTime} setTime={setEndTime} label="Left Time" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TimeContainer;
