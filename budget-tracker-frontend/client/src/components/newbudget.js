import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class NewBudget extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const budgetName = document.getElementById('budget-name');
    const startDate = document.getElementById('start-date');
    const endDate = document.getElementById('end-date');
    const incomeField = document.getElementById('income');

    const { history } = this.props;
    const budget = {
      budget: {
        name: budgetName.value,
        start_date: startDate.value,
        end_date: endDate.value,
        income: incomeField.value,
      },
    };

    const token = `Bearer ${localStorage.getItem('jwt')}`;
    axios({
      method: 'post',
      url: 'http://localhost:3001/api/v1/budgets',
      data: budget,
      headers: { Authorization: token },
    })
      .then(() => history.push('/budgets'))
      .then(() => window.location.reload(false));

    budgetName.value = '';
    startDate.value = '';
    endDate.value = '';
    incomeField.value = '';
  }

  render() {
    return (
      <div className="app-form">
        <h2 className="logo">Budget Tracker</h2>
        <h3>Create a Budget</h3>
        <form onSubmit={this.handleSubmit} className="new-budget">
          <input
            type="text"
            className="user-input"
            id="budget-name"
            placeholder="Enter your budget's name"
            required
          />
          <br />
          <input
            type="date"
            className="user-input"
            id="start-date"
            placeholder="Enter your starting budget date"
            required
          />
          <br />
          <input
            type="date"
            className="user-input"
            id="end-date"
            placeholder="Enter your ending budget date"
            required
          />
          <br />
          <input
            type="number"
            className="user-input"
            id="income"
            placeholder="Enter your salary/income for this period"
            required
          />
          <br />
          <button type="submit" className="app-btn">Create Budget</button>
        </form>
      </div>
    );
  }
}

NewBudget.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.shape.isRequired,
  }),
};

NewBudget.defaultProps = {
  history: PropTypes.shape,
};

export default NewBudget;
