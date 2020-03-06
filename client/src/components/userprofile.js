import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { getUser } from '../actions/index';

class UserProfile extends React.Component {

  componentDidMount() {
    let token = "Bearer " + localStorage.getItem("jwt");
    const { getUser } = this.props;
    const { id } = this.props.params;
    getUser(token, id);
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>{user.name}</h1>
        <Link to={"/budgets"}></Link>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  user: state.users.user,
});

const mapDispatchToProps = dispatch => ({
  getUser: (token, id) => dispatch(getUser(token, id)),
});

UserProfile.propTypes = {
  getUser: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);