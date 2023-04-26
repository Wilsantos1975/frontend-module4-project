import Transaction from "./Transaction";
import "./indexPage.css";

function TransactionIndex({ transactionsArray, handleDelete }) {
  return (
    <div className="index">
      <h2>Transactions to date</h2>
      {transactionsArray.map((transaction) => (
        <Transaction
          key={transaction.id}
          transaction={transaction}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TransactionIndex;
