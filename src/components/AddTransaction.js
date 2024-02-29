import React, { useState } from "react";

const AddTransaction = ({ id }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const onSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: id,
      text: text,
      amount: amount,
    };
  };
  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
            type="text"
            placeholder="Enter Text"
          />
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            type="number"
            placeholder="Enter Amount"
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
