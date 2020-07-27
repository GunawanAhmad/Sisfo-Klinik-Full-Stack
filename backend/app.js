const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const authRouter = require("./routes/auth");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(authRouter);

mongoose
  .connect("mongodb://localhost:27017/db", {
    dbName: "Sisfo-Klinik"
  })
  .then(result => {
    app.listen(5000);
  })
  .catch(err => console.log(err));
