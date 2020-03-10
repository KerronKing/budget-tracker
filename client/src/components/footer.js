import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer">
    <Link to="/budgets/new">Create New Budget</Link>
    <Link to="/budgets">Your Budgets</Link>
    <Link to="/user">Profile</Link>
    <Link to="/logout">Logout</Link>
  </div>
);

export default Footer;
