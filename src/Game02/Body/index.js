import React, { useState, useEffect } from 'react';
import SandwichesPerSecondTracker from './SandwichesPerSecondTracker';
import SandwichButton from './SandwichButton';
import ArmsUpgrader from './ArmsUpgrader';
import SandwichMenu from './SandwichMenu';
import AchievementAnnouncer from './AchievementAnnouncer';
import { useThreshold, useCurrentSandwichCount, usePlayerLevel } from './hooks';
// import { BASE_PROGRESS_BAR_THRESHOLD } from '../data/_utils/constants';

const Body = () => {
  const [showArms, setShowArms] = useState(false);
  const [showMenu, setshowMenu] = useState(false);
  const threshold = useThreshold();
  const currentSandwichCount = useCurrentSandwichCount();
  const playerLevel = usePlayerLevel();

  useEffect(() => {
    if (currentSandwichCount >= 10) {
      setShowArms(true);
    }
  }, [threshold, currentSandwichCount]);

  useEffect(() => {
    if (currentSandwichCount >= 100 || playerLevel >= 5) {
      setshowMenu(true);
    }
  }, [currentSandwichCount, playerLevel])

  return (
    <>
      <SandwichesPerSecondTracker />
      <SandwichButton />
      {showArms && <ArmsUpgrader />}
      {showMenu && <SandwichMenu />}
      <AchievementAnnouncer />
    </>
  );
}

export default Body;