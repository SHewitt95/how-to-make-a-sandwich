import React, { useContext, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
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

  const realName = itemName === 'Meat' ? 'Protein' : itemName;

  return (
    <li>
      <Button variant="contained" disabled={state === STATES.COOLDOWN} onClick={() => {
        dispatch({ type: Actions.UPGRADE_MENU_ITEM, payload: 1, itemName });
        setState(STATES.COOLDOWN);
      }}>
        {state === STATES.COOLDOWN && `Getting better ${realName}...`}
        {state === STATES.IDLE && `Upgrade ${realName}`}
      </Button>
      <ProgressBar maxValue={cooldownTime || 1} currentValue={tick} valueName={`${realName} Progress`} />
    </li>
  );
};

export default MenuItem;