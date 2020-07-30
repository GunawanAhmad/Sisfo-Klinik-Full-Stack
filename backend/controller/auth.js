const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createUser = (req, res, next) => {
  const username = req.body.username;
  const name = req.body.name;
  const password = req.body.password;
  // let image = undefined;
  // if(req.files) {
  //     image = req.files['avatar'][0].path.replace("\\" ,"/")
  // }

  User.findOne({ username: username })
    .then(user => {
      if (user) {
        const error = new Error("username sudah ada");
        error.statusCode = 401;
        throw error;
      }
      bcrypt.hash(password, 12).then(hashedPass => {
        const user = new User({
          name: name,
          password: hashedPass,
          username: username,
          role: "pasien"
          // imageProfile : image
        });
        return user.save();
      });
    })
    .then(result => {
      res.status(200).json({ message: "Signup succes" });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.login = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  let loadedUser = null;

  User.findOne({ username: username })
    .then(user => {
      if (!user) {
        throw new Error("username is invalid");
      }
      loadedUser = user;

      return bcrypt.compare(password, user.password);
    })
    .then(isEqual => {
      if (!isEqual) {
        const error = new Error("Wrong password");
        error.statusCode = 401;
        throw error;
      }
      const token = jwt.sign(
        {
          username: loadedUser.username,
          userId: loadedUser._id.toString()
        },
        "thisissecretkey",
        { expiresIn: "1h" }
      );
      res
        .status(200)
        .json({
          token: token,
          username: loadedUser.username,
          role: loadedUser.role
        });
      console.log("login succes");
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
