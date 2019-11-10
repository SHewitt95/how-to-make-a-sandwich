import React, { useReducer } from 'react';
import Header from './Header';
import Body from './Body';
import { DefaultGlobalState, Context, reducer } from './context/GlobalState';

const Game = () => {
  const [state, dispatch] = useReducer(reducer, DefaultGlobalState);
  return (
    <Context.Provider value={[state, dispatch]}>
      <Header />
      {state.gameActive && <Body />}
    </Context.Provider>
  )
};

export default Game;