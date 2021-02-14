import { WeatherState, WeatherData, WeatherAction, GET_WEATHER, SET_LOADING, SET_ERROR } from 'store/weather/types';

const initialState: WeatherState = {
  data: {} as WeatherData,
  loading: false,
  error: ''
};

const weatherReducer = (
  state = initialState, 
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case GET_WEATHER: 
      return {
        data: action.payload,
        loading: false,
        error: ""
      };
    case SET_LOADING: 
      return {
        ...state,
        loading: true
      };
    case SET_ERROR: 
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default weatherReducer;
