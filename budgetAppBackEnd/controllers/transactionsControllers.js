const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions.js");

//get all entries
transactions.get("/transactions", (req, res) => {
  res.json(transactionsArray);
});

//show a single
transactions.get("/:id", (req, res) => {
  const { id } = req.params;
  if (transactionsArray[id]) {
    res.json(transactionsArray[id]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

//update or put
transactions.put("/:id", (req, res) => {
  const { id } = req.params;

  if (transactionsArray[id]) {
    transactionsArray[id] = req.body;
    res.json(transactionsArray[id]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

//delete
transactions.delete("/:id", (req, res) => {
  const { id } = req.params;

  if (transactionsArray[id]) {
    const deletedTransaction = transactionsArray.splice(id, 1);
    res.status(200).json(deletedTransaction);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});
//create or post
transactions.post("/", (req, res) => {
  transactionsArray.push(req.body);

  res.json(transactionsArray[transactionsArray.length - 1]);
});




//    if(transactionsArray[id]) {
//        transactionsArray.push(req.body)
//        res.json(transactionsArray[id])
//    } else {
//        res.status(404).json({ error: "Not Found" });
//    }
// } )

module.exports = transactions;
