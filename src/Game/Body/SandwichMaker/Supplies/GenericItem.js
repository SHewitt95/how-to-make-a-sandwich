import React, { useState, useEffect, useContext } from 'react';
import { convertToMoney, calculateScalePriceFloat } from '../../_utils/helpers';
import { Context, Actions } from '../../../context/GlobalState';
import { MULTIPLIERS } from '../../_utils/constants';
import PurchaseButton from '../../PurchaseButton';

const UNLOCKED_ITEMS = {
  Bread: true,
  Condiments: true,
};

const GenericItem = ({ itemName, unlockPrice, refillPrice, upgradePrice }) => {
  const [unlocked, setUnlock] = useState(false);
  const [level, upLevel] = useState(0);
  const [state, dispatch] = useContext(Context);

  const Inventory = state.supply[itemName];

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
      {unlocked && <p>{`${Inventory.inventory} / ${Inventory.maxInventory}`}</p>}
      {!unlocked && unlockPrice && <PurchaseButton onClick={() => setUnlock(true)} price={unlockPrice}>{`Unlock: ${convertToMoney(unlockPrice)}`}</PurchaseButton>}
      {unlocked && refillPrice && <PurchaseButton customDisable={Inventory.inventory === Inventory.maxInventory} onClick={() => dispatch({ type: Actions.REFILL_ITEM, payload: itemName })} price={refillPriceProp}>{`Refill: ${convertToMoney(refillPriceProp)}`}</PurchaseButton>}
      {unlocked && upgradePrice && <PurchaseButton onClick={() => {
          upLevel(level + 1);
          dispatch({ type: Actions.UPGRADE_ITEM, payload: itemName });
        }} 
        price={upgradePriceProp}>{`Upgrade: ${convertToMoney(upgradePriceProp)}`}</PurchaseButton>}
    </div>
  );
}

export default GenericItem;