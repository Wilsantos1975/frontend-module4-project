// import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

// const API = process.env.REACT_APP_API_URL;

function TransactionDetails({ transactionsArray, handleDelete }) {
  const location = useLocation();
  let navigate = useNavigate();
console.log(transactionsArray)
  const [transactions, setTransactions] = useState(location.state ? location.state : {});
  const { id } = useParams();

  // useEffect(() => {
  //   axios
  //   .get(`${API}/transactions/${id}`)
  //   .then((res) => {
  //     setTransactions(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     navigate("/404");
  //   });
  // }, [id, navigate]);

  useEffect(() => {
    if (!location.state) {
      const current = transactionsArray.filter((t) => t.id === id)[0]

      if (current) {
        setTransactions(current)
      } else {
        navigate("/404")
      }
    }
  }, [id, navigate, location.state, transactionsArray]);

  const handleEdit = () => {
    navigate(`/edit/${transactions.id}`);
  };

  return (
    <div>
      <h3>{transactions.date}</h3>
      <h3>{transactions.item_name}</h3>
      <h3>{transactions.amount}</h3>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => handleDelete(transactions.id)}>Delete</button>
      <button onClick={() => navigate(`/`)}>Back</button>
    </div>
  );
}

export default TransactionDetails;
