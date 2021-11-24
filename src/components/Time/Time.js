import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';

export default function Time({
  label,
  setTime,
  myEventsList,
  setMyEventsList,
}) {
  const [timeValue, setTimeValue] = React.useState(new Date());
  const handleTime = (time) => {
    const newEvent = {
      title: `${time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })} ${label}`,
      start: new Date(time),
      end: new Date(time),
    };
    const newEventsList = [...myEventsList, newEvent];
    console.log(newEventsList);
    setMyEventsList(newEventsList);
    setTime(time);
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DateTimePicker
            renderInput={(params) => <TextField {...params} />}
            label={label}
            value={timeValue}
            onChange={(newValue) => {
              setTimeValue(newValue);
            }}
          />
        </Stack>
      </LocalizationProvider>
      <Button
        sx={{ my: 2 }}
        variant="outlined"
        onClick={() => handleTime(timeValue)}
      >
        Confirm {label}
      </Button>
    </>
  );
}

// title, start, end
