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
  output: "Result",
};

class App extends Component {
  state = initState;

  handleReset = () => {
    console.log(initState);
    this.setState(initState);
  };

  handleChange = (inputValue, rowIndex, fieldName) => {
    const inputs = [...this.state.inputs];
    inputs[rowIndex][fieldName] = inputValue.value;
    console.log(initState);
    this.setState({ inputs });
    console.log(initState);
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

  handleResult = () => {
    const inputs = [...this.state.inputs];

    let objectQ = "";
    let relationQ = "";

    //Object query is built here
    for (let i = 0; i < inputs.length; i++) {
      console.log(inputs[i].annotation1);
      if (i >= 1) {
        objectQ += " OR ";
      }
      objectQ +=
        "((po {annotation: '" +
        inputs[i].annotation1 +
        "',lifeCycleStage: '" +
        inputs[i].lifecycle1 +
        "'})-[:" +
        inputs[i].relation +
        "]->(:PhysicalObject{annotation:'" +
        inputs[i].annotation2 +
        "',lifeCycleStage: '";
    }

    const output =
      '"MATCH (po:PhysicalObject{isDeleted:False}) WHERE (' +
      objectQ +
      ')OPTIONAL MATCH (po)-[]->(ls:LifeCycleStage) OPTIONAL MATCH (po)-[]->(a:Annotation) RETURN { id: po.id,  externalId: po.externalId, name: po.name, type: po.type, code: po.code, annotation: a.viewValue, lifecyclestage: ls.viewValue}"' +
      relationQ;

    this.setState({ output });
  };

  render() {
    return (
      <body className="App">
        <h1 className="App-header">QUERY BUILDER</h1>
        <main className="Main">
          <Inputs
            onChange={this.handleChange}
            inputs={this.state.inputs}
            onAdd={this.handleAdd}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
        <div className="App-footer">
          <button
            onClick={this.handleResult}
            className="btn btn-warning btn-lg"
          >
            >
          </button>
          <div>{this.state.output}</div>
        </div>
      </body>
    );
  }
}

export default App;
