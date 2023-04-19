import axios from "axios";
import { useEffect, useState } from "react";
import {  useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;


function TransactionDetails() {
let navigate = useNavigate();

const [transaction, setTransaction] = useState({});

const { id } = useParams();

useEffect(() => {
  axios
  .get(`${API}/transactions/${id}`)
  .then((res) => {
    setTransaction(res.data);
  })
  .catch((err) => {
    console.log(err);
    navigate("/404");
  });
}, [id, navigate]);



  return (
    <div>
      <h3>{transaction.date}</h3>
      <h3>{transaction.item_name}</h3>
      <h3>{transaction.amount}</h3>
      <button onClick={() => navigate(`/transactions/${id}/edit`)}>Edit</button>
      <button onClick={() => navigate(`/transactions/${id}/delete`)}>Delete</button>
      <button onClick={() => navigate(`/transactions`)}>Back</button>
    </div>
  )
}

export default TransactionDetails
