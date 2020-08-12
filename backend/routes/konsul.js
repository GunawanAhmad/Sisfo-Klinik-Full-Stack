const express = require("express");
const router = express.Router();
const konsulControl = require("../controller/konsul");
const isAuth = require("../middleware/isAuth");
const { dokterRole, dokterOrStaff } = require("../middleware/roleCheck");

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
  isAuth,
  dokterRole,
  konsulControl.postPemeriksaan
);

router.get("/antrian", isAuth, konsulControl.antrian);

module.exports = router;
