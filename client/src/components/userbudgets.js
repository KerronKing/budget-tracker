import React from 'react';
import { connect } from 'react-redux';
import getBudgets from '../actions/index';

class UserBudgets extends React.Component {
  componentWillMount() {
    const { getBudgets } = this.props;
    getBudgets();
  }

  render() {
    return (
      <div>
        User show page
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  getBudgets: () => dispatch(getBudgets),
});

export default connect(null, mapDispatchToProps)(UserBudgets);
