import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        <span>{this.FormatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }
  FormatCount() {
    const { count } = this.state;
    // return this.state.count === 0 ? "Zero" : this.state.count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
