import React, { useContext } from 'react';
import Context from '../../data/context';
import MenuItem from './MenuItem';
import { Menu } from '../../data/_utils/constants'

const COOLDOWN_TIMES = {
  Bread: 4000,
  Condiments: 10000,
  Cheese: 16000,
  Vegetables: 24000,
  Meat: 40000,
}

const UNLOCK_LEVEL = {
  Bread: 0,
  Condiments: 5,
  Cheese: 10,
  Vegetables: 20,
  Meat: 30,
}

const SandwichMenu = () => {
  const [state] = useContext(Context);
  const { playerLevel } = state;
  return (
    <ol>
      {Object.keys(Menu).map(name => {
        const item = Menu[name];
        const itemInState = state.menuItems[item]
        if (playerLevel < UNLOCK_LEVEL[item]) return null;
        return (
          <MenuItem cooldownTime={COOLDOWN_TIMES[item] * (1.25 * itemInState.level)} key={`SandwichMenu_${item}`} itemName={item} />
        );
      })}
    </ol>
  );
};

export default SandwichMenu;