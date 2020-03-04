import React from 'react';

class NewTotal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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

export default NewTotal;
