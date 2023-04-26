import { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";

function Transaction({ transaction, handleDelete }) {

  const navigate = useNavigate();
  const [date, setDate] = useState();
  // console.log(transaction);

  const monthNames = useMemo(() => { // useMemo is used to memorize the result of a function call so that it can be reused
    return {  
      "01": "Jan",  
      "02": "Feb",      
      "03": "Mar",                
      "04": "Apr",        
      "05": "May",        
      "06": "Jun",        
      "07": "Jul",        
      "08": "Aug",      
      "09": "Sep",        
      "10": "Oct",        
      "11": "Nov",    
      "12": "Dec",    
    };        
  }, []);
   

  useEffect(() => {
    const dateArr = transaction.date.toString().split("/"); // ['2021', '01', '01']
    const monthNum = dateArr[1]; // '01'
    const monthName = monthNames[monthNum]; // 'Jan'
    console.log(dateArr)
    const dayNum = dateArr[2].slice(0, 2); // '01'
    const yearNum = dateArr[0]; // '2021'
    if (monthName) {
      setDate(`${monthName} ${dayNum}, ${yearNum}`);
    } else {
      setDate("No date found");
    }
  }, [ transaction.date, monthNames]);

  console.log(date);

  return (
    <div className="transaction">
      <p className="date">{date}</p>
      <Link className="transaction-link" to={`/${transaction.id}`}>
      <p>{`${transaction.item_name}(${transaction.category})`}</p>
      </Link>
        <p className="amount">
          <span className={transaction.amount < 0 ? "red" : "green"}>$
            {Math.abs(transaction.amount)}
          </span>
        </p>
      <div className="transaction-buttons">
        <button
          className="edit"
          onClick={() => navigate(`/edit/${transaction.id}`)}
        >
          Edit
        </button>
        <button className="delete" onClick={() => handleDelete(transaction.id)}>
        ❌
        </button>
      </div>
    </div>
  );
}

export default Transaction;
