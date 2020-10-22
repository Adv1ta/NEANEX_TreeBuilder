import React, { Component } from "react";

import Select from "react-select";
import { neanexOptions, semOptions } from "./data";
const groupedOptions = [
  {
    label: "Neanex",
    options: neanexOptions,
  },
  {
    label: "SEm",
    options: semOptions,
  },
];

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center",
};

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

class OnSelectInput extends Component {
  state = {
    inputValue: "",
  };

  render() {
    return (
      <Select
        placeholder="Annotation"
        options={groupedOptions}
        formatGroupLabel={formatGroupLabel}
        onChange={(value) =>
          this.props.onChange(value, this.props.rowIndex, this.props.fieldName)
        }
      />
    );
  }
}

export default OnSelectInput;
