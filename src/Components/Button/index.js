import React from "react";
import { BtnContainer } from "./styles";

const Index = (props) => {
  return (
    <BtnContainer
      padding={props.padding}
      width={props.width}
      color={props.color}
      icon={props.icon}
      bgColor={props.bgColor}
      border={props.border}
    >
      {props.text}
    </BtnContainer>
  );
};

export default Index;
