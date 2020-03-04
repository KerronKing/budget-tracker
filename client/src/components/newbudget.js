import React from 'react';

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

  handleChange() {

  }

  handleSubmit() {

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

export default NewBudget;