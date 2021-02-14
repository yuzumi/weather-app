import React, { FC } from 'react';

interface WeatherIconProps {
  icon: string;
  description: string;
}

const WeatherIcon: FC<WeatherIconProps> = ({ icon, description }) => (
  <img 
    src={`https://api.openweathermap.org/img/wn/${icon}.png`}
    alt={description}
  />
);

export default WeatherIcon;
