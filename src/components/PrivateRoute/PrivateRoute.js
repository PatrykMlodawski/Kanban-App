import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function PrivateRoute({ component: Component, path, exact }) {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Route path={path} exact={exact} component={Component} />
  ) : (
    <Redirect to="/login" />
  );
}

export default PrivateRoute;
