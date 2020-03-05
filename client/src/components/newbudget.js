import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import createBudget from '../actions/index';

class NewBudget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      start_date: '',
      end_date: '',
      income: 0,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object,
  }

  handleChange(e) {
    const { value, id } = e.target;
    if (id === 'start-date') {
      this.setState({
        start_date: value,
      })
    } else if (id === 'end-date') {
      this.setState({
        end_date: value,
      })
    } else {
      this.setState({
        income: value,
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const startDate = document.getElementById('start-date');
    const endDate = document.getElementById('end-date');
    const incomeField = document.getElementById('income');

    const { createBudget } = this.props;
    const budget = { ...this.state };
    createBudget(budget).then(() => {
      this.context.router.push('/');
    });

    this.setState({
      start_date: '',
      end_date: '',
      income: 0,
    });

    startDate.value = '';
    endDate.value = '';
    incomeField.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="date"
            onChange={this.handleChange}
            className="user-input"
            id="start-date"
            placeholder="Enter your starting budget date" 
            required
          />
          <input 
            type="date"
            onChange={this.handleChange}
            className="user-input"
            id="end-date"
            placeholder="Enter your ending budget date" 
            required
          />
          <input 
            type="number"
            onChange={this.handleChange}
            className="user-input"
            id="income"
            value='0'
            placeholder="Enter your salary/income for this period" 
            required
          />
          <button type="submit">Create Budget</button>
        </form>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  createBudget: budget => dispatch(createBudget(budget)),
})

NewBudget.propTypes = {
  createBudget: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(NewBudget);