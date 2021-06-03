import React, { Component } from "react";

class Contact extends Component {
  state = {
    count: 0,
  };

  doIncrement = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  doDecrement = () => {
    return this.setState((prev) => ({
      count: prev.count - 1,
    }));
  };

  doReset = () => {
    return this.setState({ count: 0 });
  };

  render() {
    return (
      <section className="contact-page">
        <h1>Contact Page</h1>
        <div className="other">
          <h4>Count: {this.state.count}</h4>
          <button onClick={this.doIncrement}>Increment</button>
          <button onClick={this.doDecrement}>Decrement</button>
          <button onClick={this.doReset}>Reset</button>
        </div>
      </section>
    );
  }
}

export default Contact;
