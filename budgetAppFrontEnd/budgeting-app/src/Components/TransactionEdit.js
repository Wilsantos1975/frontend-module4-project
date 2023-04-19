import axios from "axios";
import { v4 } from "uuid";
import { useState } from "react";

const API = process.env.REACT_APP_API_URL;

function TransactionEdit({ transaction }) {
  const [error, setError] = useState(false);
  const [transactionEdit, setTransactionEdit] = useState({
    id: v4(),
    item_name: "",
    amount: "",
    date: "",
    category: "",
    from: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      axios
        .put(`${API}/transactions/${transaction.id}`, transactionEdit)
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
    } catch {
      setError(true);
    }
  };

  const changeHandler = (e) => {
    setTransactionEdit({ ...transactionEdit, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="date">Date</label>
        <input
          type="text"
          id="date"
          name="date"
          value={transactionEdit.date}
          onChange={changeHandler}
        />
        <br></br>
        <label htmlFor="item_name">Item Name</label>
        <input
          type="text"
          id="item_name"
          name="item_name"
          value={transactionEdit.item_name}
          onChange={changeHandler}
        />
        <br></br>
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={transactionEdit.amount}
          onChange={changeHandler}
        />
        <br></br>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          value={transactionEdit.category}
          onChange={changeHandler}
        />
        <br></br>
        <label htmlFor="from">From</label>
        <input
          type="text"
          id="from"
          name="from"
          value={transactionEdit.from}
          onChange={changeHandler}
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TransactionEdit;
