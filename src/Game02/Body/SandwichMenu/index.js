import React, { useContext } from 'react';
import Context from '../../data/context';
import MenuItem from './MenuItem';
import { Menu } from '../../data/_utils/constants'

const COOLDOWN_TIMES = {
  Bread: 2000,
  Condiments: 5000,
  Cheese: 8000,
  Vegetables: 12000,
  Meat: 20000,
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
        if (playerLevel < UNLOCK_LEVEL[item]) return <LockedItem itemName={item} levelsRemaining={UNLOCK_LEVEL[item] - playerLevel} />;
        return (
          <MenuItem cooldownTime={COOLDOWN_TIMES[item] * (1.15 * itemInState.level)} key={`SandwichMenu_${item}`} itemName={item} />
        );
      })}
    </ol>
  );
};

const LockedItem = ({ levelsRemaining, itemName }) => <li><button disabled={true}>{`You need ${levelsRemaining} more arms to unlock ${itemName}`}</button></li>;

export default SandwichMenu;