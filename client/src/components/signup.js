import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import userSignup from '../actions/index';

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { value, id } = e.target;
    if (id === 'name') {
      this.setState({
        name: value,
      })
    } else if (id === 'email') {
      this.setState({
        email: value,
      })
    } else if (id === 'password') {
      this.setState({
        password: value,
      })
    } else {
      this.setState({
        password_confirmation: value,
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('nameInput-signup');
    const email = document.getElementById('emailInput-signup');
    const password = document.getElementById('password-signup');
    const confirmation = document.getElementById('confirmation-signup');

    const { userSignup } = this.props;
    const user = { ...this.state };
    userSignup(user).then(() => {
      this.context.router.push('/');
    });

    this.setState({
      start_date: '',
      end_date: '',
      income: 0,
    });

    name.value = '';
    email.value = '';
    password.value = '';
    confirmation.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            onChange={this.handleChange}
            className="user-input"
            id="nameInput-signup"
            placeholder="Enter your name" 
            required
          />
          <input 
            type="email"
            onChange={this.handleChange}
            className="user-input"
            id="emailInput-signup"
            placeholder="Enter your email" 
            required
          />
          <input 
            type="text"
            onChange={this.handleChange}
            className="user-input"
            id="password-signup"
            placeholder="Enter your password" 
            required
          />
          <input 
            type="text"
            onChange={this.handleChange}
            className="user-input"
            id="confirmation-signup"
            placeholder="Confirm your password" 
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  userSignup: user => dispatch(userSignup(user)),
})

Signup.propTypes = {
  userSignup: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Signup);
