import { Link, useNavigate } from "react-router-dom";

function Transaction({ transaction, handleDelete }) {
  const navigate = useNavigate();
console.log(transaction)
  return (
    <div className="transaction">
      <h3 className="date">{transaction.date}</h3>
      <Link className="transaction-link"to={`/${transaction.id}`}>
        <p>{`${transaction.item_name}(${transaction.category})`}</p>
      </Link>
      <p className="amount">{transaction.amount}</p>

      <div className="transaction-buttons">
        <button className="edit"
          onClick={() => navigate(`/edit/${transaction.id}`)}
        >
          Edit
        </button>
      
      </div>
    </div>
  );
}

export default Transaction;
