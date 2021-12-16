import React from "react";
import Layout from "../../../Components/Layout";
import { HomeStyles, Container1, DashboardCards, Container3 } from "./styles";
import Card from "../../../Components/Card";
import DCard from "../../../Components/DebitCard";
import { SiMastercard, SiVisa } from "react-icons/si";
import TransactionHistory from "../../../Components/TransactionHistory";

const Index = () => {
  return (
    <Layout>
      <HomeStyles>
        <Container1>
          <h2 className="dashboard-title">Dashboard</h2>
          <p className="dashboard-subTitle">
            Sed ut perspiciatis unde omnis iste natus error sit
          </p>
        </Container1>
        <DashboardCards>
          <Card />
          <DCard
            amount={"150 000"}
            currency={"UAH"}
            icon={<SiMastercard />}
            cardNum={"2132 8732 2347 3478"}
            cvv={"07/20"}
          />
          <DCard
            amount={"150 000"}
            currency={"UAH"}
            icon={<SiVisa />}
            cardNum={"2132 8732 2347 3478"}
            cvv={"07/20"}
          />
          <DCard
            amount={"150 000"}
            currency={"UAH"}
            icon={<SiMastercard />}
            cardNum={"2132 8732 2347 3478"}
            cvv={"07/20"}
          />
        </DashboardCards>
        <Container3>
          <TransactionHistory />
        </Container3>
      </HomeStyles>
    </Layout>
  );
};

export default Index;
