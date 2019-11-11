import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/GlobalState';
import { convertToMoney, numberWithCommas, convertToFloat } from '../_utils/helpers';

const SandwichCounter = () => {
  const [state] = useContext(Context);

  useEffect(() => {
    document.title = `${numberWithCommas(convertToFloat(state.sandwichCount, 0))} sandwich${state.sandwichCount === 1 ? '' : 'es'} - How To Make A Sandwich`;
  }, [state.sandwichCount]);

  return (
    <>
      <h3>{`Sandwiches: ${numberWithCommas(convertToFloat(state.sandwichCount, 0))}`}</h3>
      <p>{`Unsold sandwiches: ${numberWithCommas(convertToFloat(state.sandwichInventoryCount, 0))}`}</p>
      <p>{`Sandwich sale price: ${convertToMoney(state.sandwichPrice)}`}</p>
    </>
  );
}

export default SandwichCounter;