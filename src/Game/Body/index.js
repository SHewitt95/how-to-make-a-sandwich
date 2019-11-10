import React from 'react';
import SandwichCounter from './SandwichCounter';
import SandwichMaker from './SandwichMaker';
import MoneyCounter from './MoneyCounter';
// import SandwichList from './SandwichList';

const Body = () => {
  return (
    <>
      <SandwichCounter />
      <MoneyCounter />
      <SandwichMaker />
    </>
  );
}

export default Body;