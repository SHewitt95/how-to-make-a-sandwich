import React from 'react';
import { useSandwichesPerSecondRate } from '../hooks';
import { numberWithCommas } from '../helpers'

const SandwichesPerSecondTracker = () => {
  return (
    <p>Sandwiches made per second: {numberWithCommas(useSandwichesPerSecondRate())}</p>
  );
}

export default SandwichesPerSecondTracker;