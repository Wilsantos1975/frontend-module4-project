const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const transactionController = require("./controllers/transactionsControllers.js");

const app = express();
app.use(express.json());

app.use(cors());


app.use("/", transactionController);
app.use("/transactions/:id",transactionController)


app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the budgeting app"
  });
});



app.get("*", (req, res) => {    
    res.status(404).json({
        message: "Not Found",
    }); 
});       


module.exports = app;