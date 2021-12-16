import React from "react";
import { Card } from "./styles";
import { SiMastercard } from "react-icons/si";
import { CgPen } from "react-icons/cg";

const Index = (props) => {
  return (
    <Card>
      <section className="amount">
        <span className="amount-in-card">
          {props.amount} <small>{props.currency}</small>
        </span>
        <CgPen />
      </section>
      <section className="card-number">
        <span className="sub-cardNum">{props.cardNum}</span>
      </section>
      <section className="iconWrapper">
        <span className="cvv">{props.cvv}</span>
        <SiMastercard />
      </section>
    </Card>
  );
};

export default Index;
