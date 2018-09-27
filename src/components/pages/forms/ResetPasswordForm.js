import React, {Component} from 'react';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';
import InlineError from '../messages/InlineError';
/* eslint-disable*/
class ResetPasswordForm extends Component {
    state = {
      data: {
        email: '',
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
        if (!isEmail(data.email)) errors.email = 'Invalid Email';
        return errors;
      }
      render() {
        const {data, errors, loading} = this.state;
        return (
          <form onSubmit={this.onSubmit}>
            {!!errors.global && <p>{errors.global}</p>}
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="example@emal.com" value={data.email} onChange={this.onChange} />
            {errors.email && <InlineError text={errors.email}/>}
            <button>Reset Password</button>
          </form>
        );
      }
}

ResetPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default ResetPasswordForm;
