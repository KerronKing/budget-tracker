import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class NewBudget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      startdate: '',
      enddate: '',
      income: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value, id } = e.target;
    if (id === 'budget-name') {
      this.setState({
        name: value,
      });
    } else if (id === 'start-date') {
      this.setState({
        startdate: value,
      });
    } else if (id === 'end-date') {
      this.setState({
        enddate: value,
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
    const budget = { budget: this.state };

    const apiUrl = 'https://king-budget-api.herokuapp.com/';
    const token = `Bearer ${localStorage.getItem('jwt')}`;
    axios({
      method: 'post',
      url: `${apiUrl}api/v1/budgets`,
      data: budget,
      headers: { Authorization: token },
    })
      .then(() => history.push('/budgets'))
      .then(() => window.location.reload(false));

    this.setState({
      name: '',
      startdate: '',
      enddate: '',
      income: '',
    });

    budgetName.value = '';
    startDate.value = '';
    endDate.value = '';
    incomeField.value = '';
  }

  render() {
    const {
      name, startdate, enddate, income,
    } = this.state;
    return (
      <div className="app-form">
        <h2 className="logo">Budget Tracker</h2>
        <h3>Create a Budget</h3>
        <form onSubmit={this.handleSubmit} className="new-budget">
          <input
            type="text"
            name={name}
            className="user-input"
            id="budget-name"
            onChange={this.handleChange}
            placeholder="Enter your budget's name"
            required
          />
          <br />
          <input
            type="date"
            name={startdate}
            className="user-input"
            id="start-date"
            onChange={this.handleChange}
            placeholder="Enter your starting budget date"
            required
          />
          <br />
          <input
            type="date"
            name={enddate}
            className="user-input"
            id="end-date"
            onChange={this.handleChange}
            placeholder="Enter your ending budget date"
            required
          />
          <br />
          <input
            type="number"
            className="user-input"
            name={income}
            id="income"
            onChange={this.handleChange}
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
