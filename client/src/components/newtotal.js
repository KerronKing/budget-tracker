import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createTotal } from '../actions/index';

class NewTotal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      rent: 0,
      transport: 0,
      food: 0,
      entertainment: 0,
      utilities: 0,
      other: 0,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object,
  }

  handleChange(e) {
    const { value, id } = e.target;
    if (id === 'date') {
      this.setState({
        date: value,
      })
    } else if (id === 'rent') {
      this.setState({
        rent: value,
      })
    } else if (id === 'transport') {
      this.setState({
        transport: value,
      })
    } else if (id === 'food') {
      this.setState({
        food: value,
      })
    } else if (id === 'entertainment') {
      this.setState({
        entertainment: value,
      })
    } else if (id === 'utilities') {
      this.setState({
        utilities: value,
      })
    } else if (id === 'other') {
      this.setState({
        other: value,
      })
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

    const { budget_id } = this.props.params;
    const { createTotal, history } = this.props;
    const total = { ...this.state };
    createTotal(total, budget_id).then(() => {
      history.push("/budgets");
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
        <form onSubmit={this.handleSubmit}>
          <input 
            type="date"
            onChange={this.handleChange}
            className="user-input"
            id="date"
            value='0'
            placeholder="Enter the date for this entry" 
            required
          />
          <input 
            type="number"
            onChange={this.handleChange}
            className="user-input"
            id="rent"
            value='0'
            placeholder="Enter today's rent payment (if any)" 
            required
          />
          <input 
            type="number"
            onChange={this.handleChange}
            className="user-input"
            id="transport"
            value='0'
            placeholder="Enter today's transport total" 
            required
          />
          <input 
            type="number"
            onChange={this.handleChange}
            className="user-input"
            id="food"
            value='0'
            placeholder="Enter today's food total" 
            required
          />
          <input 
            type="number"
            onChange={this.handleChange}
            className="user-input"
            id="entertainment"
            value='0'
            placeholder="Enter today's entertainment total" 
            required
          />
          <input 
            type="number"
            onChange={this.handleChange}
            className="user-input"
            id="utilities"
            value='0'
            placeholder="Enter today's utilities total" 
            required
          />
          <input 
            type="number"
            onChange={this.handleChange}
            className="user-input"
            id="other"
            value='0'
            placeholder="Enter today's other expenses" 
            required
          />
          <button type="submit">Submit Daily Expenditure</button>
        </form>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  createTotal: (total, budget_id) => dispatch(createTotal(total, budget_id)),
})

NewTotal.propTypes = {
  createTotal: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(NewTotal);
