import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Link to='/budgets/new'>Add Budget (new)</Link>  
        <Link to='/users/:user_id/budgets'>Your Budgets</Link>
        <Link to='/budgets/:budget_id/budget_totals'>Stats</Link>
        <Link to='/user'>Profile</Link>
      </div>
    )
  }
};

export default Footer;
