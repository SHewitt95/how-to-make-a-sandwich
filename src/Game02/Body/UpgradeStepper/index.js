import React, { useState, useContext, useEffect } from 'react';
import Context from '../../data/context';
import { MAX_NUMBER, Actions } from '../../data/_utils/constants';

const convertToFloat = (number = 0, accuracy = 2) => Number.parseFloat(number).toFixed(accuracy);
const calculateScalePrice = (baseCost = 0, multiplier = 0, unitCount = 0) => {
  return unitCount ? baseCost + Math.pow(multiplier, unitCount) : baseCost;
}
const calculateScalePriceFloat = (baseCost = 0, multiplier = 0, unitCount = 0, accuracy = 2) => {
  return convertToFloat(calculateScalePrice(baseCost, multiplier, unitCount), accuracy);
}

const UpgradeStepper = () => {
  const [state, dispatch] = useContext(Context);
  const [threshold, setThreshold] = useState(10);
  const [currentValue, setCurrentValue] = useState(MAX_NUMBER - state.peopleCount);

  useEffect(() => {
    setCurrentValue(MAX_NUMBER - state.peopleCount);
  }, [state.peopleCount]);

  useEffect(() => {
    setThreshold(calculateScalePriceFloat(10, 2.5, state.playerLevel, 0));
  }, [state.playerLevel]);

  // Auto "Ask for Help"
  useEffect(() => {
    if (currentValue >= threshold) {
      dispatch({ type: Actions.UP_PLAYER_LEVEL, payload: 1 });
    }
  }, [currentValue, threshold]);

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