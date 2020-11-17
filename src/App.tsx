import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';
import { setAlert } from 'store/actions/alertActions';
import { setError } from 'store/actions/weatherActions';

import Weather from 'components/Weather'
import Search from 'components/Search';
import Alert from 'components/Alert';

import 'App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);

  const alertMessage = useSelector((state: RootState) => state.alert.message);

  return (
    <div className="app has-text-centered">
      <Search title="Enter city name and press search button" />

      {loading ? (
        <h2 className="is-size-3 py-2">Loading...</h2>
      ) : (
        weatherData?.main && <Weather data={weatherData} />
      )}

      {alertMessage && (
        <Alert 
          message={alertMessage} 
          onClose={() => { dispatch(setAlert('')); }} 
        />
      )}

      {error && (
        <Alert 
          message={error} 
          onClose={() => { dispatch(setError()); }}  
        />
      )}
    </div>
  ); 
};

export default App;

