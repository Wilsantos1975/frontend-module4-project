import axios from "axios";

import { useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function TransactionEdit({ transactionsArray }) {


  const { id } = useParams();
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [transactionEdit, setTransactionEdit] = useState({
    id: '',
    item_name: "",
    amount: "",
    date: "",
    category: "",
    from: "",
  });

const selectedTransaction = useMemo(() => {
  const transaction = transactionsArray.find((transaction) => transaction.id === id);
  if (transaction) {
    transaction.date = transaction.date.split('T')[0]; // remove time from date
  } 
  return transaction;
}, [transactionsArray, id]);

useEffect(() => {
  
    setTransactionEdit(selectedTransaction);
  
}, [selectedTransaction]);







  const submitHandler = (e) => {
    e.preventDefault();
    try {
      axios
        .put(`${API}/transactions/${id}/edit`, transactionEdit)
        .then((res) => {
          console.log(res);
          console.log(res.data);
        }) 
        navigate(`/${id}`)
    } catch {
      setError(true);
      console.log(error)
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
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default TransactionEdit;
