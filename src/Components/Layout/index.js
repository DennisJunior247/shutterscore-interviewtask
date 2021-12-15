import React from "react";
import { LayoutStyle, Main } from "./styles";
import Drawer from "../Drawer";
import Menu from "../Header";

const Index = ({ children }) => {
  return (
    <>
      <LayoutStyle>
        <Menu />
        <Drawer />
        <Main>
          <div>{children}</div>
        </Main>
      </LayoutStyle>
    </>
  );
};

export default Index;
