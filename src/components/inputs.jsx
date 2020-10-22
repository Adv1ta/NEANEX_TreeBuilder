import React, { Component } from "react";
import Input from "./input.jsx";

class Inputs extends Component {
  state = {};
  render() {
    const { inputs, onAdd, onDelete, onReset, onChange } = this.props;

    return (
      <div>
        {inputs.map((input, index) => (
          <Input
            key={input.id}
            input={input}
            rowIndex={index}
            onDelete={onDelete}
            onChange={onChange}
          />
        ))}
        <button onClick={onAdd} className="btn btn-warning btn-lg">
          +
        </button>
        <button onClick={onReset} className="btn btn-danger btn-lg m-2">
          Reset
        </button>
      </div>
    );
  }
}

export default Inputs;
