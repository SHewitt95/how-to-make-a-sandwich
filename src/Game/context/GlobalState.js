import React from 'react';
import { calculateScalePriceFloat, convertToInteger, numberOfAvailableInventory } from '../Body/_utils/helpers';
import { SANDWICH_VALUES } from '../Body/_utils/constants';

export const Context = React.createContext();

export const Actions = {
  UPDATE_NAME: 'UPDATE_NAME',
  ACTIVATE_GAME: 'ACTIVATE_GAME',
  PURCHASE: 'PURCHASE',
  UPGRADE_ITEM: 'UPGRADE_ITEM',
  REFILL_ITEM: 'REFILL_ITEM',
  MAKE_SANDWICH: 'MAKE_SANDWICH',
  UNLOCK_ITEM: 'UNLOCK_ITEM',
  BUY_SANDWICH: 'BUY_SANDWICH',
};

export const Items = {
  BREAD: 'Bread',
  CONDIMENTS: 'Condiments',
  VEGETABLES: 'Vegetables',
  CHEESE: 'Cheese',
  MEAT: 'Meat',
};

export const reducer = (state, action) => {
  const getNewSandwichPrice = () => calculateScalePriceFloat(Number(SANDWICH_VALUES.price), SANDWICH_VALUES.priceMultiplier, numberOfAvailableInventory(state));
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
      return {
        ...state,
        moneyOnHand: Number(state.moneyOnHand - action.payload),
      };

    case Actions.UNLOCK_ITEM:
      const itemToUnlock = state.supply[action.payload];
      itemToUnlock.unlocked = true;
      state.sandwichPrice = getNewSandwichPrice();

      return {
        ...state,
        supply: {
          ...state.supply,
        },
      };

    case Actions.UPGRADE_ITEM:
      const itemToUpgrade = state.supply[action.payload];
      itemToUpgrade.maxInventory = convertToInteger(itemToUpgrade.maxInventory * 1.5);
      if (itemToUpgrade.maxInventory % 2 !== 0) itemToUpgrade.maxInventory += 1;
      itemToUpgrade.level = action.level;
      state.sandwichPrice = getNewSandwichPrice();

      return {
        ...state,
        supply: {
          ...state.supply,
        },
      }

    case Actions.REFILL_ITEM:
      const itemToRefill = state.supply[action.payload];
      itemToRefill.inventory = itemToRefill.maxInventory;
      state.sandwichPrice = getNewSandwichPrice();

      return {
        ...state,
        supply: {
          ...state.supply,
        },
      }

    case Actions.MAKE_SANDWICH:
      if (state.supply[Items.BREAD].inventory === 0) return state;
      const items = Object.keys(state.supply);
      let sandwichMade = false;
      // const usedToppings = [];
      items.forEach(itemName => {
        const item = state.supply[itemName];
        if (item.inventory > 0) {
          sandwichMade = true;
          if (itemName === Items.BREAD) {
            item.inventory -= 2;
          } else if (item.unlocked) {
            item.inventory -= 1;
            // usedToppings.push(itemName);
          }
        }
      });

      if (sandwichMade) {
        state.sandwichCount += 1;
        state.sandwichInventoryCount += 1;
      }

      state.sandwichPrice = getNewSandwichPrice();
      

      // let onlyBread = true;
      // usedToppings.forEach(topping => {
      //   const item = state.supply[topping];
      //   if (item.inventory > 0) {
      //     state[`sandwichCount${topping}`] += 1;
      //     onlyBread = false;
      //   }
      // });

      // if (onlyBread) state.sandwichCountBread += 1;

      return {
        ...state,
        supply: {
          ...state.supply,
        }
      };

    case Actions.BUY_SANDWICH:
      if (state.sandwichInventoryCount > 0) {
        state.sandwichInventoryCount -= 1;
        state.moneyOnHand += Number(state.sandwichPrice);
      }

      return {
        ...state,
      };
  
    default:
      return state;
  }
};

export const DefaultGlobalState = {
  username: '',
  sandwichCount: 0,
  sandwichPrice: 10,
  sandwichInventoryCount: 0,
  gameActive: false,
  moneyOnHand: 100,
  lockedSupply: [Items.VEGETABLES, Items.CHEESE, Items.MEAT],
  supply: {
    Bread: {
      unlocked: true,
      inventory: 100,
      maxInventory: 100,
      level: 0,
    },
    Condiments: {
      unlocked: true,
      inventory: 100,
      maxInventory: 100,
      level: 0,
    },
    Vegetables: {
      unlocked: false,
      inventory: 100,
      maxInventory: 100,
      level: 0,
    },
    Cheese: {
      unlocked: false,
      inventory: 100,
      maxInventory: 100,
      level: 0,
    },
    Meat: {
      unlocked: false,
      inventory: 100,
      maxInventory: 100,
      level: 0,
    },
  },
};
