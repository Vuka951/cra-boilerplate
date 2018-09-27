import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import DashboardPage from './components/pages/DashboardPage';
import ConfirmationPage from './components/pages/ConfirmationPage';
import ResetPasswordPage from './components/pages/ResetPasswordPage';
import ResettingPasswordPage from './components/pages/ResettingPasswordPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    const {location} = this.props;
    return (
      <div>
        <Route location={location} path='/' exact component={HomePage} />
        <Route location={location} path='/confirmation/:token' exact component={ConfirmationPage} />
        <GuestRoute location={location} path='/login' exact component={LoginPage} />
        <GuestRoute location={location} path='/signup' exact component={SignUpPage} />
        <GuestRoute location={location} path='/reset_password' exact component={ResetPasswordPage} />
        <GuestRoute location={location} path='/resetting_password/:token' exact component={ResettingPasswordPage} />
        <UserRoute location={location} path='/dashboard' exact component={DashboardPage} />
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
