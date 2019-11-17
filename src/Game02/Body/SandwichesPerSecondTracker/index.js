import React from 'react';
import { useSandwichesPerSecondRate, usePlayerLevel } from '../hooks';
import { numberWithCommas } from '../helpers'

const SandwichesPerSecondTracker = () => {
  return (
    <>
    <p>Sandwiches made per second: {numberWithCommas(useSandwichesPerSecondRate())}</p>
    <p>Number of extra hands: {numberWithCommas(usePlayerLevel())}</p>
    </>
  );
}

export default SandwichesPerSecondTracker;