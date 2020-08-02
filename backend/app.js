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
const staffRoutes = require("./routes/staff");
const user = require("./model/user");

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
  // res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(authRouter);
app.use(userRoutes);
app.use(konsulRoutes);
app.use(staffRoutes);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  console.log(message);
  res.status(422).json({ message: message, errorData: data });
});

let users = [];

mongoose
  .connect("mongodb://localhost:27017/db", {
    dbName: "Sisfo-Klinik",
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(result => {
    app.listen(5000);
    // const server = app.listen(5000);
    // const io = require("socket.io")(server);
    // io.on("connection", socket => {
    //   console.log("socket connected", socket.id);
    //   socket.on("chat", function (data) {
    //     for (let i = 0; i < users.length; i++) {
    //       if (users[i].username == data.user) {
    //         console.log("sama");
    //         // users[i].socketId = socket.id;
    //         io.to(users[i].socketId).emit("chat", data);
    //         return;
    //       }
    //     }
    //     console.log(users);
    //     let user = {
    //       username: data.user,
    //       socketId: socket.id
    //     };
    //     users.push(user);
    //     // io.sockets.emit("chat", data);
    //     // io.to("5RpdQZJNYt_zXUKYAAAj").emit("chat", data);
    //   });
    //   socket.on("username", data => {
    //     console.log(data);
    //     socket.username = data;
    //     let user = {
    //       username: data.user,
    //       socketId: socket.id
    //     };
    //     users.push(user);
    //     io.sockets.emit(
    //       "username",
    //       JSON.stringify(user.username) + JSON.stringify(users)
    //     );
    //   });
    // });
  })
  .catch(err => console.log(err));
