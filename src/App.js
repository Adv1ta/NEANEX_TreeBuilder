import React, { Component } from "react";
import Inputs from "./components/inputs.jsx";
import "./App.css";

let newKey = 0;
const initState = {
  inputs: [
    {
      id: 0,
      annotation1: "",
      lifecycle1: "",
      annotation2: "",
      lifecycle2: "",
      relation: "",
    },
  ],
};
/*const queryResult = "Query: ";*/

class App extends Component {
  state = initState;

  handleChange = (inputValue, rowIndex, fieldName) => {
    const inputs = [...this.state.inputs];
    inputs[rowIndex][fieldName] = inputValue.value;
    this.setState({ inputs });
  };

  handleAdd = () => {
    console.log("Added an input");
    newKey++;
    const newInput = {
      id: newKey,
      annotation1: "",
      lifecycle1: "",
      annotation2: "",
      lifecycle2: "",
      relation: "",
    };
    const inputs = [...this.state.inputs].concat(newInput);
    this.setState({ inputs });
  };

  handleDelete = (inputId) => {
    console.log(inputId);
    const inputs = this.state.inputs.filter((c) => c.id !== inputId);
    this.setState({ inputs });
  };

  handleReset = () => {
    this.setState(initState);
  };

  render() {
    console.log(this.state.inputs);
    return (
      <body className="App">
        <h1 className="App-header">QUERY BUILDER</h1>
        <main className="Main">
          <Inputs
            inputs={this.state.inputs}
            onAdd={this.handleAdd}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onChange={this.handleChange}
          />
        </main>
        <div className="App-footer">
          Query: {this.state.inputs[0].annotation1}
        </div>
      </body>
    );
  }
}

export default App;
