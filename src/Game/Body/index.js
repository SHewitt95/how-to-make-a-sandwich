import React, { useContext } from 'react';
import SandwichCounter from './SandwichCounter';
import SandwichMaker from './SandwichMaker';
import MoneyCounter from './MoneyCounter';
import { useInterval } from './_utils/helpers';
import { Context, Actions } from '../context/GlobalState';
// import SandwichList from './SandwichList';

const Body = () => {
  const [, dispatch] = useContext(Context);

  useInterval(() => {
    if (Math.random() > 0.6) dispatch({ type: Actions.BUY_SANDWICH });
  }, 10);

  useInterval(() => {
    dispatch({ type: Actions.MAKE_SANDWICH });
  }, 10);

  return (
    <>
      <SandwichCounter />
      <MoneyCounter />
      <SandwichMaker />
    </>
  );
}

export default Body;