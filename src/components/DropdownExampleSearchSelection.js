import React from "react";
import { Dropdown } from "semantic-ui-react";

const countryOptions = [
  { key: "12", value: "12", text: "Shutdown after 12" },
  { key: "24", value: "24", text: "Shutdown after 24" },
];

const DropdownExampleSearchSelection = () => (
  <Dropdown
    placeholder="Time"
    fluid
    multiple
    search
    selection
    options={countryOptions}
  />
);

export default DropdownExampleSearchSelection;
