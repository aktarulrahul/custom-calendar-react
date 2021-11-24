import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Stack from '@mui/material/Stack';

export default function Time({ label, time, setTime }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DateTimePicker
          renderInput={(params) => <TextField {...params} />}
          label={label}
          value={new Date()}
          onChange={(newValue) => {
            setTime(newValue);
          }}
        />
      </Stack>
    </LocalizationProvider>
  );
}
