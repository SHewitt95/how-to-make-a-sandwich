import React from 'react';
import MenuItem from './MenuItem';

const items = ['Bread', 'Condiments', 'Cheese', 'Vegetables', 'Meat'];

const SandwichMenu = () => {
  return (
    <ol>
      {items.map(name => <MenuItem itemName={name} />)}
    </ol>
  );
};

export default SandwichMenu;