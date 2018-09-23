import React, {Component} from 'react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
    state = {
      data: {
        email: '',
        password: '',
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
        this.props.submit(this.state.data);
      }
    }

    validate = (data) => {
      const errors = {};
      if (!Validator.isEmail(data.email)) errors.email = 'Invalid Email';
      if (!data.password) errors.password = 'Cant be black';
      return errors;
    }
    render() {
      const {data, errors} = this.state;
      return (
        <form onSubmit={this.onSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="example@emal.com" value={data.email} onChange={this.onChange} />
          {errors.email && <InlineError text={errors.email}/>}
          <label htmlFor="email">Password</label>
          <input type="password" id="password" name="password" placeholder="password" value={data.password} onChange={this.onChange} />
          {errors.password && <InlineError text={errors.password}/>}
          <button>Login</button>
        </form>
      );
    }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
};
