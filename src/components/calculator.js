import "../style.css";

import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Question: " ",
      Result: ``,
    };
    // console.log(16 ** (1 / 2));
  }
  // For division
  divide = () => {
    let value = "/";
    this.setState({
      Question: this.state.Question + value,
    });
  };
  // for multiplication
  multiplication = () => {
    let value = "*";
    this.setState({
      Question: this.state.Question + value,
    });
  };
  // for addition
  addition = () => {
    let value = "+";
    this.setState({
      Question: this.state.Question + value,
    });
  };
  // for subtraction
  subtraction = () => {
    let value = "-";
    this.setState({
      Question: this.state.Question + value,
    });
  };
  // For left bracket
  leftBracket = () => {
    let value = "(";
    this.setState({
      Question: this.state.Question + value,
    });
  };
  // for right bracket
  rightBracket = () => {
    let value = ")";
    this.setState({
      Question: this.state.Question + value,
    });
  };
  // for square root
  root = () => {
    if (this.state.Question) {
      let value = "**(1/2)";
      this.setState({
        Question: this.state.Question + value,
      });
    } else {
      alert("Input value before the operator");
    }
  };
  // for exponential 2
  exponential = () => {
    let value = "**2";
    this.setState({
      Question: this.state.Question + value,
    });
  };
  // for dot(.)
  dot = () => {
    let value = ".";
    this.setState({
      Question: this.state.Question + value,
    });
  };
  // for reset
  reset = () => {
    let value = ".";
    this.setState({
      Question: "",
      Result: ``,
    });
  };
  // Working on numbers
  zero = () => {
    let value = "0";
    this.setState({
      Question: this.state.Question + value,
    });
  };
  one = () => {
    let value = "1";
    this.setState({
      Question: this.state.Question + value,
    });
  };
  two = () => {
    let value = "2";
    this.setState({
      Question: this.state.Question + value,
    });
  };
  three = () => {
    let value = "3";
    this.setState({
      Question: this.state.Question + value,
    });
  };
  four = () => {
    let value = "4";
    this.setState({
      Question: this.state.Question + value,
    });
  };
  five = () => {
    let value = "5";
    this.setState({
      Question: this.state.Question + value,
    });
  };
  six = () => {
    let value = "6";
    this.setState({
      Question: this.state.Question + value,
    });
  };
  seven = () => {
    let value = "7";
    this.setState({
      Question: this.state.Question + value,
    });
  };
  eight = () => {
    let value = "8";
    this.setState({
      Question: this.state.Question + value,
    });
  };
  nine = () => {
    let value = "9";
    this.setState({
      Question: this.state.Question + value,
    });
  };
  // For equality
  equality = () => {
    if (this.state.Question != 0) {
      let calculate = eval(this.state.Question);
      console.log(typeof calculate, calculate);
      this.setState({
        Result: `= ${calculate}`,
      });
    } else {
      this.setState({
        Result: ` 0`,
      });
    }
  };
  // For delete
  delete = () => {
    let spread = [...this.state.Question];
    spread.pop();
    console.log(spread);
    let newState = "";
    for (let i = 0; i < spread.length; i++) {
      newState += spread[i];
      console.log(newState);
    }
    this.setState({
      Question: newState,
    });
  };

  render() {
    return (
      <section className="main-container">
        <h2>React-Calculator</h2>
        <div className="container">
          <div className="answer">
            <p className="question">{this.state.Question}</p>
            <p className="result">{this.state.Result}</p>
          </div>
          <div className="buttons">
            <span className="button clear-all first-row" onClick={this.reset}>
              AC
            </span>
            <span
              className="button modulo first-row"
              onClick={this.leftBracket}
            >
              (
            </span>
            <span
              className="button delete first-row"
              onClick={this.rightBracket}
            >
              )
            </span>
            <span
              className="button square first-row"
              onClick={this.exponential}
            >
              x<sup>2</sup>
            </span>
            <span className="button inverse del" onClick={this.delete}>
              del.
            </span>
            <span className="button square-root del" onClick={this.root}>
              &radic;
            </span>
            <span className="button operator" onClick={this.divide}>
              /
            </span>
            <span className="button operator" onClick={this.multiplication}>
              *
            </span>
            <span className="button number" onClick={this.seven}>
              7
            </span>
            <span className="button number" onClick={this.eight}>
              8
            </span>
            <span className="button number" onClick={this.nine}>
              9
            </span>
            <span className="button operator" onClick={this.subtraction}>
              -
            </span>
            <span className="button number" onClick={this.four}>
              4
            </span>
            <span className="button number" onClick={this.five}>
              5
            </span>
            <span className="button number" onClick={this.six}>
              6
            </span>
            <span className="button operator biggi" onClick={this.addition}>
              +
            </span>
            <span className="button number" onClick={this.one}>
              1
            </span>
            <span className="button number" onClick={this.two}>
              2
            </span>
            <span className="button number" onClick={this.three}>
              3
            </span>
            <span className="button number zero" onClick={this.zero}>
              0
            </span>
            <span className="button number point" onClick={this.dot}>
              .
            </span>
            <span className="button operator equals" onClick={this.equality}>
              =
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
