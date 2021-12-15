import React from "react";
import Layout from "../../Components/Layout";
import { DashboardWrapper, DashboardCards } from "./styles";
import Card from "../../Components/Card";

const Index = () => {
  return (
    <Layout>
      <DashboardWrapper>
        <div className="name">
          <h2 className="dashboard-title">Dashboard</h2>
          <p className="dashboard-subTitle">
            Sed ut perspiciatis unde omnis iste natus error sit
          </p>
        </div>
        <DashboardCards>
          <Card />
        </DashboardCards>
      </DashboardWrapper>
    </Layout>
  );
};

export default Index;
