import React from 'react';
import { post } from 'axios';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getUser } from '../actions/index';

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
    const { history } = this.props;

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
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            className="user-input"
            id="nameInput"
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            onChange={this.handleChange}
            className="user-input"
            id="emailInput"
            placeholder="Enter your email"
            required
          />
          <input
            type="text"
            onChange={this.handleChange}
            className="user-input"
            id="password"
            placeholder="Enter your password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getUser: (name, email) => dispatch(getUser(name, email)),
});

Login.propTypes = {
  getUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
