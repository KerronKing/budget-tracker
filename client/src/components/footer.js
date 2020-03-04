import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Link to='/users/:user_id/budgets'>Add Budget (new)</Link>  
        <Link to='/users/:user_id/budgets'>Your Budgets</Link>
        <Link to='/users/:id/budgets/:id'>Stats</Link>
        <Link to='/users/:id'>Profile</Link>
      </div>
    )
  }
};

export default Footer;
