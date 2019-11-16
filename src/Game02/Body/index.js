import React from 'react';
import SandwichesPerSecondTracker from './SandwichesPerSecondTracker';
import SandwichButton from './SandwichButton';
import UpgradeStepper from './UpgradeStepper';
import SandwichMenu from './SandwichMenu';
import AchievementAnnouncer from './AchievementAnnouncer';

const Body = () => {
  return (
    <>
      <SandwichesPerSecondTracker />
      <SandwichButton />
      <UpgradeStepper />
      <SandwichMenu />
      <AchievementAnnouncer />
    </>
  );
}

export default Body;