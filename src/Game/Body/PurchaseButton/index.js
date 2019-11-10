import React, { useContext } from 'react';
import { Context, Actions } from '../../context/GlobalState';

const PurchaseButton = ({ children, onClick, price, ...restProps }) => {
  const [state, dispatch] = useContext(Context);
  return (
    <button 
    disabled={state.moneyOnHand < price}
    onClick={() => {
      onClick();
      dispatch({ type: Actions.PURCHASE, payload: price });
    }} {...restProps}>{children}</button>
  );
}

export default PurchaseButton;
