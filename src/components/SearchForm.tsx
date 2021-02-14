import React, { FC, FormEvent, useState,  } from 'react';

interface SearchFormProps {
  title: string;
  onSubmit: (city: string) => void;
}

const SearchForm: FC<SearchFormProps> = ({ title, onSubmit }) => {
  const [city, setCity] = useState('');

  const handleCityChange = (event: FormEvent<HTMLInputElement>) => {
    setCity(event.currentTarget.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(city);
    setCity('');
  };

  return (
    <div className="hero is-light has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            {title}
          </h1>

          <form 
            className="py-5"
            onSubmit={handleSubmit}  
          >
            <input 
              className="input has-text-centered mb-2" 
              type="text" 
              name="city" 
              id="city" 
              placeholder="Enter city name"
              style={{ maxWidth: '20rem' }}
              value={city}
              onChange={handleCityChange}
            />
            <button 
              className="button is-primary is-fullwidth"
              type="submit"
              style={{ maxWidth: '20rem', margin: '0 auto' }}  
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
