import React from 'react';
import { Spinner } from 'react-bootstrap';
import './index.css';

const Loader = () => {
  return (
    <div className="container container-loader">
      <Spinner animation="grow" variant="danger" role="status" />
    </div>
  );
};

export default Loader;
