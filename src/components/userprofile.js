import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const UserProfile = ({ name, email }) => (
  <div>
    <div className="header">
      <h2>Profile</h2>
    </div>
    <div className="user-info">
      <div className="profile-name">
        <img src="https://img.icons8.com/ultraviolet/40/000000/star.png" alt="user icon" />
        <h3>{name}</h3>
      </div>
      <p className="profile-email">{email}</p>
    </div>
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
