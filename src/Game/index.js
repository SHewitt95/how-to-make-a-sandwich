import React, { useReducer } from 'react';
import Header from './Header';
import { DefaultGlobalState, Context, reducer } from './context/GlobalState';

const Game = () => {
  const [state, dispatch] = useReducer(reducer, DefaultGlobalState);
  return (
    <Context.Provider value={[state, dispatch]}>
      <Header />
    </Context.Provider>
  )
};

export default Game;