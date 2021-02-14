const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const baseUrl = `https://api.openweathermap.org/data/2.5/weather`;

export const loadWeatherData = (city: string) => {
  return fetch(`${baseUrl}?q=${city}&appid=${apiKey}`)
};
