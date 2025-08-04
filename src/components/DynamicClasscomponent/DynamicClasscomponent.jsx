import React, { Component } from 'react';
import './DynamicClasscomponent.css';
class DynamicClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  toggleActive = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    const { isActive } = this.state;
    return (
      <div className={`box ${isActive ? 'active' : 'inactive'}`}>
        <p>The box is {isActive ? 'Active' : 'Inactive'}</p>
        <button onClick={this.toggleActive}>
          {isActive ? 'Deactivate' : 'Activate'}
        </button>
      </div>
    );
  }
}

export default DynamicClassComponent;
