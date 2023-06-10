import React from 'react';

const PageNotPermitted = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold">403</h1>
        <p className="fs-3">
          {' '}
          <span className="text-danger">Not</span> Authorized.
        </p>
        <p className="lead">You don&apos;t have access to this page.</p>
        <a href="/" className="btn btn-primary">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default PageNotPermitted;
