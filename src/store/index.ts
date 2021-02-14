import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import weatherReducer from 'store/weather/reducer';
import alertReducer from 'store/alert/reducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  alert: alertReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk
    )
  )
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
