const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions.js");

//get all entries
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

transactions.get('/:index', (req, res) => { //:index is a variable  //req.params.index is the value of the variable
  const id = req.params.index
  res.status(200).json(transactionsArray[id])
})

//show a single
// transactions.get("/:id", (req, res) => {
//   const { id } = req.params;
//   if (transactionsArray[id]) {
//     res.json(transactionsArray[id]);
//   } else {
//     res.status(404).json({ error: "Not Found" });
//   }
// });

transactions.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    if (transactionsArray[id]) {
      res.json(transactionsArray[id]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//update or put
transactions.put("/edit/:id", (req, res) => {
  try {
    const { id } = req.params;
    const letsSee = req.body;
    if (transactionsArray[id]) {
      transactionsArray[id] = letsSee;
      res.json(transactionsArray[id]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// transactions.put("/edit/:id", (req, res) => {
//   const { id } = req.params;

//   if (transactionsArray[id]) {
//     transactionsArray[id] = req.body;
//     res.json(transactionsArray[id]);
//   } else {
//     res.status(404).json({ error: "Not Found" });
//   }
// });

//delete
transactions.delete("/:id/delete", (req, res) => {
  const { id } = req.params;
  let removed;
    transactionsArray.forEach((element, index) => {
      if (element.id === id) {
        removed = index
    }
    });
console.log(removed)
    if (removed) {
        transactionsArray.splice(removed, 1)
        res.status(200).json(transactionArray)
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});


//create or post
transactions.post("/new", (req, res) => {
  transactionsArray.push(req.body);

  res.json(transactionsArray[transactionsArray.length - 1]);
});



module.exports = transactions;
