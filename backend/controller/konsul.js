const User = require("../model/user");
const Konsul = require("../model/konsul");
const Mongoose = require("mongoose");

exports.postKeluhan = (req, res, next) => {
  const userId = req.userId;
  const keluhan = req.body.keluhan;
  Konsul.find({ userId: userId, telahDiperiksa: false })
    .then(konsulData => {
      if (konsulData.length > 0) {
        console.log(konsulData);
        const err = new Error("Keluhan anda sebelumnya belum ditanggapi");
        err.statusCode = 402;
        throw err;
      }
      const konsul = new Konsul({
        userId: userId,
        keluhan: keluhan,
        telahDiperiksa: false,
        telahDiberiObat: false,
        tanggal: new Date()
      });
      return konsul.save();
    })
    .then(result => {
      User.findById(userId).then(user => {
        if (!user) {
          const err = new Error("Acces Denied, user tidak ditemukan");
          throw err;
        }
        user.konsultasi.push(result);
        return user.save();
      });
    })
    .then(result => {
      res.status(200).json({ msg: "mengeluh sukses", keluhan: result });
    })
    .catch(err => {
      next(err);
    });
};

exports.getKonsul = (req, res, next) => {
  Konsul.find()
    .select("userId tanggal keluhan telahDiperiksa")
    .populate("userId", "name username")
    .exec()
    .then(result => {
      res.status(201).json({ msg: "succes", konsul: result });
    })
    .catch(err => {
      next(err);
    });
};

exports.getKonsulById = (req, res, next) => {
  const konsulId = req.params.id;
  Konsul.findById(konsulId)
    .populate("userId")
    .exec()
    .then(konsul => {
      res.status(200).json({ msg: "succes", konsul: konsul });
    })
    .catch(err => {
      next(err);
    });
};

exports.postPemeriksaan = (req, res, next) => {
  const perokok = req.body.rokok;
  const pekerjaan = req.body.pekerjaan;
  const intensitasMinum = req.body.minum;
  const intensitasOlahraga = req.body.olahraga;
  const waktuTidur = req.body.tidur;
  const gejalaUmum = req.body.gejala;
  const makanan = req.body.makanan;
  const lain = req.body.lain;
  const catatan = req.body.catatan;
  const diagnosis = req.body.diagnosis;
  const konsulId = req.body.konsulId;
  const name = req.body.name;
  const alamat = req.body.alamat;
  const tinggi = req.body.tinggi;
  const berat = req.body.berat;
  const riwayat = req.body.riwayat;
  const ttl = req.body.ttl;
  const username = req.body.username;
  Konsul.findById(konsulId)
    .then(konsul => {
      if (!konsul) {
        const err = new Error("Konsultasi tidak ditemukan");
        err.status(404);
        throw err;
      }
      konsul.gejalaUmum = gejalaUmum;
      konsul.intensitasMinum = intensitasMinum;
      konsul.waktuTidur = waktuTidur;
      konsul.intensitasOlahraga = intensitasOlahraga;
      konsul.pekerjaan = pekerjaan;
      konsul.makanan = makanan;
      konsul.lain = lain;
      konsul.diagnosis = diagnosis;
      konsul.catatan = catatan;
      konsul.perokok = perokok;
      konsul.telahDiperiksa = true;
      return konsul.save();
    })
    .then(result => {
      User.findOne({ username: username }).then(user => {
        user.name = name;
        user.alamat = alamat;
        user.tinggi = tinggi;
        user.berat = berat;
        user.riwayat = riwayat;
        user.ttl = ttl;
        return user.save();
      });
    })
    .then(result => {
      res.status(200).json({ msg: "succes", konsul: result });
    })
    .catch(err => {
      next(err);
    });
};

exports.antrian = (req, res, next) => {
  let id = req.userId;
  let index = 0;
  Konsul.find({ telahDiperiksa: false }, (err, data) => {
    data.forEach(konsul => {
      index++;

      if (konsul.userId == id) {
        return res.status(200).json({ index: index, data: konsul });
      }
    });
  });
};

exports.getKonsulBelumTerobati = (req, res, next) => {
  Konsul.find({ telahDiberiObat: false, telahDiperiksa: true })
    .populate("userId", "name")
    .exec()
    .then(konsul => {
      return res.status(200).json({ msg: "succes", konsul: konsul });
    })
    .catch(err => {
      next(err);
    });
};

exports.postObatPasien = (req, res, next) => {
  let konsulId = req.params.id;
  let obat = req.body.obat;
  console.log(obat);
  Konsul.findById(konsulId)
    .then(konsul => {
      konsul.telahDiberiObat = true;
      obat.forEach(p => {
        konsul.obat.push({
          obat: p.namaObat,
          catatan: p.catatan,
          quantity: p.quantity
        });
      });

      return konsul.save();
    })
    .then(konsul => {
      res.status(200).json({ msg: "succes", konsul: konsul });
    })
    .catch(err => {
      next(err);
    });
};

exports.getRiwayat = (req, res, next) => {
  let id = Mongoose.Types.ObjectId(req.userId);
  Konsul.find({ userId: id, telahDiperiksa: true, telahDiberiObat: true })
    .select("userId tanggal catatan obat keluhan")
    .populate("userId", "username avatar")
    .exec()
    .then(konsul => {
      res.status(200).json({ msg: "Succes", konsul: konsul });
    })
    .catch(err => {
      next(err);
    });
};
