import React, { useReducer } from 'react';
import { Context } from './data/State';
import reducer from './data/reducer';
import Header from './Header';
import Body from './Body';

const Game02 = () => {
  const [state, dispatch] = useReducer(reducer, {});
  return (
    <Context.Provider value={[state, dispatch]}>
      <Header />
      <Body />
    </Context.Provider>
  );
};

export default Game02;