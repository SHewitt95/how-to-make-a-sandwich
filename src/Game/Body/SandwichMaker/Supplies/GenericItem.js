import React, { useState, useEffect } from 'react';
import { convertToMoney, calculateScalePriceFloat } from '../../_utils/helpers';
import { MULTIPLIERS } from '../../_utils/constants';
import PurchaseButton from '../../PurchaseButton';

const UNLOCKED_ITEMS = {
  Bread: true,
  Condiments: true,
};

const GenericItem = ({ itemName, unlockPrice, refillPrice, upgradePrice }) => {
  const [unlocked, setUnlock] = useState(false);
  const [level, upLevel] = useState(0);
  const mults = MULTIPLIERS[itemName];

  const upgradePriceProp = calculateScalePriceFloat(upgradePrice, mults.upgrade, level);
  const refillPriceProp = calculateScalePriceFloat(refillPrice, mults.refill, level);

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
      {unlocked && refillPrice && <PurchaseButton price={refillPriceProp}>{`Refill: ${convertToMoney(refillPriceProp)}`}</PurchaseButton>}
      {unlocked && upgradePrice && <PurchaseButton onClick={() => upLevel(level + 1)} price={upgradePriceProp}>{`Upgrade: ${convertToMoney(upgradePriceProp)}`}</PurchaseButton>}
    </div>
  );
}

export default GenericItem;