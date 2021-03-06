export const Actions = {
  MAKE_SANDWICH: 'MAKE_SANDWICH',
  UP_PLAYER_LEVEL: 'UP_PLAYER_LEVEL',
  UPGRADE_MENU_ITEM: 'UPGRADE_MENU_ITEM',
  ACTIVATE_AUTO_ARMS: 'ACTIVATE_AUTO_ARMS',
  LOAD_GAME: 'LOAD_GAME',
  SAVE_GAME: 'SAVE_GAME',
  RESET_GAME: 'RESET_GAME',
};

export const Menu = {
  BREAD: 'Bread',
  CONDIMENTS: 'Condiments',
  CHEESE: 'Cheese',
  VEGETABLES: 'Vegetables',
  MEAT: 'Meat',
};

export const MenuMultipliers = {
  BREAD: 1.15,
  CONDIMENTS: 1.25,
  CHEESE: 1.75,
  VEGETABLES: 2.75,
  MEAT: 4.75,
};

export const MAX_NUMBER = 7700000000;

const SECOND = 1000;
export const INTERVAL_TIME = 10;
export const PER_SECOND_DIVISOR = SECOND/INTERVAL_TIME;
export const FLOATING_POINT = 0;
export const SANDWICH_MULTIPLIER = 1.15;
export const BASE_PROGRESS_BAR_THRESHOLD = 20;
export const THRESHOLD_MULTIPLIER = 2;