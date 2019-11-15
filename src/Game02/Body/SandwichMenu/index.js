import React from 'react';
import MenuItem from './MenuItem';
import { Menu } from '../../data/_utils/constants'


const SandwichMenu = () => {
  return (
    <ol>
      {Object.keys(Menu).map(name => <MenuItem key={`SandwichMenu_${Menu[name]}`} itemName={Menu[name]} />)}
    </ol>
  );
};

export default SandwichMenu;