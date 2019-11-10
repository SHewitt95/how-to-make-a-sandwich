export const convertToMoney = number => `$${Number.parseFloat(number).toFixed(2)}`;

export const convertToInteger = number => `${Math.floor(number)}`;

export const calculateScalePrice = (baseCost, multiplier, unitCount) => {
  return unitCount ? baseCost + Math.pow(multiplier, unitCount) : baseCost;
}