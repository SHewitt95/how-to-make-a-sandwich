import React from 'react';

export const DefaultGlobalState = {
  username: '',
  sandwichCount: 0,
  gameActive: false,
  moneyOnHand: 1000000,
};

export const Context = React.createContext();

export const Actions = {
  UPDATE_NAME: 'UPDATE_NAME',
  ACTIVATE_GAME: 'ACTIVATE_GAME',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Actions.UPDATE_NAME:
      return {
        ...state,
        username: action.payload,
      };

    case Actions.ACTIVATE_GAME:
      return {
        ...state,
        gameActive: action.payload,
      };
  
    default:
      return state;
  }
};
