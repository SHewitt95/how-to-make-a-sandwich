import React, { useContext } from 'react';
import SandwichCounter from './SandwichCounter';
import SandwichMaker from './SandwichMaker';
import MoneyCounter from './MoneyCounter';
import EmployeeManager from './EmployeeManager';
import { useInterval } from './_utils/helpers';
import { Context, Actions } from '../context/GlobalState';
// import SandwichList from './SandwichList';

const Body = () => {
  const [state, dispatch] = useContext(Context);

  useInterval(() => {
    if (Math.random() > 0.6) dispatch({ type: Actions.BUY_SANDWICH });
  }, 100);

  return (
    <>
      <SandwichCounter />
      <MoneyCounter />
      <SandwichMaker />
      {state.sandwichCount >= 15 && <EmployeeManager />}
    </>
  );
}

export default Body;