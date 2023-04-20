
import axios from "axios";
import Nav from "./Components/Nav";
import TransactionDetails from "./Components/TransactionDetails";
import TransactionEdit from "./Components/TransactionEdit";
import TransactionNew from "./Components/TransactionNew";
import TransactionIndex from "./Components/TransactionIndex";
import NotFound from "./Components/NotFound";

import { Route, Routes, useNavigate,useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [transactionsArray, setTransactionsArray] = useState([]);

  useEffect(() => {
    axios.get(`${API}/transactions`).then((res) => {
      setTransactionsArray(res.data);
    });
  }, [location]);

  const handleDelete = (id) => {
    axios.delete(`${API}/transactions/${id}/delete`);
    navigate("/");
  };

  return (
    <div className="App">
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route
          path="/"
          element={
            <TransactionIndex
              transactionsArray={transactionsArray}
              handleDelete={handleDelete}
            />
          }
        />
        <Route path="/new" element={<TransactionNew />} />
        <Route
          path="/:id"
          element={
            <TransactionDetails
              transactionsArray={transactionsArray}
              handleDelete={handleDelete}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={<TransactionEdit transactionsArray={transactionsArray} />}
        />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
