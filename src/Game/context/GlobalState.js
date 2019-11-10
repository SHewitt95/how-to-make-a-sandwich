import React from 'react';

export const DefaultGlobalState = {
  username: '',
};

export const Context = React.createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return {
        ...state,
        username: action.payload,
      };
  
    default:
      return state;
  }
};

export const Actions = {
  UPDATE_NAME: 'UPDATE_NAME',
};
