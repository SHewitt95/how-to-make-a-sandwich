import React, { useContext } from 'react';
import Context from '../data/context';
import { Actions } from '../data/_utils/constants';

const Footer = () => {
  const [state, dispatch] = useContext(Context);
  return (
    <footer>
      <button onClick={() => dispatch({ type: Actions.SAVE_GAME, payload: JSON.stringify(state) })}>Save Game</button>
      <button onClick={() => dispatch({ type: Actions.RESET_GAME })}>Reset Game</button>
    </footer>
  )
};

export default Footer;