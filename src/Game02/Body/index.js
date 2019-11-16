import React from 'react';
import SandwichesPerSecondTracker from './SandwichesPerSecondTracker';
import SandwichButton from './SandwichButton';
import ArmsUpgrader from './ArmsUpgrader';
import SandwichMenu from './SandwichMenu';
import AchievementAnnouncer from './AchievementAnnouncer';

const Body = () => {
  return (
    <>
      <SandwichesPerSecondTracker />
      <SandwichButton />
      <ArmsUpgrader />
      <SandwichMenu />
      <AchievementAnnouncer />
    </>
  );
}

export default Body;