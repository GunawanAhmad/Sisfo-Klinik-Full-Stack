const express = require("express");
const router = express.Router();
const User = require("../model/user");
const authControl = require("../controller/auth");
const { check, body } = require("express-validator/check");

router.post(
  "/signup",
  [
    check("password")
      .isLength({ min: 2 })
      .withMessage("Please enter password at least 2 character long")
      .trim()
  ],
  authControl.createUser
);

router.post(
  "/login",
  [body("password").trim(), body("username").trim()],
  authControl.login
);

router.post("/change-username", authControl.changeUsername);

router.post(
  "/change-password",
  [
    check("newPassword")
      .trim()
      .isLength({ min: 2 })
      .withMessage("Please enter password at least 2 character long"),
    body("confirmPassword")
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.newPassword) {
          throw new Error("Konfirmasi password tidak sama");
        }
        return true;
      })
  ],
  authControl.changePassword
);

module.exports = router;
