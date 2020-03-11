import React from 'react';
import { post } from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser, loggedIn } from '../actions/index';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
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
    } else {
      this.setState({
        password: value,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const nameInput = document.getElementById('nameInput-signup');
    const emailInput = document.getElementById('emailInput-signup');
    const passwordInput = document.getElementById('password-signup');

    const { history, getUser, loggedIn } = this.props;
    const { name, email, password } = this.state;
    const user = { user: this.state };

    const request = { auth: { email, password } };
    post('http://localhost:3001/api/v1/users', user)
      .then(response => {
        localStorage.setItem('jwt', response.data.jwt);
        getUser(name, email);
        loggedIn(true);
        return post('http://localhost:3001/login', request)
      });
    history.push('/budgets');

    this.setState({
      name: '',
      email: '',
      password: '',
    });

    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';

    history.push('/budgets');
  }

  render() {
    return (
      <div className="app-form">
        <h2 className="logo">Budget Tracker</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            className="user-input"
            id="nameInput-signup"
            placeholder="Enter your name"
            required
          />
          <br />
          <input
            type="email"
            onChange={this.handleChange}
            className="user-input"
            id="emailInput-signup"
            placeholder="Enter your email"
            required
          />
          <br />
          <input
            type="text"
            onChange={this.handleChange}
            className="user-input"
            id="password-signup"
            placeholder="Enter your password"
            required
          />
          <br />
          <button type="submit" className="app-btn">Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getUser: (name, email) => dispatch(getUser(name, email)),
  loggedIn: status => dispatch(loggedIn(status)),
});

Signup.propTypes = {
  getUser: PropTypes.func.isRequired,
  loggedIn: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.shape.isRequired,
  }),
};

Signup.defaultProps = {
  history: PropTypes.shape,
};

export default connect(null, mapDispatchToProps)(Signup);
