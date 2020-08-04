import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Homepage = ({ userStatus, name }) => {
  let page;
  if (userStatus) {
    page = (
      <div className="home">
        <h1>Budget Tracker</h1>
        <div className="welcome">
          Welcome back &thinsp;
          {name}
        </div>
      </div>
    );
  } else {
    page = (
      <div className="home">
        <h1>Budget Tracker</h1>
        <div className="login-links">
          <div>
            <img src="bug.png" height="250" width="250" alt="budget-img" />
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="App home">
      {page}
    </div>
  );
};

const mapStateToProps = state => ({
  userStatus: state.status.status,
  name: state.users.name,
});

Homepage.propTypes = {
  userStatus: PropTypes.bool.isRequired,
  name: PropTypes.string,
};

Homepage.defaultProps = {
  name: PropTypes.string,
};

export default connect(mapStateToProps, null)(Homepage);
