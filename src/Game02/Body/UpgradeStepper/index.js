import React, { useState, useContext, useEffect } from 'react';
import upgradeThresholds from './upgrades';
import Context from '../../data/context';
import { MAX_NUMBER, Actions } from '../../data/_utils/constants';

const UpgradeStepper = () => {
  const [state, dispatch] = useContext(Context);
  const [threshold, setThreshold] = useState(upgradeThresholds[state.playerLevel]);
  const [currentValue, setCurrentValue] = useState(MAX_NUMBER - state.peopleCount);

  useEffect(() => {
    setCurrentValue(currentValue + 1);
    // eslint-disable-next-line
  }, [state.peopleCount]);

  useEffect(() => {
    setThreshold(upgradeThresholds[state.playerLevel]);
  }, [state.playerLevel]);

  useEffect(() => {
    setCurrentValue(0);
  }, [state.playerLevel]);

  return (
    <>
      <progress max={threshold} value={currentValue}> 70% </progress>
      <button disabled={currentValue < threshold} onClick={() => {
        dispatch({ type: Actions.UP_PLAYER_LEVEL, payload: 1 });
      }}>Ask for help!</button>
    </>
  );
}

export default UpgradeStepper;