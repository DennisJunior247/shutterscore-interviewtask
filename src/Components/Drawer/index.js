import React from "react";
import { FiLogOut } from "react-icons/fi";
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
          <AiOutlineCreditCard height={"50em"} width={"50em"} />
          <span>My Cards</span>
        </li>
      </section>

      <div>
        <li>
          <FiLogOut />
          <span>Logout</span>
        </li>
      </div>
    </DrawerWrapper>
  );
};

export default Index;
