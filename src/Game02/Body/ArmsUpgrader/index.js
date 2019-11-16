import React, { useContext } from 'react';
import ProgressBar from './ProgressBar';
import { useThreshold, useCurrentSandwichCount, useAutoPlayerLevelUpdate } from '../hooks';
import Context from '../../data/context';
import { Actions } from '../../data/_utils/constants';

const ArmsUpgrader = () => {
  const [, dispatch] = useContext(Context);

  const threshold = useThreshold();
  const currentValue = useCurrentSandwichCount();

  // Auto "Ask for Help"
  useAutoPlayerLevelUpdate();

  return (
    <>
      <ProgressBar maxValue={threshold} currentValue={currentValue} valueName="Sandwich Count" />
      <button disabled={currentValue < threshold} onClick={() => {
        dispatch({ type: Actions.UP_PLAYER_LEVEL, payload: 1 });
      }}>Grow more arms!</button>
    </>
  );
}

export default ArmsUpgrader;