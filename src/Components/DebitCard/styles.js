import styled from "styled-components";

export const Card = styled.div`
  width: 330px;
  height: 138px;
  background: #007fff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 20px #00000014;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  section {
    display: flex;
    flex-direction: column;
    .amount {
      font-size: 40px;
      font-weight: bold;
      color: #fff;
      margin-top: 10px;
    }
    .text {
      color: #fff;
      font-size: 14px;
    }
   
  }

  div {
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
`;
