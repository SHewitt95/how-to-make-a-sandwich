export const convertToFloat = (number = 0, accuracy = 2) => Number.parseFloat(number).toFixed(accuracy);
  
export const calculateScalePrice = (baseCost = 0, multiplier = 0, unitCount = 0) => {
  return unitCount ? baseCost + Math.pow(multiplier, unitCount) : baseCost;
}

export const calculateScalePriceFloat = (baseCost = 0, multiplier = 0, unitCount = 0, accuracy = 2) => {
  return convertToFloat(calculateScalePrice(baseCost, multiplier, unitCount), accuracy);
}

export const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}