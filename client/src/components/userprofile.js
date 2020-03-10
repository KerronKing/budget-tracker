import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserProfile = ({ name, email }) => (
  <div>
    <h1>Profile</h1>
    <h2>{name}</h2>
    <p>{email}</p>
    <Link to="/budgets" />
  </div>
);

const mapStateToProps = state => ({
  name: state.users.name,
  email: state.users.email,
});

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(UserProfile);
