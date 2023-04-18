const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions.js");

transactions.get("/transactions", (req, res) => {
  res.json(transactionsArray);
});

transactions.get("/transactions/:id", (req, res) => {
  const { id } = req.params;
  if (transactionsArray[id]) {
    res.json(transactionsArray[id]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

module.exports = transactions;
