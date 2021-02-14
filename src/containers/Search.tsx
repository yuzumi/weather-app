import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { setAlert } from 'store/alert/actions';
import { getWeather, setLoading } from 'store/weather/actions';

import SearchForm from 'components/SearchForm';

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();

  const handleSubmit = (city: string) => {
    if (city.trim() === '') {
      return dispatch(setAlert('City is required'));
    }

    dispatch(setLoading());
    dispatch(getWeather(city));
  };

  return (
    <SearchForm 
      title={title}
      onSubmit={handleSubmit}
    />
  );
};

export default Search;
