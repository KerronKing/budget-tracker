import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            className="user-input"
            id="nameInput"
            placeholder="Enter your name" 
            required
          />
          <input 
            type="email"
            className="user-input"
            id="emailInput"
            placeholder="Enter your email" 
            required
          />
          <button type="submit">Login</button>
        </form>
        <div>
          <p>or</p>
          <Link to='/sessions#new'>Sign Up</Link>
        </div>
      </div>
    )
  }
};

export default Login;
