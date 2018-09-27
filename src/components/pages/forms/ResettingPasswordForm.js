import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InlineError from '../messages/InlineError';
/* eslint-disable */
class ResettingPasswordForm extends Component {
    state = {
      data: {
        token: this.props.token,
        password: '',
        passwordConfirmation: '',
      },
      loading: false,
      errors: {},
    }

    onChange = (e) => {
      this.setState({
        data: {...this.state.data, [e.target.name]: e.target.value},
      });
    }

    onSubmit = (e) => {
      e.preventDefault();
      const errors = this.validate(this.state.data);
      this.setState({errors});
      if (Object.keys(errors).length === 0) {
        this.setState({loading: true});
       this.props.submit(this.state.data).catch((err) => this.setState({errors: err.response.data.errors, loading: false}));
      }
    }

      validate = (data) => {
        const errors = {};
        if (!data.password) errors.password = 'cant be blank';
        if (data.password != data.passwordConfirmation) errors.password = 'they need to be the same';
        return errors;
      }
      render() {
        const {data, errors} = this.state;
        return (
          <form onSubmit={this.onSubmit}>
            {!!errors.global && <p>{errors.password}</p>}
            <label htmlFor="password">Your new password</label>
            <input type="password" id="password" name="password" placeholder="password-placeholer" value={data.password} onChange={this.onChange} />
            {errors.password && <InlineError text={errors.password}/>}
            <label htmlFor="passwordConfirmation">Confirm new passowrd</label>
            <input type="passwordConfirmation" id="passwordConfirmation" name="passwordConfirmation" placeholder="type the password again" value={data.passwordConfirmation} onChange={this.onChange} />
            {errors.passwordConfirmation && <InlineError text={errors.passwordConfirmation}/>}
            <button>Reset Password</button>
          </form>
        );
      }
}

ResettingPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
};

export default ResettingPasswordForm;
