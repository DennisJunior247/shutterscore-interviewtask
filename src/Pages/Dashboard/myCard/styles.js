import styled from "styled-components";

export const HomeStyles = styled.div`
  width: 100%;
  /* border: 1px solid yellow; */
  height: 100%;
`;

export const Container1 = styled.div`
  padding-bottom: 1rem;

  .dashboard-title {
    color: #000000;
  }
  .dashboard-subTitle {
    color: #525252;
  }
`;

export const DashboardCards = styled.div`
  display: flex;
  column-gap: 20px;
  justify-content: flex-start;
  /* flex-wrap: wrap; */
  width: 100%;
  /* border: 1px solid green; */
  /* overflow-x: scroll; */
  padding-top: 1rem;
`;

export const Container3 = styled.div`
  padding-top: 3rem;
`;
