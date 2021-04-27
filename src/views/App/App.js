import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../../styles/reset.scss';
import '../../styles/main.scss';
import styles from './App.module.scss';
import { AuthProvider } from '../../contexts/AuthContext';
import Header from '../../components/Header/Header';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Tasks from '../Tasks/Tasks';
import ForgotPassword from '../ForgotPassword/ForgotPassword';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Tasks} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
