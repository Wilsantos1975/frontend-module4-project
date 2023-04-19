import axios from "axios";
import { v4 } from "uuid";
import { useState } from "react";

const API = process.env.REACT_APP_API_URL;

function TransactionNew() {
  const [error, setError] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
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
      axios.post(`${API}/transactions`, newTransaction).then((res) => {
        console.log(res);
        console.log(res.data);
      });
    } catch {
      setError(true);
    }
  };

  const changeHandler = (e) => {
    setNewTransaction({ ...newTransaction, [e.target.name]: e.target.value });
  };


  return (
    <div>
      <form onSubmit={submitHandler}>
      <label htmlFor="date">Date</label>
        <input
          type="text"
          id="date"
          name="date"
          value={newTransaction.date}
          onChange={changeHandler}
        />
        <br></br>
        <label htmlFor="item_name">Item Name</label>
        <input
          type="text"
          id="item_name"
          name="item_name"
          value={newTransaction.item_name}
          onChange={changeHandler}
        />
        <br></br>
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={newTransaction.amount}
          onChange={changeHandler}
        />
        <br></br>
        <label htmlFor="from">from</label>
        <input
          type="text"
          id="from"
          name="from"
          value={newTransaction.from}
          onChange={changeHandler}
        />
        <br></br>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          value={newTransaction.category}
          onChange={changeHandler}
        />
        <br></br>
        <button type="submit">Submit</button> 
      </form>
    </div>
  );
}

export default TransactionNew;
