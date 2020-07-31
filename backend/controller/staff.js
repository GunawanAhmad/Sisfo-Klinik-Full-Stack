const Obat = require("../model/obat");

exports.addObat = (req, res, next) => {
  const namaObat = req.body.namaObat;
  const satuan = req.body.satuan;
  const jumlah = req.body.jumlah;
  Obat.findOne({ namaObat: namaObat })
    .then(obat => {
      if (obat) {
        obat.satuan = satuan;
        obat.jumlah = jumlah;
        return obat.save();
      }
      const newObat = new Obat({
        namaObat: namaObat,
        satuan: satuan,
        jumlah: jumlah
      });
      return newObat.save();
    })
    .then(obat => {
      res.status(200).json({ msg: "succes", obat: obat });
    })
    .catch(err => {
      next(err);
    });
};

exports.getObat = (req, res, next) => {
  Obat.find()
    .then(obat => {
      res.status(200).json({ msg: "succes", obat: obat });
    })
    .catch(err => {
      next(err);
    });
};
