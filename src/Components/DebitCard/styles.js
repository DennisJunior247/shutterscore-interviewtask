import styled from "styled-components";


export const Card = styled.div`
  width: 300px;
  height: 128px;
  border-radius: 30px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background: transparent linear-gradient(0deg, #2c2c2c 0%, #373737 100%);
  box-shadow: 0px 15px 15px #0000000d;
  .amount {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    small {
      color: #cccccc;
      font-size: 15px;
    }
    .amount-in-card {
      font-size: 25px;
      color: #ffff;
    }
  }
  .card-number {
    margin: 20px 0;
    .sub-cardNum {
      color: #979797;
    }
  }
  .iconWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .cvv {
      color: #979797;
    }
    svg {
      width: 35px;
      height: 35px;
      fill: #979797;
    }
  }
`;
