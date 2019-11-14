import React, { useContext } from 'react';
import Context from '../../data/context';
import { Actions } from '../../data/_utils/constants';

const SandwichButton = () => {
  const [, dispatch] = useContext(Context);
  return (
    <button onClick={() => dispatch({ type: Actions.MAKE_SANDWICH })}>make a sandwich</button>
  );
}

export default SandwichButton;