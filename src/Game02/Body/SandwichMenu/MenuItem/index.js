import React, { useContext, useState, useEffect } from 'react';
import Context from '../../../data/context';
import { Actions } from '../../../data/_utils/constants';

const STATES = {
  IDLE: 'idle',
  COOLDOWN: 'cooldown',
};

const MenuItem = ({ itemName, cooldownTime }) => {
  const [, dispatch] = useContext(Context);
  const [state, setState] = useState(STATES.IDLE);

  // https://upmostly.com/tutorials/settimeout-in-react-components-using-hooks
  useEffect(() => {
    const timer = setTimeout(() => {
      setState(STATES.IDLE);
    }, cooldownTime);
    return () => clearTimeout(timer);
  }, [cooldownTime, state]);

  return (
    <li>
      <button disabled={state === STATES.COOLDOWN} onClick={() => {
        dispatch({ type: Actions.UPGRADE_MENU_ITEM, payload: 1, itemName });
        setState(STATES.COOLDOWN);
      }}>
        {itemName}
      </button>
    </li>
  );
};

export default MenuItem;