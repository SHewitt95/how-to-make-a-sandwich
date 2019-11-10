import React from 'react';
import GenericItem from './Supplies/GenericItem';
import { BASE_PRICES } from '../_utils/constants';

const SandwichMaker = () => {
  return (
    <>
      <h4>Kitchen</h4>
      <button>Make Sandwich</button>
      <GenericItem itemName='Bread' refillPrice={BASE_PRICES['Bread'].refill} upgradePrice={BASE_PRICES['Bread'].upgrade} />
      <GenericItem itemName='Condiments' refillPrice={BASE_PRICES['Condiments'].refill} upgradePrice={BASE_PRICES['Condiments'].upgrade} />
      <GenericItem itemName='Vegetables' refillPrice={BASE_PRICES['Vegetables'].refill} upgradePrice={BASE_PRICES['Vegetables'].upgrade} unlockPrice={BASE_PRICES['Vegetables'].unlock} />
      <GenericItem itemName='Cheese' refillPrice={BASE_PRICES['Cheese'].refill} upgradePrice={BASE_PRICES['Cheese'].upgrade} unlockPrice={BASE_PRICES['Cheese'].unlock} />
      <GenericItem itemName='Meat' refillPrice={BASE_PRICES['Meat'].refill} upgradePrice={BASE_PRICES['Meat'].upgrade} unlockPrice={BASE_PRICES['Meat'].unlock} />
    </>
  )
};

export default SandwichMaker;
