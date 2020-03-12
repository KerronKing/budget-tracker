import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
  <div className="App home">
    <h1>Budget Tracker</h1>
    <div className="login-links">
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up</Link>
    </div>
  </div>
);

export default Homepage;
