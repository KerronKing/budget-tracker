import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createTotal } from '../actions/index';

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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    } else if (id === 'other') {
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
    const { createTotal, history } = this.props;
    const total = { ...this.state };
    createTotal(total, budgetId).then(() => {
      history.push('/budgets');
    });

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
    return (
      <div>
        <h1>New Total Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="date"
            onChange={this.handleChange}
            className="user-input"
            id="date"
            placeholder="Enter the date for this entry"
            required
          />
          <input
            type="number"
            onChange={this.handleChange}
            className="user-input"
            id="rent"
            placeholder="Enter today's rent payment (if any)"
            required
          />
          <input
            type="number"
            onChange={this.handleChange}
            className="user-input"
            id="transport"
            placeholder="Enter today's transport total"
            required
          />
          <input
            type="number"
            onChange={this.handleChange}
            className="user-input"
            id="food"
            placeholder="Enter today's food total"
            required
          />
          <input
            type="number"
            onChange={this.handleChange}
            className="user-input"
            id="entertainment"
            placeholder="Enter today's entertainment total"
            required
          />
          <input
            type="number"
            onChange={this.handleChange}
            className="user-input"
            id="utilities"
            placeholder="Enter today's utilities total"
            required
          />
          <input
            type="number"
            onChange={this.handleChange}
            className="user-input"
            id="other"
            placeholder="Enter today's other expenses"
            required
          />
          <button type="submit">Submit Daily Expenditure</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createTotal: (total, budgetId) => dispatch(createTotal(total, budgetId)),
});

NewTotal.propTypes = {
  createTotal: PropTypes.func.isRequired,
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

export default connect(null, mapDispatchToProps)(NewTotal);
