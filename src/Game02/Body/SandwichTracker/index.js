import React from 'react';
import { useSandwichesPerSecondRate } from '../hooks';

const SandwichTracker = () => {
  return (
    <p>Sandwiches made per second: {useSandwichesPerSecondRate()}</p>
  );
}

export default SandwichTracker;