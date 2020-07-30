const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const authRouter = require("./routes/auth");
const userRoutes = require("./routes/user");
const konsulRoutes = require("./routes/konsul");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4());
  }
});

const filterImg = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(bodyParser.json());

app.use(
  multer({ storage: fileStorage, fileFilter: filterImg }).fields([
    {
      name: "avatar",
      maxCount: 1
    }
  ])
);

app.use("/images", express.static(path.join(__dirname, "images")));

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
app.use(userRoutes);
app.use(konsulRoutes);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  console.log(message);
  res.status(422).json({ message: message, errorData: data });
});

let server = mongoose
  .connect("mongodb://localhost:27017/db", {
    dbName: "Sisfo-Klinik",
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(result => {
    app.listen(5000);
  })
  .catch(err => console.log(err));
