import { Link } from "react-router-dom";



function Transaction({transaction}) {


  return (
    <div className="transaction">
      <h3>{transaction.date}</h3>
      <Link to={`/transactions/${transaction.id}`}>{transaction.item_name}</Link>
      <p>{transaction.amount}</p>
    </div>
  )
}

export default Transaction
