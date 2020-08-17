const express = require("express");
const router = express.Router();
const konsulControl = require("../controller/konsul");
const isAuth = require("../middleware/isAuth");
const {
  dokterRole,
  dokterOrStaff,
  staffRole
} = require("../middleware/roleCheck");
const { konsulCheck } = require("../middleware/konsulDataCheck");
const { check, body } = require("express-validator/check");

router.post("/pasien/konsultasi", isAuth, konsulControl.postKeluhan);

router.get("/getKonsul", isAuth, dokterOrStaff, konsulControl.getKonsul);

router.get(
  "/get-pasien-konsul/:id",
  isAuth,
  dokterOrStaff,
  konsulControl.getKonsulById
);

router.post(
  "/pemeriksaan-pasien",
  konsulCheck,
  [body("catatan").not().isEmpty()],
  isAuth,
  dokterRole,
  konsulControl.postPemeriksaan
);

router.get("/antrian", isAuth, konsulControl.antrian);

router.get(
  "/konsul-belum-terobati",
  isAuth,
  staffRole,
  konsulControl.getKonsulBelumTerobati
);

router.post(
  "/post-obat-pasien/:id",
  isAuth,
  staffRole,
  konsulControl.postObatPasien
);

router.get("/get-riwayat", isAuth, konsulControl.getRiwayat);

module.exports = router;
