import React from "react";
import { Select } from "./styles";

const Index = (props) => {
  console.log(props.options);
  return (
    <Select>
      {props.options.map((value) => (
        <option>{value}</option>
      ))}
    </Select>
  );
};

export default Index;
