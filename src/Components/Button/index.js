import React from "react";
import { BtnContainer } from "./styles";

const Index = (props) => {
  return (
    <BtnContainer color={props.color} icon={props.icon} bgColor={props.bgColor}>
      {props.text}
    </BtnContainer>
  );
};

export default Index;
