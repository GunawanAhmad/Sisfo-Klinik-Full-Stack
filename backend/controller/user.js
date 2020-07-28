const User = require("../model/user");

exports.editDataPasien = (req, res, next) => {
  const nama = req.body.nama;
  const alamat = req.body.alamat;
  const ttl = req.body.ttl;
  const tinggi = req.body.tinggi;
  const berat = req.body.berat;
  const username = req.body.username;
  const riwayat = req.body.riwayat.split(",");

  let imageUrl = undefined;
  if (req.files["avatar"]) {
    imageUrl = req.files["avatar"][0].path.replace("\\", "/");
    console.log(imageUrl);
  }

  User.findOne({ username: username })
    .then(user => {
      user.name = nama;
      user.alamat = alamat;
      user.ttl = ttl;
      user.tinggi = tinggi;
      user.berat = berat;
      user.avatar = imageUrl;
      user.riwayat = riwayat;
      return user.save();
    })
    .then(respon => {
      res.status(200).json({ msg: "succes", user: respon });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getUserData = (req, res, next) => {
  const username = "test";
  User.findOne({ username: username })
    .then(user => {
      //   this.username = res.data.user.username;
      res.status(201).json({ msg: "succes", user: user });
    })
    .catch(err => console.log(err));
};

exports.getUserbyId = (req, res, next) => {
  const userId = req.userId;
  User.findById(userId)
    .then(user => {
      res.status(201).json({ msg: "succes", user: user });
    })
    .catch(err => console.log(err));
};
