import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/GlobalState';

const SandwichCounter = () => {
  const [state] = useContext(Context);

  useEffect(() => {
    document.title = `${state.sandwichCount} sandwich${state.sandwichCount === 1 ? '' : 'es'} - How To Make A Sandwich`;
  }, [state.sandwichCount]);

  return (
    <h3>{`Sandwiches: ${state.sandwichCount}`}</h3>
  );
}

export default SandwichCounter;