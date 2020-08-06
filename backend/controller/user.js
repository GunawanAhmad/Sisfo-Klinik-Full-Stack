const User = require("../model/user");

exports.editDataPasien = (req, res, next) => {
  const nama = req.body.nama;
  const alamat = req.body.alamat;
  const ttl = req.body.ttl;
  const tinggi = req.body.tinggi;
  const berat = req.body.berat;
  const userId = req.userId;
  const riwayat = req.body.riwayat.split(",");

  let imageUrl = undefined;

  User.findById(userId)
    .then(user => {
      if (user) {
        user.name = nama;
        user.alamat = alamat;
        user.ttl = ttl;
        user.tinggi = tinggi;
        user.berat = berat;
        if (req.files["avatar"]) {
          imageUrl = req.files["avatar"][0].path.replace("\\", "/");
          user.avatar = imageUrl;
        }
        user.riwayat = riwayat;
        return user.save();
      }
      const error = new Error("user not found");
      throw console.error();
    })
    .then(respon => {
      res.status(200).json({ msg: "succes", user: respon });
    })
    .catch(err => {
      next(err);
    });
};

exports.getUserbyId = (req, res, next) => {
  const userId = req.userId;
  User.findById(userId)
    .then(user => {
      res.status(201).json({ msg: "succes", user: user });
    })
    .catch(err => next(err));
};
