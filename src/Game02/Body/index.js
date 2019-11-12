import React from 'react';
import SandwichTracker from './SandwichTracker';
import SandwichButton from './SandwichButton';
import UpgradeStepper from './UpgradeStepper';
import HelpersList from './HelpersList';

const Body = () => {
  return (
    <>
      <SandwichTracker />
      <SandwichButton />
      <UpgradeStepper />
      <HelpersList />
    </>
  );
}

export default Body;