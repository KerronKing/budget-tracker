import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class BudgetTotals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budgetTotals: [],
    };
  }

  componentDidMount() {
    const token = `Bearer ${localStorage.getItem('jwt')}`;
    const { match: { params: { budgetId } } } = this.props;
    axios({ method: 'get', url: `http://localhost:3001/api/v1/budgets/${budgetId}/budget_totals`, headers: { Authorization: token } })
      .then(response => {
        this.setState({ budgetTotals: response.data });
      });
  }

  render() {
    const { budgetTotals } = this.state;
    return (
      <div>
        <h1>Budgets Data</h1>
        {budgetTotals.map(budgetTotal => (
          <div key={budgetTotal.id}>
            <p>{budgetTotal.date}</p>
            <p>{budgetTotal.rent}</p>
            <p>{budgetTotal.transport}</p>
            <p>{budgetTotal.food}</p>
            <p>{budgetTotal.entertainment}</p>
            <p>{budgetTotal.utilities}</p>
            <p>{budgetTotal.other}</p>
          </div>
        ))}
      </div>
    );
  }
}

BudgetTotals.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default BudgetTotals;
