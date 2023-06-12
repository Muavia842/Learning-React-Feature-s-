import React, { Component } from "react";
import Person from "../../Person/person";
import "../../App.css";
class lifescycle extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  incrementHandler = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  decrementHandler = () => {
    this.setState((state) => ({ count: state.count - 1 }));
  };

  // jesy hum ny koi button banaya  to componentdidmount work kry ga
  componentDidMount() {
    console.log("componentDidMount is run");
  }

  // jb hum button py click krin gein to mtlb hum update kr rahin hon gein
  // to componentdidUpdate run hoga
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  //  jesy hum koi chz  delete krin gein to componentwillunmount run
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div className="App">
        <Person name="muavia" age="21" />
        <h1> you'r number is {this.state.count}</h1>
        <button onClick={this.incrementHandler}>increment</button>
        <button onClick={this.decrementHandler}>decrement</button>
      </div>
    );
  }
}
export default lifescycle;
