import React from 'react';

const Calender = ({ entryTime, endTime }) => {
  return (
    <div>
      Calender {entryTime?.toLocaleDateString()}{' '}
      {entryTime?.toLocaleTimeString('en-US', { hour12: false })}
    </div>
  );
};

export default Calender;
