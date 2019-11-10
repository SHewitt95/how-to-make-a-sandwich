export const convertToMoney = (number = 0) => `$${Number.parseFloat(number).toFixed(2)}`;

export const convertToInteger = (number = 0) => Math.floor(number);

export const convertToFloat = (number = 0, accuracy = 2) => Number.parseFloat(number).toFixed(accuracy);

export const calculateScalePrice = (baseCost = 0, multiplier = 0, unitCount = 0) => {
  return unitCount ? baseCost + Math.pow(multiplier, unitCount) : baseCost;
}

export const calculateScalePriceFloat = (baseCost = 0, multiplier = 0, unitCount = 0, accuracy = 2) => {
  return convertToFloat(calculateScalePrice(baseCost, multiplier, unitCount), accuracy);
}

export const haveEnoughInventory = state => {
  const itemNames = Object.keys(state.supply);
  let enoughInventory = true;
  itemNames.forEach(itemName => {
    const item = state.supply[itemName];
    if (item.unlocked) {
      if (item.inventory === 0) {
        enoughInventory = false;
      }
    }
  });
  return enoughInventory;
}