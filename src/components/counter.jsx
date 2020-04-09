import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: [],
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = (product) => {
    // add an arrow function instead of constructor
    // console.log("Increment clicked", this);
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  renderTags() {
    // method
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.FormatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()} */}
        <button
          onClick={this.props.onDelete}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  FormatCount() {
    const { value } = this.state;
    // return this.state.value === 0 ? "Zero" : this.state.value;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
