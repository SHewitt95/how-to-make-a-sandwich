import React, { useState, useEffect, useContext } from 'react';
import { convertToMoney, calculateScalePriceFloat } from '../../_utils/helpers';
import { Context, Actions } from '../../../context/GlobalState';
import { MULTIPLIERS } from '../../_utils/constants';
import PurchaseButton from '../../PurchaseButton';

const UNLOCKED_ITEMS = {
  Bread: true,
  Condiments: true,
};

const getItemType = level => {
  const TYPES = {
    0: 'Really Old',
    1: 'Not as Old',
    2: 'Old',
    3: 'Decent',
    4: 'OK',
    5: 'Good',
    6: 'Better',
    7: 'Best',
    8: 'Good Best',
    9: 'Better Best',
    10: 'Best Best',
    11: 'Good Best Best',
    12: 'Better Best Best',
    13: 'Best Best Best',
    14: 'Supernatural',
    15: 'Divine',
    16: "Not quite sure if it's actually",
    17: 'Sentient',
    18: 'Transcendent',
    19: 'Mind Control',
  };
  const MAX = Object.keys(TYPES).length - 1;
  return TYPES[level] || TYPES[MAX];
}

const GenericItem = ({ itemName, unlockPrice, refillPrice, upgradePrice }) => {
  const [level, upLevel] = useState(0);
  const [state, dispatch] = useContext(Context);

  const { unlocked, inventory, maxInventory } = state.supply[itemName];

  const mults = MULTIPLIERS[itemName];
  const upgradePriceProp = calculateScalePriceFloat(upgradePrice, mults.upgrade, level);
  const refillPriceProp = calculateScalePriceFloat(refillPrice, mults.refill, level);

  useEffect(() => {
    if (UNLOCKED_ITEMS[itemName]) {
      dispatch({ type: Actions.UNLOCK_ITEM, payload: itemName });
    }
  }, [dispatch, itemName]);

  return (
    <div>
      <p>{`${getItemType(level)} ${itemName}`}</p>
      {unlocked && <p>{`${inventory} / ${maxInventory}`}</p>}
      {!unlocked && unlockPrice && <PurchaseButton onClick={() => dispatch({ type: Actions.UNLOCK_ITEM, payload: itemName })} price={unlockPrice}>{`Unlock: ${convertToMoney(unlockPrice)}`}</PurchaseButton>}
      {unlocked && refillPrice && <PurchaseButton customDisable={inventory === maxInventory} onClick={() => dispatch({ type: Actions.REFILL_ITEM, payload: itemName })} price={refillPriceProp}>{`Refill: ${convertToMoney(refillPriceProp)}`}</PurchaseButton>}
      {unlocked && upgradePrice && <PurchaseButton onClick={() => {
          upLevel(level + 1);
          dispatch({ type: Actions.UPGRADE_ITEM, payload: itemName });
        }} 
        price={upgradePriceProp}>{`Upgrade: ${convertToMoney(upgradePriceProp)}`}</PurchaseButton>}
    </div>
  );
}

export default GenericItem;