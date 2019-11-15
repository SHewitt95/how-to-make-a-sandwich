import React, { useContext, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import { useThreshold, useCurrentSandwichCount } from '../hooks';
import Context from '../../data/context';
import { Actions } from '../../data/_utils/constants';



const UpgradeStepper = () => {
  const [, dispatch] = useContext(Context);

  const threshold = useThreshold();
  const currentValue = useCurrentSandwichCount();

  // Auto "Ask for Help"
  useEffect(() => {
    if (currentValue >= threshold) {
      dispatch({ type: Actions.UP_PLAYER_LEVEL, payload: 1 });
    }
  }, [currentValue, threshold, dispatch]);

  return (
    <>
      <ProgressBar maxValue={threshold} currentValue={currentValue} valueName="Sandwich Count" />
      <button disabled={currentValue < threshold} onClick={() => {
        dispatch({ type: Actions.UP_PLAYER_LEVEL, payload: 1 });
      }}>Ask for help!</button>
    </>
  );
}

export default UpgradeStepper;