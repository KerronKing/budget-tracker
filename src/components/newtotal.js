import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class NewTotal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      rent: 0,
      transport: 0,
      food: 0,
      entertainment: 0,
      utilities: 0,
      other: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value, id } = e.target;
    if (id === 'date') {
      this.setState({
        date: value,
      });
    } else if (id === 'rent') {
      this.setState({
        rent: value,
      });
    } else if (id === 'transport') {
      this.setState({
        transport: value,
      });
    } else if (id === 'food') {
      this.setState({
        food: value,
      });
    } else if (id === 'entertainment') {
      this.setState({
        entertainment: value,
      });
    } else if (id === 'utilities') {
      this.setState({
        utilities: value,
      });
    } else {
      this.setState({
        other: value,
      });
    }
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
      budget_total: this.state,
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

    this.setState({
      date: '',
      rent: 0,
      transport: 0,
      food: 0,
      entertainment: 0,
      utilities: 0,
      other: 0,
    });

    date.value = '';
    rent.value = '';
    transport.value = '';
    food.value = '';
    entertainment.value = '';
    utilities.value = '';
    other.value = '';
  }

  render() {
    const {
      date,
      rent,
      transport,
      food,
      entertainment,
      utilities,
      other,
    } = this.state;

    return (
      <div className="app-form">
        <h2>Budget Tracker</h2>
        <h5>Daily Expenditure</h5>
        <form onSubmit={this.handleSubmit} className="total-form">
          <input
            type="date"
            name={date}
            className="user-input"
            id="date"
            onChange={this.handleChange}
            placeholder="Enter the date for this entry"
            required
          />
          <br />
          <input
            type="number"
            name={rent}
            className="user-input"
            id="rent"
            onChange={this.handleChange}
            placeholder="Enter rent payment"
            required
          />
          <br />
          <input
            type="number"
            name={transport}
            className="user-input"
            id="transport"
            onChange={this.handleChange}
            placeholder="Enter transport total"
            required
          />
          <br />
          <input
            type="number"
            name={food}
            className="user-input"
            id="food"
            onChange={this.handleChange}
            placeholder="Enter food total"
            required
          />
          <br />
          <input
            type="number"
            name={entertainment}
            className="user-input"
            id="entertainment"
            onChange={this.handleChange}
            placeholder="Enter entertainment total"
            required
          />
          <br />
          <input
            type="number"
            name={utilities}
            className="user-input"
            id="utilities"
            onChange={this.handleChange}
            placeholder="Enter utilities total"
            required
          />
          <br />
          <input
            type="number"
            name={other}
            className="user-input"
            id="other"
            onChange={this.handleChange}
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
