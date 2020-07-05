import React from 'react';
import Spinner from 'react-loader-spinner';
import './Loader.css';

const Loader = () => (
  <div>
    <Spinner
      type="Circles"
      color="#00BFFF"
      height={80}
      width={80}
      timeout={3000} //3 secs
    />
  </div>
);

export default Loader;
