import React, {Component} from 'react';
import LoginForm from './forms/LoginForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../actions/auth';
import {Link} from 'react-router-dom';

class LoginPage extends Component {
  submit = (data) => this.props.login(data).then(() => this.props.history.push('/dashboard'));
  render() {
    return (
      <div>
        <p>Login Page</p>
        <LoginForm submit={this.submit}/>
        <Link to='/reset_password'>Reset your password</Link>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
};

export default connect(null, {login})(LoginPage);
