import React from "react";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { AiOutlineCreditCard, AiOutlineHome } from "react-icons/ai";
import { DrawerWrapper } from "./styles";

const Index = () => {
  return (
    <DrawerWrapper>
      <section>
        <li>
          <AiOutlineHome height={"50em"} width={"50em"} />
          <span>Dashboard</span>
        </li>
        <li>
          <AiOutlineCreditCard  height={"50em"} width={"50em"} />
          <span>My Cards</span>
        </li>
      </section>

      <div>
        <li>
          <RiLogoutBoxRFill className="logoutSvg"/>
          <span>Logout</span>
        </li>
      </div>
    </DrawerWrapper>
  );
};

export default Index;
