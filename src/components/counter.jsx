import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <span className="badge badge-primary m-2">{this.FormatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }
  FormatCount() {
    const { count } = this.state;
    // return this.state.count === 0 ? "Zero" : this.state.count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
