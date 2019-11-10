import React, { useState, useEffect } from 'react';
import { convertToMoney } from '../../helpers';
import PurchaseButton from '../../PurchaseButton';

const UNLOCKED_ITEMS = {
  Bread: true,
  Condiments: true,
};

const GenericItem = ({ itemName, unlockPrice, refillPrice, upgradePrice }) => {
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
      {!unlocked && unlockPrice && <PurchaseButton onClick={() => setUnlock(true)} price={unlockPrice}>{`Unlock: ${convertToMoney(unlockPrice)}`}</PurchaseButton>}
      {unlocked && refillPrice && <PurchaseButton price={refillPrice}>{`Refill: ${convertToMoney(refillPrice)}`}</PurchaseButton>}
      {unlocked && upgradePrice && <PurchaseButton price={upgradePrice}>{`Upgrade: ${convertToMoney(upgradePrice)}`}</PurchaseButton>}
    </div>
  );
}

export default GenericItem;