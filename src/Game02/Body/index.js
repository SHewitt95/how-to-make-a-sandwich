import React, { useState, useEffect } from 'react';
import SandwichesPerSecondTracker from './SandwichesPerSecondTracker';
import SandwichButton from './SandwichButton';
import ArmsUpgrader from './ArmsUpgrader';
import SandwichMenu from './SandwichMenu';
import AchievementAnnouncer from './AchievementAnnouncer';
import { useCurrentSandwichCount, usePlayerLevel } from './hooks';

const Body = () => {
  const [showMenu, setshowMenu] = useState(false);
  const currentSandwichCount = useCurrentSandwichCount();
  const playerLevel = usePlayerLevel();

  useEffect(() => {
    if (currentSandwichCount >= 100 || playerLevel >= 5) {
      setshowMenu(true);
    } else {
      setshowMenu(false);
    }
  }, [currentSandwichCount, playerLevel])

  return (
    <>
      <SandwichesPerSecondTracker />
      <SandwichButton />
      <ArmsUpgrader />
      {showMenu && <SandwichMenu />}
      <AchievementAnnouncer />
    </>
  );
}

export default Body;