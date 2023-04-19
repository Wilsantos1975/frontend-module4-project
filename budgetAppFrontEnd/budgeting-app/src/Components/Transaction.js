import { Link } from "react-router-dom";



function Transaction({transaction}) {


  return (
    <div className="transaction">
      <h3>{transaction.name}</h3>
      <Link to={`/transactions/${transaction.id}`}>{transaction.category}</Link>
      <p>{transaction.amount}</p>
    </div>
  )
}

export default Transaction
