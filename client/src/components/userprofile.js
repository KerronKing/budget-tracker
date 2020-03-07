import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {

  render() {
    const { name, email } = this.props;
    return (
      <div>
        <h1>Profile</h1>
        <h2>{name}</h2>
        <p>{email}</p>
        <Link to={"/budgets"}></Link>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  name: state.name,
  email: state.email,
});

export default connect(mapStateToProps, null)(UserProfile);