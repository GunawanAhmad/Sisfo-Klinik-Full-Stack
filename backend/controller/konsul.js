const User = require("../model/user");
const Konsul = require("../model/konsul");

exports.postKeluhan = (req, res, next) => {
  const userId = req.userId;
  const keluhan = req.body.keluhan;
  const konsul = new Konsul({
    userId: userId,
    keluhan: keluhan,
    tanggal: new Date()
  });
  return konsul
    .save()
    .then(result => {
      res.status(200).json({ msg: "mengeluh sukses", keluhan: result });
    })
    .catch(err => {
      next(err);
    });
};

exports.getKonsul = (req, res, next) => {
  Konsul.find()
    .populate("userId", "name username")
    .exec()
    .then(result => {
      res.status(201).json({ msg: "succes", konsul: result });
    })
    .catch(err => {
      next(err);
    });
};

exports.getAllKonsul = (req, res, next) => {
  Konsul.find()
    .populate("userId", "name riwayat")
    .exec()
    .then(result => {
      res.status(200).json({ msg: "succes", konsul: result });
    })
    .catch(err => {
      next(err);
    });
};

exports.getKonsulById = (req, res, next) => {
  const konsulId = req.params.id;
  Konsul.findById(konsulId)
    .populate("userId", "name riwayat")
    .exec()
    .then(konsul => {
      res.status(200).json({ msg: "succes", konsul: konsul });
    })
    .catch(err => {
      next(err);
    });
};
