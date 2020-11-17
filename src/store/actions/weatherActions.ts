import { ThunkAction } from 'redux-thunk';

import { RootState } from 'store';
import { WeatherAction, WeatherData, WeatherError, GET_WEATHER, SET_ERROR, SET_LOADING } from 'store/types';

export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
  return async dispatch => {
    try {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

      const response = await fetch(endpoint);

      if (!response.ok) {
        const data: WeatherError = await response.json();
        throw new Error(data.message);
      }

      const data: WeatherData = await response.json();

      dispatch({
        type: GET_WEATHER,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message
      });
    }
  };
};

export const setLoading = (): WeatherAction => ({
  type: SET_LOADING
});

export const setError = (): WeatherAction => ({
  type: SET_ERROR,
  payload: ''
});
