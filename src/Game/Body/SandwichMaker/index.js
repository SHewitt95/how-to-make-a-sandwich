import React from 'react';
import GenericItem from './Supplies/GenericItem';

const SandwichMaker = () => (
  <>
    <h4>Kitchen</h4>
    <button>Make Sandwich</button>
    <GenericItem itemName='Bread' refillPrice={50} upgradePrice={150} />
    <GenericItem itemName='Condiments' refillPrice={50} upgradePrice={150} />
    <GenericItem itemName='Vegetables' refillPrice={50} upgradePrice={150} unlockPrice={100} />
    <GenericItem itemName='Cheese' refillPrice={50} upgradePrice={150} unlockPrice={150} />
    <GenericItem itemName='Meat' refillPrice={50} upgradePrice={150} unlockPrice={200} />
  </>
);

export default SandwichMaker;
