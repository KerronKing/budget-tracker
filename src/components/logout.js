import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeUser, loggedIn } from '../actions/index';

const Logout = ({ removeUser, loggedIn }) => {
  useEffect(() => {
    localStorage.removeItem('jwt');
    loggedIn(false);
    removeUser();
  });

  return <Redirect to="/" />;
};

const mapDispatchToProps = dispatch => ({
  loggedIn: status => dispatch(loggedIn(status)),
  removeUser: () => dispatch(removeUser()),
});

Logout.propTypes = {
  loggedIn: PropTypes.func.isRequired,
  removeUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Logout);
