import React from 'react';
import { post } from 'axios';
import { Link } from 'react-router-dom';

class Login extends React.Component {
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
    if (id === 'nameInput') {
      this.setState({
        name: value,
      })
    } else if (id === 'emailInput') {
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

    const nameLogin = document.getElementById('nameInput');
    const emailLogin = document.getElementById('emailInput');
    const passwordLogin = document.getElementById('password');
    const confirmationLogin = document.getElementById('confirmation');

    const { email, password } = this.state;
    const { history } = this.props;

    nameLogin.value = '';
    emailLogin.value = '';
    passwordLogin.value = '';
    confirmationLogin.value = '';

    const request = {"auth": {"email": email, "password": password}};
    post('/api/v1/login', request)
      .then(response => {
        localStorage.setItem("jwt", response.data.jwt);
        history.push("/budgets");
      })
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
          <input 
            type="text"
            onChange={this.handleChange}
            className="user-input"
            id="confirmation"
            placeholder="Confirm your password" 
            required
          />
          <button type="submit">Login</button>
        </form>
        <div>
          <p>or</p>
          <Link to='/signup'>Sign Up</Link>
        </div>
      </div>
    )
  }
};

export default Login;
