import styled from "styled-components";

export const TransactionCardWrapper = styled.div`
  /* border: 1px solid purple; */
  padding: 10px 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 15px #00000008;
  border-radius: 20px;
  h3 {
    color: #373737;
    font-size: 20px;
    font-weight: normal;
  }
  .date-container {
    /* padding: 5px 0; */
    margin: 5px 0;

    .date {
      color: #cccccc;
    }
  }
  .selectContainer {
    display: flex;
    justify-content: space-between;
    select {
      outline: none;
      border: none;
      background-color: #ffff;
      color: #808080;
      &::appearance {
        color: #808080;
      }
    }
  }
`;

export const TransactionHistory = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  padding: 15px 0;

  .itemsContainer {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
  }
  .sec2 {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    .text {
      color: #515151;
      font-weight: normal;
      font-size: 20px;
      padding: 5px 0;
    }
    .location {
      letter-spacing: 0.72px;
      color: #999999;
      font-size: 14px;
      font-weight: normal;
      small {
        margin-left: 10px;
        color: #999999;
      }
    }
  }
  .amount {
    color: #373737;
    font-weight: bold;
    font-size: 25px;
    small {
      color: #999999;
      font-size: 14px;
      margin-left: 3px;
    }
  }
  .greencol {
    color: #39b54a;
  }
`;
