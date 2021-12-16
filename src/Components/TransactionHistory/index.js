import React from "react";
import foods from "../../Assets/Foods.png";
import av from "../../Assets/av.png";
import walmart from "../../Assets/walmart.png";
import { TransactionHistory, TransactionCardWrapper } from "./styles";

const Index = () => {
  //   const data = [
  //     {
  //       img: `${foods}`,
  //       title: "",
  //       loc: "",
  //       cardnum: "",
  //     },
  //     {
  //       img: `${walmart}`,
  //       title: "”Walmart” store (Main Str. 13)",
  //       loc: "Groceries & food",
  //       cardnum: "Card: ** 3478",
  //     },
  //     {
  //       img: `${av}`,
  //       title: "Transfer from Alexey",
  //       cardnum: "Card: ** 3478",
  //     },
  //   ];

  return (
    <TransactionCardWrapper>
      <section className="selectContainer">
        <h3>Transaction history</h3>
        <select>
          <option>All categories</option>
        </select>
      </section>
      <section>
        <div className="date-container">
          <span className="date">December 31</span>
        </div>
        <TransactionHistory>
          <div className="itemsContainer">
            <img src={foods} alt="" />
            <div className="sec2">
              <span className="text">”Food & Drinks” restaurant</span>
              <span className="location">
                Cafe and restaurants <small>Card: ** 3478</small>
              </span>
            </div>
          </div>
          <span className="amount">
            - 480 <small>UAH</small>
          </span>
        </TransactionHistory>
        <TransactionHistory>
          <div className="itemsContainer">
            <img src={walmart} alt="" />
            <div className="sec2">
              <span className="text">”Walmart” store (Main Str. 13)</span>
              <span className="location">
                Groceries & food <small>Card: ** 3478</small>
              </span>
            </div>
          </div>
          <span className="amount">
            - 80 <small>UAH</small>
          </span>
        </TransactionHistory>
        <TransactionHistory>
          <div className="itemsContainer">
            <img src={av} alt="" />
            <div className="sec2">
              <span className="text">Transfer from Alexey</span>
              <span className="location">
                Transactions<small>Card: ** 3478</small>
              </span>
            </div>
          </div>
          <span className="amount greencol">
            6000 <small>UAH</small>
          </span>
        </TransactionHistory>
      </section>
    </TransactionCardWrapper>
  );
};

export default Index;
