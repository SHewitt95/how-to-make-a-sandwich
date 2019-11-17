import React, { useContext, useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import { useThreshold, useCurrentSandwichCount, useAutoPlayerLevelUpdate, usePlayerLevel } from '../hooks';
import Context from '../../data/context';
import { Actions, BASE_PROGRESS_BAR_THRESHOLD } from '../../data/_utils/constants';

const ArmsUpgrader = () => {
  const [state, dispatch] = useContext(Context);
  const [showButton, setShowButton] = useState(false);

  const threshold = useThreshold();
  const currentValue = useCurrentSandwichCount();
  const playerLevel = usePlayerLevel();

  // Auto "Ask for Help"
  useAutoPlayerLevelUpdate();

  useEffect(() => {
    if (currentValue >= BASE_PROGRESS_BAR_THRESHOLD) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [currentValue]);

  return (
    <section>
      {showButton && <button disabled={currentValue < threshold} onClick={() => {
        dispatch({ type: Actions.UP_PLAYER_LEVEL, payload: 1 });
        if (playerLevel >= 10 && !state.autoPlayerLevelActive) {
          dispatch({ type: Actions.ACTIVATE_AUTO_ARMS });
        }
      }}>{playerLevel >= 10 && !state.autoPlayerLevelActive ? "Drink 'Automatic Arms Growth Potion'" : 'Grow more hands!'}</button>}
      <ProgressBar maxValue={threshold} currentValue={currentValue} valueName="Sandwich Count" />
    </section>
  );
}

export default ArmsUpgrader;