export const toFahrenheit = (value: number) => {
  return parseFloat((value * 1.8 - 459.67).toFixed(2));
};

export const toCelsius = (value: number) => {
  return parseFloat((value - 273.15).toFixed(2));
};
