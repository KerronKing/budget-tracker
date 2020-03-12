import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class NewTotal extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const date = document.getElementById('date');
    const rent = document.getElementById('rent');
    const transport = document.getElementById('transport');
    const food = document.getElementById('food');
    const entertainment = document.getElementById('entertainment');
    const utilities = document.getElementById('utilities');
    const other = document.getElementById('other');

    const { match: { params: { budgetId } } } = this.props;
    const { history } = this.props;
    const total = {
      budget_total: {
        date: date.value,
        rent: rent.value,
        transport: transport.value,
        food: food.value,
        entertainment: entertainment.value,
        utilities: utilities.value,
        other: other.value,
      },
    };

    const apiUrl = 'https://king-budget-api.herokuapp.com/';
    const token = `Bearer ${localStorage.getItem('jwt')}`;
    axios({
      method: 'post',
      url: `${apiUrl}api/v1/budgets/${budgetId}/budget_totals`,
      data: total,
      headers: { Authorization: token },
    })
      .then(() => history.push('/budgets'));

    date.value = '';
    rent.value = '';
    transport.value = '';
    food.value = '';
    entertainment.value = '';
    utilities.value = '';
    other.value = '';
  }

  render() {
    return (
      <div className="totals">
        <h2>Budget Tracker</h2>
        <h5>Daily Expenditure</h5>
        <form onSubmit={this.handleSubmit}>
          <input
            type="date"
            className="user-input"
            id="date"
            placeholder="Enter the date for this entry"
            required
          />
          <br />
          <input
            type="number"
            className="user-input"
            id="rent"
            placeholder="Enter rent payment"
            required
          />
          <br />
          <input
            type="number"
            className="user-input"
            id="transport"
            placeholder="Enter transport total"
            required
          />
          <br />
          <input
            type="number"
            className="user-input"
            id="food"
            placeholder="Enter food total"
            required
          />
          <br />
          <input
            type="number"
            className="user-input"
            id="entertainment"
            placeholder="Enter entertainment total"
            required
          />
          <br />
          <input
            type="number"
            className="user-input"
            id="utilities"
            placeholder="Enter utilities total"
            required
          />
          <br />
          <input
            type="number"
            className="user-input"
            id="other"
            placeholder="Enter other expenses"
            required
          />
          <br />
          <button type="submit" className="app-btn">Submit Daily Expenditure</button>
        </form>
      </div>
    );
  }
}

NewTotal.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.shape.isRequired,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      budgetId: PropTypes.string,
    }),
  }),
};

NewTotal.defaultProps = {
  history: PropTypes.shape,
  match: PropTypes.shape,
};

export default NewTotal;
