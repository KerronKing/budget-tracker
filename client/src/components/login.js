import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object,
  }

  handleChange(e) {
    const { value, id } = e.target;
    if (id === 'nameInput') {
      this.setState({
        name: value
      })
    } else if (id === 'emailInput') {
      this.setState({
        email: value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');

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
