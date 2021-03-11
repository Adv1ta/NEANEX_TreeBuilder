import React, { Component } from "react";

import Select from "react-select";
import { lifeCycleOptions } from "./data";

class OnSelectInput extends Component {
  render() {
    return (
      <Select
        placeholder="Lifecycle"
        options={lifeCycleOptions}
        className="basic-single"
        classNamePrefix="select"
        onChange={(value) =>
          this.props.onChange(value, this.props.rowIndex, this.props.fieldName)
        }
      />
    );
  }
}

export default OnSelectInput;
