import React from "react";

const Balance = ({ transactions }) => {
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => acc + item, 0);
  return (
    <div>
      <h4>Balance</h4>
      <h1>₹{total}</h1>
    </div>
  );
};

export default Balance;
