import React, { Component } from "react";
import LifeCycleSelect from "./lifeCycleSelect.jsx";
import AnnotationSelect from "./annotationSelect.jsx";
import RelationSelect from "./relationSelect.jsx";

class Input extends Component {
  render() {
    const { onChange, rowIndex } = this.props;
    return (
      <div className="InputBox">
        <div className="Input">
          <AnnotationSelect
            onChange={onChange}
            rowIndex={rowIndex}
            fieldName="annotation1"
          />
        </div>
        <div className="Input">
          <LifeCycleSelect />
        </div>
        <div className="Input">
          <RelationSelect />
        </div>
        <div className="Input">
          <AnnotationSelect onChange={onChange} rowIndex={rowIndex} />
        </div>
        <div className="Input">
          <LifeCycleSelect />
        </div>
        <button
          onClick={() => this.props.onDelete(this.props.input.id)}
          className="btn btn-danger btn-sm m-2"
        >
          X
        </button>
        <div></div>
      </div>
    );
  }
}

export default Input;
