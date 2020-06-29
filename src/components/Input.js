import React from 'react';
import Proptypes from 'prop-types';

class Dropper extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { graphToggle, id } = this.props;
    graphToggle(id);
  }

  render() {
    return (
      <input
        onClick={this.handleClick}
        type="button"
        value="+"
      />
    );
  }
}

Dropper.propTypes = {
  graphToggle: Proptypes.func.isRequired,
  id: Proptypes.number.isRequired,
};

export default Dropper;
