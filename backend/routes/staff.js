const staffControl = require("../controller/staff");
const express = require("express");
const router = express.Router();
const isAuth = require("../middleware/isAuth");
const { staffRole } = require("../middleware/roleCheck");

router.post("/staff/tambah-obat", isAuth, staffRole, staffControl.addObat);

router.get("/staff/daftar-obat", isAuth, staffRole, staffControl.getObat);

module.exports = router;
