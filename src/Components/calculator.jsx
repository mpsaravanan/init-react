import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      answer: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      operands: ["+", "-", "*", "/", "%", "="],
      prevvalue: 0,
      currentvalue: 0,
      operand1: ""
    };
  }

  render() {
    return (
      <div>
        <div className="mr-4 mt-2 p-3">{this.getNumbers()}</div>
        <div className="mr-4 mt-2 p-3">{this.getOperands()}</div>
        <div className="mr-4 mt-2 p-3">
          <input type="text" key="ans" value={this.state.answer} readOnly />
        </div>
      </div>
    );
  }

  setAnswer = val => {
    if (this.state.prevvalue === 0 && this.state.operand1 !== "") {
      this.setState({ answer: val, prevvalue: val, operand1: "" });
    } else {
      this.setState({ answer: val, currentvalue: val });
    }
  };

  addition = (first, second) => {
    return first + second;
  };

  subtraction = (first, second) => {
    return first - second;
  };

  division = (first, second) => {
    return first / second;
  };

  modulous = (first, second) => {
    return first % second;
  };

  multiplication = (first, second) => {
    return first * second;
  };

  setOperand = val => {
    this.setState({
      operand1: val
    });
    if (val === "=") {
      let ans = 0;
      if (this.state.operand1 === "+") {
        ans = this.addition(this.state.prevvalue, this.state.currentvalue);
      } else if (this.state.operand1 === "-") {
        ans = this.subtraction(this.state.prevvalue, this.state.currentvalue);
      } else if (this.state.operand1 === "*") {
        ans = this.multiplication(
          this.state.prevvalue,
          this.state.currentvalue
        );
      } else if (this.state.operand1 === "/") {
        ans = this.division(this.state.prevvalue, this.state.currentvalue);
      } else if (this.state.operand1 === "%") {
        ans = this.modulous(this.state.prevvalue, this.state.currentvalue);
      } else {
        ans = 0;
      }
      this.setState({ answer: ans, prevvalue: 0, currentvalue: 0 });
    }
  };

  getNumbers() {
    return (
      <div>
        {this.state.numbers.map(num => (
          <button
            className="btn btn-secondary mr-4 mt-2"
            value={num}
            onClick={() => {
              this.setAnswer(num);
            }}
            key={num}
          >
            {num}
          </button>
        ))}
      </div>
    );
  }

  getOperands() {
    return (
      <div>
        {this.state.operands.map(operandval => (
          <button
            className="btn btn-secondary mr-4 mt-2"
            key={operandval}
            onClick={() => {
              this.setOperand(operandval);
            }}
          >
            {operandval}
          </button>
        ))}
      </div>
    );
  }
}

export default Calculator;
