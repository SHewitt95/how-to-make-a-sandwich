import React, { useState } from 'react';
import { useInterval } from '../../Body/HelpersList';

const getPlural = (number = 0, pluralForm = 's') => `${number === 1 ? '' : pluralForm}`;

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;

  useInterval(() => {
    setSeconds((seconds + 1) % 60);
  }, second);

  useInterval(() => {
    setMinutes((minutes + 1) % 60);
  }, minute);

  useInterval(() => {
    setHours(hours + 1);
  }, hour);

  return (
    <p>Time taken: {`${hours} hour${getPlural(hours)}, ${minutes} minute${getPlural(minutes)} and ${seconds} second${getPlural(seconds)}.`}</p>
  );
};

export default Timer;