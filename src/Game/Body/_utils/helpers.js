import { useEffect, useRef } from 'react';
import { Items } from '../../context/GlobalState';

export const convertToMoney = (number = 0) => `$${numberWithCommas(Number.parseFloat(number).toFixed(2))}`;

export const convertToInteger = (number = 0) => Math.ceil(number);

export const convertToFloat = (number = 0, accuracy = 2) => Number.parseFloat(number).toFixed(accuracy);

export const calculateScalePrice = (baseCost = 0, multiplier = 0, unitCount = 0) => {
  return unitCount ? baseCost + Math.pow(multiplier, unitCount) : baseCost;
}

export const calculateScalePriceFloat = (baseCost = 0, multiplier = 0, unitCount = 0, accuracy = 2) => {
  return convertToFloat(calculateScalePrice(baseCost, multiplier, unitCount), accuracy);
}

export const haveEnoughInventory = state => {
  const itemNames = Object.keys(state.supply);
  let enoughInventory = true;
  itemNames.forEach(itemName => {
    const item = state.supply[itemName];
    if (item.unlocked) {
      if (item.inventory === 0) {
        enoughInventory = false;
      }
    }
  });
  return enoughInventory;
}

export const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export const numberOfAvailableInventory = state => {
  const supplyItems = Object.keys(state.supply);
  let number = 0;
  supplyItems.forEach(itemName => {
    const item = state.supply[itemName];
    if (item.unlocked && item.inventory > 0) {
      number = number + item.level;
      if (itemName !== Items.BREAD) number += 1;
    }
  });
  number = Math.floor(number / 2);
  return number;
}
