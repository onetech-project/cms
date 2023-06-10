import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { shorthand } from '../utils';
import { PageNotPermitted } from '../screens';

// eslint-disable-next-line react/prop-types
function Protected({ children, permission }) {
  const auth = useSelector((state) => state.authReducer.auth);
  if (!auth?.access_token) {
    return <Navigate to="/admin/login" replace />;
  }
  if (!shorthand.getItemInToken('roles')?.includes?.(permission)) {
    return <PageNotPermitted />;
  }
  return children;
}

export default Protected;
