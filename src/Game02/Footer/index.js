import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Context from '../data/context';
import { Actions } from '../data/_utils/constants';

const Footer = () => {
  const [state, dispatch] = useContext(Context);
  return (
    <footer>
      <Button onClick={() => dispatch({ type: Actions.SAVE_GAME, payload: JSON.stringify(state) })}>Save Game</Button>
      <Button onClick={() => dispatch({ type: Actions.RESET_GAME })}>Reset Game</Button>
    </footer>
  )
};

export default Footer;