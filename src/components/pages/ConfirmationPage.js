import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {confirm} from '../../actions/auth';

class ConfirmationPage extends Component {
    state = {
      loading: true,
      success: false,
    }
    componentDidMount() {
      this.props.confirm(this.props.match.params.token).then(() => this.setState({loading: false, success: true}))
        .catch(() => this.setState({loading: false, success: false}));
    }
    render() {
      const {loading, success} = this.state;
      return (
        <div>
          {loading && <p>Validatng your email</p>}
          {!loading && success && <div>Your Email has been confirmed!!! <Link to='/dashboard'>dashboard</Link></div>}
          {!loading && !success && <div>Invalid token for conformation</div>}
        </div>
      );
    }
}
ConfirmationPage.propTypes = {
  confirm: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default connect(null, {confirm})(ConfirmationPage);
