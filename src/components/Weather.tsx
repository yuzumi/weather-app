import React, { FC } from 'react';

import { WeatherData } from 'store/weather/types';
import { toFahrenheit, toCelsius } from 'utils';

import WeatherIcon from 'components/WeatherIcon';

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  const fahrenheit = toFahrenheit(data.main.temp);
  const celsius = toCelsius(data.main.temp);

  return (
    <section className="section">
      <div className="container">
        <h1 
          className="title has-text-centered"
          style={{ marginBottom: '2rem' }}  
        >
          {data.name} - {data.sys.country}
        </h1>
        <div 
          className="level"
          style={{ alignItems: 'flex-start' }}
        >
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">
                {data.weather[0].description}
              </p>
              <p className="title">
                <WeatherIcon 
                  icon={data.weather[0].icon} 
                  description={data.weather[0].description}  
                />
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">
                temp
              </p>
              <div className="title">
                <p className="mb-2">
                  {data.main.temp}K
                </p>
                <p className="mb-2">
                  {fahrenheit}<sup>&#8457;</sup>
                </p>
                <p>
                  {celsius}<sup>&#8451;</sup>
                </p>
              </div>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">
                humidity
              </p>
              <p className="title">
                {data.main.humidity}
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">
                pressure
              </p>
              <p className="title">
                {data.main.pressure}
              </p>
            </div>            
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">
                wind
              </p>
              <p className="title">
                {data.wind.speed} m/s
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
