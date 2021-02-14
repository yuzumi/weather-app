import { ThunkAction } from 'redux-thunk';

import { RootState } from 'store';
import { WeatherAction, WeatherData, WeatherError, GET_WEATHER, SET_ERROR, SET_LOADING } from 'store/weather/types';

import { loadWeatherData } from 'services/http-client';

export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
  return async dispatch => {
    try {
      const response = await loadWeatherData(city);

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
