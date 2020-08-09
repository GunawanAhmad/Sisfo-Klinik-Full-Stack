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
  Konsul.findById(konsulId)
    .then(konsul => {
      if (!konsul) {
        const err = new Error("Konsultasi tidak ditemukan");
        err.status(404);
        throw err;
      }
      konsul.gejalaUmum = gejalaUmum;
      konsul.intensitsMinum = intensitasMinum;
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
      res.status(200).json({ msg: "succes", konsul: result });
    })
    .catch(err => {
      next(err);
    });
};
