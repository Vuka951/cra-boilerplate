import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {validateToken, resetPassword} from '../../actions/auth';
import ResettingPasswordForm from './forms/ResettingPasswordForm';

class ResettingPasswordPage extends Component {
    state = {
      loading: true,
      success: false,
    }

    componentDidMount() {
      this.props.validateToken(this.props.match.params.token).then(() => this.setState({loading: false, success: true}))
        .catch(() => this.setState({loading: false, success: false}));
    }

    submit = (data) => this.props.resetPassword(data).then(() => this.history.push('/login')); // eslint-disable-line

    render() {
      const {loading, success} = this.state; // the value of token is undefined after destructuing fix
      const {token} = this.props.match.params.token; // eslint-disable-line 
      return (
        <div>
          {loading && <div>Loading</div>}
          {!loading && success && <ResettingPasswordForm submit={this.submit} token={this.props.match.params.token} />}
          {!loading && !success && <div>Bullshit Token</div>}
        </div>
      );
    }
}

ResettingPasswordPage.propTypes = {
  validateToken: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,

};

export default connect(null, {validateToken, resetPassword})(ResettingPasswordPage);
