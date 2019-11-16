import { useState, useContext, useEffect, useRef } from 'react';
import Context from '../data/context';
import { MAX_NUMBER, Actions, Menu, MenuMultipliers } from '../data/_utils/constants';
import { calculateScalePriceFloat } from './helpers';


export const useThreshold = () => {
  const [threshold, setThreshold] = useState(10);
  const [state] = useContext(Context);

  useEffect(() => {
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
};

export const useAutoPlayerLevelUpdate = () => {
  const threshold = useThreshold();
  const currentValue = useCurrentSandwichCount();
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    if (state.autoPlayerLevelActive && currentValue >= threshold) {
      dispatch({ type: Actions.UP_PLAYER_LEVEL, payload: 1 });
    }
  }, [state.autoPlayerLevelActive, currentValue, threshold, dispatch]);
};

export const useSandwichesPerSecondRate = () => {
  const [sandwichesPerSecond, setsandwichesPerSecond] = useState(0);
  const [state] = useContext(Context);

  const getSandwichLevel = () => {
    const items = Object.keys(Menu).map(key => Menu[key]);
    let level = 0;
    items.forEach(item => {
      const menuItem = state.menuItems[item];
      level += (menuItem.level * MenuMultipliers[item.toUpperCase()]);
    })
    return level;
  }

  const sandwichLevel = getSandwichLevel();
  const { playerLevel } = state;

  useEffect(() => {
    const calculateSandwichesPerSecond = (sandwich, player) => {
      return calculateScalePriceFloat(player, 1.15, sandwich, 0);
      // return calculateScalePriceFloat(sandwich, 1.15, player, 0);
    };

    setsandwichesPerSecond(calculateSandwichesPerSecond(sandwichLevel, playerLevel))
  }, [sandwichLevel, playerLevel]);

  return sandwichesPerSecond;
};

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
};

export const useAutoSandwichMaker = () => {
  const [, dispatch] = useContext(Context);
  const sandwichesPerSecond = useSandwichesPerSecondRate();

  useInterval(() => {
    if (sandwichesPerSecond > 0) {
      dispatch({ type: Actions.MAKE_SANDWICH, payload: sandwichesPerSecond/100 });
    }
  }, 10);
}