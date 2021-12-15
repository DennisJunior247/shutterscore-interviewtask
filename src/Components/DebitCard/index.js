import React from "react";
import { Card } from "./styles";
import Button from "../Button";

const Index = () => {
  return (
    <Card>
      <section>
        <span className="text">Total Available balance</span>
        <span className="amount">$25,958,485</span>
      </section>
      <div>
        <Button
          width={"45%"}
          bgColor={"#fff"}
          color={"#00217B"}
          text={"Fund wallet"}
          padding={"10px"}
        />
        <Button
          width={"45%"}
          bgColor={"#007FFF"}
          color={"#fff"}
          text={"Get Started"}
          padding={"10px"}
          border={"0.3px solid #fff"}
        />
      </div>
    </Card>
  );
};

export default Index;
