import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/GlobalState';
import { convertToMoney, numberWithCommas } from '../_utils/helpers';

const SandwichCounter = () => {
  const [state] = useContext(Context);

  useEffect(() => {
    document.title = `${numberWithCommas(state.sandwichCount)} sandwich${state.sandwichCount === 1 ? '' : 'es'} - How To Make A Sandwich`;
  }, [state.sandwichCount]);

  return (
    <>
      <h3>{`Sandwiches: ${numberWithCommas(state.sandwichCount)}`}</h3>
      <p>{`Unsold sandwiches: ${numberWithCommas(state.sandwichInventoryCount)}`}</p>
      <p>{`Sandwich sale price: ${convertToMoney(state.sandwichPrice)}`}</p>
    </>
  );
}

export default SandwichCounter;