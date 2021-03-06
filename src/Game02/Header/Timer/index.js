import React, { useState } from 'react';
import { useInterval, useIsGameActive } from '../../Body/hooks';

const getPlural = (number = 0, pluralForm = 's') => `${number === 1 ? '' : pluralForm}`;

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const isGameActive = useIsGameActive();

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;

  useInterval(() => {
    if (isGameActive) {
      setSeconds((seconds + 1) % 60);
    }
  }, second);

  useInterval(() => {
    if (isGameActive) {
      setMinutes((minutes + 1) % 60);
    }
  }, minute);

  useInterval(() => {
    if (isGameActive) {
      setHours(hours + 1);
    }
  }, hour);

  return (
    <p>Time taken: {`${hours} hour${getPlural(hours)}, ${minutes} minute${getPlural(minutes)} and ${seconds} second${getPlural(seconds)}.`}</p>
  );
};

export default Timer;