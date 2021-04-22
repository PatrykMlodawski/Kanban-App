import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../../styles/reset.scss';
import '../../styles/main.scss';
import styles from './App.module.scss';
import { AuthProvider } from '../../contexts/AuthContext';
import Header from '../../components/Header/Header';
import Login from '../Login/Login';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
