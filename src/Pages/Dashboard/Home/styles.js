import styled from "styled-components";

export const HomeStyles = styled.div`
  width: 100%;
  border: 1px solid red;
`;

export const Container1 = styled.div`
  padding-bottom: 2rem;

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
  justify-content: space-between;
  /* flex-wrap: wrap; */
  width: 100%;
  border: 1px solid green;
  overflow-x: scroll;
  scroll-behavior: smooth;
`;
