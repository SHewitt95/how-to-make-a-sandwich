import React, { useContext, useState, useEffect } from 'react';
import ProgressBar from '../../ArmsUpgrader/ProgressBar';
import Context from '../../../data/context';
import { Actions } from '../../../data/_utils/constants';
import { useInterval } from '../../hooks';

const STATES = {
  IDLE: 'idle',
  COOLDOWN: 'cooldown',
};

const MenuItem = ({ itemName, cooldownTime }) => {
  const [, dispatch] = useContext(Context);
  const [state, setState] = useState(STATES.IDLE);
  const [tick, setTick] = useState(0);

  // https://upmostly.com/tutorials/settimeout-in-react-components-using-hooks
  useEffect(() => {
    const timer = setTimeout(() => {
      setState(STATES.IDLE);
    }, cooldownTime);
    return () => clearTimeout(timer);
  }, [cooldownTime, state]);

  useInterval(() => {
      setTick(tick + 1000)
  }, 1000);

  useInterval(() => {
    if (state === STATES.IDLE) {
      setTick(0)
    }
  }, 10);

  return (
    <li>
      <button disabled={state === STATES.COOLDOWN} onClick={() => {
        dispatch({ type: Actions.UPGRADE_MENU_ITEM, payload: 1, itemName });
        setState(STATES.COOLDOWN);
      }}>
        {state === STATES.COOLDOWN && `Getting better ${itemName}...`}
        {state === STATES.IDLE && `Upgrade ${itemName}`}
      </button>
      <ProgressBar maxValue={cooldownTime} currentValue={tick} valueName={`${itemName} Progress`} />
    </li>
  );
};

export default MenuItem;