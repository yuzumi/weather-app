import React, { FC } from 'react';

interface LoaderProps {
  text?: string;
}

const Loader: FC<LoaderProps> = ({ text = 'Loading...' }) => (
  <h2 className="is-size-3 py-2">
    {text}
  </h2>
);

export default Loader;
