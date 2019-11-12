import React, { useContext } from 'react';
import Context from '../../data/context';
import { Actions } from '../../data/_utils/constants';

const disableHoldingEnter = event => {
  // No cheating! ;)
  if (event.key === 'Enter'){
    event.preventDefault();
  }
}

const SandwichButton = () => {
  const [, dispatch] = useContext(Context);
  return (
    <button onClick={() => dispatch({ type: Actions.MAKE_SANDWICH })} onKeyDown={disableHoldingEnter}>Make Sandwich</button>
  );
}

export default SandwichButton;