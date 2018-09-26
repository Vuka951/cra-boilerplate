import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';

class HomePage extends Component {
  render() {
    const {isAuthenticated, logout} = this.props;
    return (
      <div>
        <h1>HomePage</h1>
        {isAuthenticated ? <button onClick={() => logout()}>Logout</button> : <div><Link to='/login'>login</Link> or <Link to='/signup'>SignUp</Link></div>}
      </div>
    );
  }
}

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token,
  };
}

export default connect(mapStateToProps, {logout})(HomePage);
