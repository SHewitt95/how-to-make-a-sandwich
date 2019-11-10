export const convertToMoney = (number) => `$${Number.parseFloat(number).toFixed(2)}`;

export const BASE_PRICES = {
  suppliesRefill: 50,
  suppliesUpgrade: 150,
};

export const MULTIPLIERS = {
  suppliesRefill: 1.05,
  suppliesUpgrade: 1.07,
};
