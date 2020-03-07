import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeUser } from '../actions/index';

const Logout = ({ removeUser }) => {
  localStorage.removeItem('jwt');
  removeUser();
  return <Redirect to='/' />
}

const mapDispatchToProps = dispatch => ({
  removeUser: () => dispatch(removeUser()),
});

Logout.propTypes = {
  removeUser: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Logout);