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
  Condiments: 7,
  Cheese: 14,
  Vegetables: 21,
  Meat: 28,
}

const SandwichMenu = () => {
  const [state] = useContext(Context);
  const { playerLevel } = state;
  return (
    <section>
      <h2>Sandwich</h2>
      <p>Upgrade parts of your sandwich to make <em>more</em> sandwiches per second.</p>
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
    </section>
  );
};

const LockedItem = ({ levelsRemaining, itemName }) => <li><button disabled={true}>{`You need ${levelsRemaining} more hand(s) to unlock ${itemName}`}</button></li>;

export default SandwichMenu;