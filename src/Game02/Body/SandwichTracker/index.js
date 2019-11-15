import React from 'react';
import { useSandwichesPerSecondRate } from '../hooks';
import { numberWithCommas } from '../helpers'

const SandwichTracker = () => {
  return (
    <p>Sandwiches made per second: {numberWithCommas(useSandwichesPerSecondRate())}</p>
  );
}

export default SandwichTracker;