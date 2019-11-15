import { useState, useContext, useEffect } from 'react';
import Context from '../data/context';
import { MAX_NUMBER } from '../data/_utils/constants';


export const useThreshold = () => {
  const [threshold, setThreshold] = useState(10);
  const [state] = useContext(Context);

  const convertToFloat = (number = 0, accuracy = 2) => Number.parseFloat(number).toFixed(accuracy);
  const calculateScalePrice = (baseCost = 0, multiplier = 0, unitCount = 0) => {
    return unitCount ? baseCost + Math.pow(multiplier, unitCount) : baseCost;
  }

  useEffect(() => {
    const calculateScalePriceFloat = (baseCost = 0, multiplier = 0, unitCount = 0, accuracy = 2) => {
      return convertToFloat(calculateScalePrice(baseCost, multiplier, unitCount), accuracy);
    }

    setThreshold(calculateScalePriceFloat(10, 2, state.playerLevel, 0));
  }, [state.playerLevel]);

  return threshold;
};

export const useCurrentSandwichCount = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [state] = useContext(Context);

  useEffect(() => {
    setCurrentValue(MAX_NUMBER - state.peopleCount);
  }, [state.peopleCount]);

  return currentValue;
}