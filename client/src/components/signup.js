import React from 'react';
import { post } from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userSignup, getUser } from '../actions/index';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { value, id } = e.target;
    if (id === 'nameInput-signup') {
      this.setState({
        name: value,
      });
    } else if (id === 'emailInput-signup') {
      this.setState({
        email: value,
      });
    } else if (id === 'password-signup') {
      this.setState({
        password: value,
      });
    } else {
      this.setState({
        password_confirmation: value,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const nameInput = document.getElementById('nameInput-signup');
    const emailInput = document.getElementById('emailInput-signup');
    const passwordInput = document.getElementById('password-signup');
    const confirmation = document.getElementById('confirmation-signup');

    const { userSignup, history } = this.props;
    const { name, email, password } = this.state;
    const user = { user: this.state };

    const request = { auth: { email, password } };
    post('/api/v1/login', request)
      .then(response => {
        localStorage.setItem('jwt', response.data.jwt);
        userSignup(user);
      });
    getUser(name, email);
    this.setState({
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    });

    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    confirmation.value = '';

    history.push('/budgets');
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
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userSignup: user => dispatch(userSignup(user)),
  getUser: (name, email) => dispatch(getUser(name, email)),
});

Signup.propTypes = {
  userSignup: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Signup);
