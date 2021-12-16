import React from "react";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { AiFillCreditCard, AiFillHome } from "react-icons/ai";
import { DrawerWrapper, ListStyle } from "./styles";
import { Link, useLocation } from "react-router-dom";

const Index = () => {
  let path = useLocation().pathname;

  return (
    <DrawerWrapper>
      <section>
        <ListStyle active={path === "/dashboard"}>
          <Link to={"/dashboard"}>
            <AiFillHome height={"50em"} width={"50em"} />
            <span>Dashboard</span>
          </Link>
        </ListStyle>
        <ListStyle>
          <Link to={""}>
            <AiFillCreditCard height={"50em"} width={"50em"} />
            <span>My Cards</span>
          </Link>
        </ListStyle>
      </section>

      <div>
        <ListStyle>
          <Link to={""}>
            <RiLogoutBoxRFill className="logoutSvg" />
            <span>Logout</span>
          </Link>
        </ListStyle>
      </div>
    </DrawerWrapper>
  );
};

export default Index;
