import React, { useContext } from 'react';
import { Context } from '../../context/GlobalState';

const SandwichCounter = () => {
  const [state] = useContext(Context);
  return (
    <h3>{`Sandwiches: ${state.sandwichCount}`}</h3>
  );
}

export default SandwichCounter;