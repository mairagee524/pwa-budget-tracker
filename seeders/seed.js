let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let transactionSeed = [
  {
    name: "Takeout",
    value: 25,
    date: new Date().setDate(new Date().getDate()-10)
  },
  {
    name: "Clothes",
    value: 50,
    date: new Date().setDate(new Date().getDate()-9)
  },
  {
    name: "Skincare",
    value: 15,
    date: new Date().setDate(new Date().getDate()-8)
  },
  {
    name: "Groceries",
    value: 45,
    date: new Date().setDate(new Date().getDate()-7)
  },
  {
    name: "Car Insurance",
    value: 250,
    date: new Date().setDate(new Date().getDate()-6)
  },
  {
    name: "Rent",
    value: 1000,
    date: new Date().setDate(new Date().getDate()-5)
  },
  {
    name: "Groceries",
    value: 25,
    date: new Date().setDate(new Date().getDate()-4)
  },
  {
    name: "Skincare",
    value: 15,
    date: new Date().setDate(new Date().getDate()-3)
  },
  {
    name: "Bills",
    value: 75,
    date: new Date().setDate(new Date().getDate()-2)
  },
  {
    name: "Clothes",
    value: 25,
    date: new Date().setDate(new Date().getDate()-1)
  }
];

db.budget.deleteMany({})
    .then(() => db.budget.collection.insertMany(transactionSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });