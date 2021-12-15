import React from "react";
import { InputStyle, Container } from "./styled";

const Index = (props) => {
  return (
    <Container>
      <label for="html">{props.label}</label>
      <InputStyle
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </Container>
  );
};

export default Index;
