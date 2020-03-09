import React from 'react';
import { post } from 'axios';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getUser, loggedIn } from '../actions/index';

class Login extends React.Component {
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
    if (id === 'nameInput') {
      this.setState({
        name: value,
      });
    } else if (id === 'emailInput') {
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

    const nameLogin = document.getElementById('nameInput');
    const emailLogin = document.getElementById('emailInput');
    const passwordLogin = document.getElementById('password');

    const { name, email, password } = this.state;
    const { getUser, loggedIn, history } = this.props;

    nameLogin.value = '';
    emailLogin.value = '';
    passwordLogin.value = '';

    const request = { auth: { email, password } };
    post('http://localhost:3001/login', request)
      .then(response => {
        localStorage.setItem('jwt', response.data.jwt);
        history.push('/budgets');
      });
    getUser(name, email);
    loggedIn(true);
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  }

  render() {
    return (
      <div className="login-form">
        <h2 className="logo">Budget Tracker</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            className="user-input"
            id="nameInput"
            placeholder="Enter your name"
            required
          />
          <br />
          <input
            type="email"
            onChange={this.handleChange}
            className="user-input"
            id="emailInput"
            placeholder="Enter your email"
            required
          />
          <br />
          <input
            type="text"
            onChange={this.handleChange}
            className="user-input"
            id="password"
            placeholder="Enter your password"
            required
          />
          <br />
          <button type="submit" className="app-btn">Login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getUser: (name, email) => dispatch(getUser(name, email)),
  loggedIn: status => dispatch(loggedIn(status)),
});

Login.propTypes = {
  getUser: PropTypes.func.isRequired,
  loggedIn: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.shape.isRequired,
  }),
};

Login.defaultProps = {
  history: PropTypes.shape,
};

export default connect(null, mapDispatchToProps)(Login);
