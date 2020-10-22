import React from "react";

import Select from "react-select";
import { lifeCycleOptions } from "./data";

export default () => (
  <Select
    placeholder="Lifecycle"
    options={lifeCycleOptions}
    className="basic-single"
    classNamePrefix="select"
  />
);
