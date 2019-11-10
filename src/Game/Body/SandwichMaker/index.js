import React from 'react';
import GenericItem from './Supplies/GenericItem';
import { BASE_PRICES } from '../_utils/constants';
import { Items } from '../../context/GlobalState';

const SandwichMaker = () => {
  return (
    <>
      <h4>Kitchen</h4>
      <button>Make Sandwich</button>
      <GenericItem itemName={Items.BREAD} refillPrice={BASE_PRICES[Items.BREAD].refill} upgradePrice={BASE_PRICES[Items.BREAD].upgrade} />
      <GenericItem itemName={Items.CONDIMENTS} refillPrice={BASE_PRICES[Items.CONDIMENTS].refill} upgradePrice={BASE_PRICES[Items.CONDIMENTS].upgrade} />
      <GenericItem itemName={Items.VEGETABLES} refillPrice={BASE_PRICES[Items.VEGETABLES].refill} upgradePrice={BASE_PRICES[Items.VEGETABLES].upgrade} unlockPrice={BASE_PRICES[Items.VEGETABLES].unlock} />
      <GenericItem itemName={Items.CHEESE} refillPrice={BASE_PRICES[Items.CHEESE].refill} upgradePrice={BASE_PRICES[Items.CHEESE].upgrade} unlockPrice={BASE_PRICES[Items.CHEESE].unlock} />
      <GenericItem itemName={Items.MEAT} refillPrice={BASE_PRICES[Items.MEAT].refill} upgradePrice={BASE_PRICES[Items.MEAT].upgrade} unlockPrice={BASE_PRICES[Items.MEAT].unlock} />
    </>
  )
};

export default SandwichMaker;
