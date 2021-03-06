import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setAlert } from 'store/alert/actions';
import { setError } from 'store/weather/actions';
import { selectData } from 'store/weather/selectors';
import { selectMessage } from 'store/alert/selectors';

import Weather from 'components/Weather'
import Loader from 'components/Loader';
import Alert from 'components/Alert';

import Search from 'containers/Search';

import 'App.css';

const App: FC = () => {
  const dispatch = useDispatch();

  const { data: weatherData, loading, error } = useSelector(selectData);

  const alertMessage = useSelector(selectMessage);

  return (
    <div className="app has-text-centered">
      <Search title="Enter city name and press search button" />

      {loading ? (
        <Loader />
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

