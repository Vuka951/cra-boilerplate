import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ResetPasswordForm from './forms/ResetPasswordForm';
import {connect} from 'react-redux';
import {resetPasswordRequest} from '../../actions/auth';

class ResetPasswordPage extends Component {
    state = {
      success: false,
    }

    submit = (data) => this.props.resetPasswordRequest(data).then(() => this.setState({success: true})); // eslint-disable-line

    render() {
      return (
        <div>
          {this.state.success ? <div>Email has been sent</div> :
            <ResetPasswordForm submit={this.submit}/>
          }
        </div>
      );
    }
}

ResetPasswordPage.propTypes = {
  resetPasswordRequest: PropTypes.func.isRequired,
};

export default connect(null, {resetPasswordRequest})(ResetPasswordPage);
