import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class NewBudget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      start_date: '',
      end_date: '',
      income: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { value, id } = e.target;
    if (id === 'budget-name') {
      this.setState({
        name: value,
      });
    } else if (id === 'start-date') {
      this.setState({
        start_date: value,
      });
    } else if (id === 'end-date') {
      this.setState({
        end_date: value,
      });
    } else {
      this.setState({
        income: value,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const budgetName = document.getElementById('budget-name');
    const startDate = document.getElementById('start-date');
    const endDate = document.getElementById('end-date');
    const incomeField = document.getElementById('income');

    const { history } = this.props;
    const budget = {
      budget: this.state,
    };

    const token = `Bearer ${localStorage.getItem('jwt')}`;
    axios({ method: 'post',
            url: 'http://localhost:3001/api/v1/budgets',
            data: budget, 
            headers: { Authorization: token }
          })

    this.setState({
      name: '',
      start_date: '',
      end_date: '',
      income: 0,
    });

    budgetName.value = '';
    startDate.value = '';
    endDate.value = '';
    incomeField.value = '';

    history.push('/budgets');
  }

  render() {
    return (
      <div className="app-form">
        <h2 className="logo">Budget Tracker</h2>
        <h3>Create a Budget</h3>
        <form onSubmit={this.handleSubmit} className="new-budget">
          <input
            type="text"
            onChange={this.handleChange}
            className="user-input"
            id="budget-name"
            placeholder="Enter your budget's name"
            required
          />
          <br />
          <input
            type="date"
            onChange={this.handleChange}
            className="user-input"
            id="start-date"
            placeholder="Enter your starting budget date"
            required
          />
          <br />
          <input
            type="date"
            onChange={this.handleChange}
            className="user-input"
            id="end-date"
            placeholder="Enter your ending budget date"
            required
          />
          <br />
          <input
            type="number"
            onChange={this.handleChange}
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
