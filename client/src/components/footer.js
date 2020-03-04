import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Link to='/budgets/new'>Add Budget (new)</Link>  
        <Link to='/users/budgets'>Your Budgets</Link>
        <Link to='/budget_totals'>Stats</Link>
        <Link to='/user'>Profile</Link>
      </div>
    )
  }
};

export default Footer;
