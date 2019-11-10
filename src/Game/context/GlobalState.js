import React from 'react';

export const DefaultGlobalState = {
  username: '',
  sandwichCount: 0,
  gameActive: false,
  moneyOnHand: 1000000,
  supply: {
    Bread: {
      inventory: 100,
      maxInventory: 100,
    },
    Condiments: {
      inventory: 100,
      maxInventory: 100,
    },
    Vegetables: {
      inventory: 100,
      maxInventory: 100,
    },
    Cheese: {
      inventory: 100,
      maxInventory: 100,
    },
    Meat: {
      inventory: 100,
      maxInventory: 100,
    },
  },
};

export const Context = React.createContext();

export const Actions = {
  UPDATE_NAME: 'UPDATE_NAME',
  ACTIVATE_GAME: 'ACTIVATE_GAME',
  PURCHASE: 'PURCHASE',
  UPGRADE_ITEM: 'UPGRADE_ITEM',
  REFILL_ITEM: 'REFILL_ITEM',
};

export const Items = {
  BREAD: 'Bread',
  CONDIMENTS: 'Condiments',
  VEGETABLES: 'Vegetables',
  CHEESE: 'Cheese',
  MEAT: 'Meat',
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

    case Actions.PURCHASE:
      console.log({
        money: state.moneyOnHand,
        price: action.payload,
        remainder: state.moneyOnHand - action.payload,
      });
      return {
        ...state,
        moneyOnHand: state.moneyOnHand - action.payload,
      };

    case Actions.UPGRADE_ITEM:
      const itemToUpgrade = state.supply[action.payload];
      itemToUpgrade.maxInventory = itemToUpgrade.maxInventory * 10;
      console.log(state);

      return {
        ...state,
        supply: {
          ...state.supply,
        },
      }

    case Actions.REFILL_ITEM:
      const itemToRefill = state.supply[action.payload];
      itemToRefill.inventory = itemToRefill.maxInventory;
      console.log(state);

      return {
        ...state,
        supply: {
          ...state.supply,
        },
      }
  
    default:
      return state;
  }
};
