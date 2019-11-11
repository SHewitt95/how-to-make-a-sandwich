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
  HIRE_EMPLOYEE: 'HIRE_EMPLOYEE',
  PAY_PAYROLL: 'PAY_PAYROLL',
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
      if (state.supply[Items.BREAD].inventory === 0 || state.supply[Items.BREAD].inventory < action.payload) return state;

      const items = Object.keys(state.supply);
      let sandwichMade = false;

      const decrement = (!isNaN(action.payload) || action.payload > 0) ? action.payload : 1;

      items.forEach(itemName => {
        const item = state.supply[itemName];
        if (item.inventory > 0) {
          sandwichMade = true;
          if (itemName === Items.BREAD) {
            const tempVal = item.inventory - (decrement * 2);
            item.inventory = tempVal < 0 ?  item.inventory : item.inventory - (decrement * 2);
            Math.floor(item.inventory);
            if (item.inventory % 2 !== 0) item.inventory -= 1;
            sandwichMade = tempVal > 0;
          } else if (item.unlocked) {
            const tempVal = item.inventory - decrement;
            item.inventory =  tempVal < 0 ? item.inventory : item.inventory - decrement;
            sandwichMade = tempVal > 0;
          }
        }
      });

      if (sandwichMade) {
        const increment = (!isNaN(action.payload) || action.payload > 0) ? action.payload : 1;
        state.sandwichCount += increment;
        state.sandwichInventoryCount += increment;
      }

      state.sandwichPrice = getNewSandwichPrice();

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

    case Actions.HIRE_EMPLOYEE:
      const newState = {
        ...state,
        employeeCount: state.employeeCount + 1,
        employeeTypes: {
          ...state.employeeTypes,
          [action.payload.eType]: {
            ...state.employeeTypes[action.payload.eType],
            count: state.employeeTypes[action.payload.eType].count + 1,
          }
        }
      }
      return newState;

    case Actions.PAY_PAYROLL:
      if (state.moneyOnHand < action.payload) return state;
      return {
        ...state,
        moneyOnHand: state.moneyOnHand -= action.payload,
      }
  
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
  moneyOnHand: 10000000,
  employeeCount: 0,
  employeeTypes: {
    Basic: {
      unlocked: true,
      count: 0,
      level: 0,
    },
    Manager: {
      unlocked: false,
      count: 0,
      level: 0,
    },
    Director: {
      unlocked: false,
      count: 0,
      level: 0,
    },
    Executive: {
      unlocked: false,
      count: 0,
      level: 0,
    },
  },
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
