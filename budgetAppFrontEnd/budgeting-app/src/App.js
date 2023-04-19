import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Transaction from "./Components/Transaction";
import TransactionDetails from "./Components/TransactionDetails";
import TransactionEdit from "./Components/TransactionEdit";
import TransactionNew from "./Components/TransactionNew";
import TransactionIndex from "./Components/TransactionIndex";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<TransactionIndex />} />
        <Route path="/transactions/new" element={<TransactionNew />} />
        <Route path="/transactions/:id" element={<TransactionDetails />} />
        <Route path="/transactions/:id/edit" element={<TransactionEdit Transaction={Transaction}/>} />
      </Routes>
    </div>
  );
}

export default App;
