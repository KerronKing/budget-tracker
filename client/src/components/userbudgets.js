import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UserBudgets extends React.Component {
  constructor(props) {
    super(props);
    this.state = { budgets: [] };
  }

  componentDidMount() {
    const token = `Bearer ${localStorage.getItem('jwt')}`;
    axios({ method: 'get', url: 'http://localhost:3001/api/v1/budgets', headers: { Authorization: token } })
      .then(response => {
        this.setState({ budgets: response.data });
        console.log(response.data);
      });
  }

  render() {
    const { budgets } = this.state;
    return (
      <div>
        <h1>Your Budgets</h1>
        {budgets.map(budget => (
          <div key={budget.id}>
            <div>
              <Link to={`/budgets/${budget.id}/budget_totals`}>Total</Link>
              <p>{budget.start_date}</p>
              <p>{budget.end_date}</p>
              <p>{budget.income}</p>
              <Link to={`${budget.id}/budget_totals/new`}>New total</Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name,
  email: state.email,
});

export default connect(mapStateToProps, null)(UserBudgets);
