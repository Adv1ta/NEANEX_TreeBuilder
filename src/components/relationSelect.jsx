import React, { Component } from "react";

import Select from "react-select";
import { relationOptions } from "./data";

class OnSelectInput extends Component {
  render() {
    return (
      <Select
        placeholder="Relation"
        options={relationOptions}
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
