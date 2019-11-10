import React from 'react';

export const DefaultGlobalState = {
  username: '',
  sandwichCount: 0,
  gameActive: false,
  moneyOnHand: 1000000,
  supply: {
    Bread: {
      unlocked: true,
      inventory: 10,
      maxInventory: 100,
    },
    Condiments: {
      unlocked: true,
      inventory: 100,
      maxInventory: 100,
    },
    Vegetables: {
      unlocked: false,
      inventory: 100,
      maxInventory: 100,
    },
    Cheese: {
      unlocked: false,
      inventory: 100,
      maxInventory: 100,
    },
    Meat: {
      unlocked: false,
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
  MAKE_SANDWICH: 'MAKE_SANDWICH',
  UNLOCK_ITEM: 'UNLOCK_ITEM',
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

    case Actions.UNLOCK_ITEM:
      const itemToUnlock = state.supply[action.payload];
      itemToUnlock.unlocked = true;

      return {
        ...state,
        supply: {
          ...state.supply,
        },
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

    case Actions.MAKE_SANDWICH:
      const items = Object.keys(state.supply);
      items.forEach(itemName => {
        const item = state.supply[itemName];
        if (itemName === Items.BREAD) {
          item.inventory -= 2;
        } else if (item.unlocked) {
          item.inventory -= 1;
        }
      });

      console.log(state);

      return {
        ...state,
        supply: {
          ...state.supply,
        }
      };
  
    default:
      return state;
  }
};
