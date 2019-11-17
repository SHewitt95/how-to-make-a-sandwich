import React, { useReducer, useEffect } from 'react';
import DefaultState from './data/State';
import { Actions } from './data/_utils/constants';
import Context from './data/context';
import reducer from './data/reducer';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { useInterval } from './Body/hooks';

const GAME_KEY = 'sandwich-game';

const Game02 = () => {
  const [state, dispatch] = useReducer(reducer, DefaultState);

  useInterval(() => {
    const saveState = JSON.stringify(state);
    window.localStorage.setItem(GAME_KEY, saveState);
  }, 10000);

  useEffect(() => {
    const savedState = window.localStorage.getItem(GAME_KEY);
    if (savedState) {
      dispatch({ type: Actions.LOAD_GAME, payload: JSON.parse(savedState) });
    }
  }, []);

  return (
    <Context.Provider value={[state, dispatch]}>
      <Header />
      <Body />
      <Footer />
    </Context.Provider>
  );
};

export default Game02;