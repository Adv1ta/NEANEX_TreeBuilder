import React from "react";

import Select from "react-select";
import { relationOptions } from "./data";

export default () => (
  <Select
    placeholder="Relation"
    options={relationOptions}
    className="basic-single"
    classNamePrefix="select"
  />
);
