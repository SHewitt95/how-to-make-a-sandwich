import React from 'react';
import GenericItem from './Supplies/GenericItem';
import { BASE_PRICES } from '../_utils/constants';

const SandwichMaker = () => {
  const { breadRefill, breadUpgrade, condimentsRefill, condimentsUpgrade, vegetableRefill, vegetableUpgrade, cheeseRefill, cheeseUpgrade, meatRefill, meatUpgrade, vegetableUnlock, cheeseUnlock, meatUnlock } = BASE_PRICES;
  return (
    <>
      <h4>Kitchen</h4>
      <button>Make Sandwich</button>
      <GenericItem itemName='Bread' refillPrice={breadRefill} upgradePrice={breadUpgrade} />
      <GenericItem itemName='Condiments' refillPrice={condimentsRefill} upgradePrice={condimentsUpgrade} />
      <GenericItem itemName='Vegetables' refillPrice={vegetableRefill} upgradePrice={vegetableUpgrade} unlockPrice={vegetableUnlock} />
      <GenericItem itemName='Cheese' refillPrice={cheeseRefill} upgradePrice={cheeseUpgrade} unlockPrice={cheeseUnlock} />
      <GenericItem itemName='Meat' refillPrice={meatRefill} upgradePrice={meatUpgrade} unlockPrice={meatUnlock} />
    </>
  )
};

export default SandwichMaker;
