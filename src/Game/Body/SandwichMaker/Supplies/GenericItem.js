import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../../context/GlobalState';
import { convertToMoney } from '../../helpers';

const UNLOCKED_ITEMS = {
  Bread: true,
  Condiments: true,
};

const GenericItem = ({ itemName, unlockPrice, refillPrice, upgradePrice }) => {
  const [state] = useContext(Context);
  const [unlocked, setUnlock] = useState(false);

  useEffect(() => {
    if (UNLOCKED_ITEMS[itemName]) {
      setUnlock(true);
    }
  }, [itemName]);

  return (
    <div>
      <p>{`${itemName}`}</p>
      {/* {unlocked && <p>{`${currentCount} / ${maxAmount}`}</p>} */}
      {!unlocked && unlockPrice && <button onClick={() => setUnlock(true)} disabled={state.moneyOnHand < unlockPrice}>{`Unlock: ${convertToMoney(unlockPrice)}`}</button>}
      {unlocked && refillPrice && <button disabled={state.moneyOnHand < refillPrice}>{`Refill: ${convertToMoney(refillPrice)}`}</button>}
      {unlocked && upgradePrice && <button disabled={state.moneyOnHand < upgradePrice}>{`Upgrade: ${convertToMoney(upgradePrice)}`}</button>}
    </div>
  );
}

export default GenericItem;