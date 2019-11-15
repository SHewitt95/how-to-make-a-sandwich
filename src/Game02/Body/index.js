import React from 'react';
import SandwichTracker from './SandwichTracker';
import SandwichButton from './SandwichButton';
import UpgradeStepper from './UpgradeStepper';
import HelpersList from './HelpersList';
import SandwichMenu from './SandwichMenu';
import AchievementAnnouncer from './AchievementAnnouncer';

const Body = () => {
  return (
    <>
      <SandwichTracker />
      <SandwichButton />
      <UpgradeStepper />
      <HelpersList />
      <SandwichMenu />
      <AchievementAnnouncer />
    </>
  );
}

export default Body;