import React, { useReducer } from 'react';
import DefaultState from './data/State';
import Context from './data/context';
import reducer from './data/reducer';
import Header from './Header';
import Body from './Body';

const Game02 = () => {
  const [state, dispatch] = useReducer(reducer, DefaultState);
  return (
    <Context.Provider value={[state, dispatch]}>
      <Header />
      <Body />
    </Context.Provider>
  );
};

export default Game02;