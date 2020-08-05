const express = require("express");
const router = express.Router();
const User = require("../model/user");
const authControl = require("../controller/auth");

router.post("/signup", authControl.createUser);

router.post("/login", authControl.login);

router.post("/change-username", authControl.changeUsername);

module.exports = router;
