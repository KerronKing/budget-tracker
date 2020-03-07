import React from 'react';
import axios from 'axios';

class BudgetTotals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget_totals: [],
    }
  }
  
  componentDidMount() {
    let token = "Bearer " + localStorage.getItem("jwt");
    const { budget_id } = this.props.match.params;
    axios({method: 'get', url: `http://localhost:3001/api/v1/budgets/${budget_id}/budget_totals`, headers: {'Authorization': token }})
      .then(response => {
        this.setState({ budget_totals: response.data });
      })
  }

  render() {
    const { budget_totals } = this.state;
    return (
      <div>
        <h1>Budgets Data</h1>
        {budget_totals.map((budget_total) => (
          <div>
            <p>{budget_total.date}</p>
            <p>{budget_total.rent}</p>
            <p>{budget_total.transport}</p>
            <p>{budget_total.food}</p>
            <p>{budget_total.entertainment}</p>
            <p>{budget_total.utilities}</p>
            <p>{budget_total.other}</p>
          </div> 
        ))}
      </div>
    )
  }
};

export default BudgetTotals;
