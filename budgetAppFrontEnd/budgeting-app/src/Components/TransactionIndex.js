import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function TransactionIndex() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get(`${API}/transactions`);
        setTransactions(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTransactions();
  }, []);

  return (

    <div>
      {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}

export default TransactionIndex;
