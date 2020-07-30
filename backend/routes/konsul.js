const express = require("express");
const router = express.Router();
const konsulControl = require("../controller/konsul");
const isAuth = require("../middleware/isAuth");
const { dokterRole } = require("../middleware/roleCheck");

router.post("/pasien/konsultasi", isAuth, konsulControl.postKeluhan);

router.get("/getKonsul", isAuth, dokterRole, konsulControl.getKonsul);

module.exports = router;