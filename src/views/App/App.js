import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../../styles/reset.scss';
import '../../styles/main.scss';
import styles from './App.module.scss';
import { AuthProvider } from '../../contexts/AuthContext';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Header from '../../components/Header/Header';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Tasks from '../Tasks/Tasks';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import Account from '../Account/Account';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Switch>
          <PrivateRoute exact path="/" component={Tasks} />
          <PrivateRoute path="/account" component={Account} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
