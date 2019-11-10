import React, { useContext } from 'react';
import { Context } from '../../context/GlobalState';
import { convertToMoney } from '../_utils/helpers';


const MoneyCounter = () => {
  const [state] = useContext(Context);

  return (
    <h3>{`Funds: ${convertToMoney(state.moneyOnHand)}`}</h3>
  );
}

export default MoneyCounter;