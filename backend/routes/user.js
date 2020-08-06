const express = require("express");
const router = express.Router();
const userControl = require("../controller/user");
const isAuth = require("../middleware/isAuth");
const { dokterRole } = require("../middleware/roleCheck");

router.post("/edit-data-pasien", isAuth, userControl.editDataPasien);

router.get("/getUser", isAuth, userControl.getUserbyId);

module.exports = router;
