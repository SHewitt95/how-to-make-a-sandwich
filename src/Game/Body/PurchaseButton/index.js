import React, { useContext } from 'react';
import { Context, Actions } from '../../context/GlobalState';

const PurchaseButton = ({ children, onClick, price, customDisable, ...restProps }) => {
  const [state, dispatch] = useContext(Context);
  return (
    <button 
    disabled={customDisable || state.moneyOnHand < price}
    onClick={() => {
      if (typeof onClick === 'function') onClick();
      dispatch({ type: Actions.PURCHASE, payload: price });
    }} {...restProps}>{children}</button>
  );
}

export default PurchaseButton;
