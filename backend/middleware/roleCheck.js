const User = require("../model/user");

function dokterRole(req, res, next) {
  const userId = req.userId;
  User.findById(userId)
    .then(user => {
      //   console.log(user.role);
      if (user.role !== "dokter") {
        const error = new Error("Acces Denied");
        error.statusCode = 402;
        throw error;
      }
      next();
    })
    .catch(err => {
      next(err);
    });
}

function staffRole(req, res, next) {
  const userId = req.userId;
  User.findById(userId)
    .then(user => {
      if (user.role !== "staff") {
        const error = new Error("Acces Denied");
        error.statusCode = 402;
        throw error;
      }
      next();
    })
    .catch(err => {
      next(err);
    });
}

function dokterOrStaff(req, res, next) {
  const userId = req.userId;
  User.findById(userId)
    .then(user => {
      if (user.role === "staff" || user.role === "dokter") {
        next();
      } else {
        const error = new Error("Acces Denied");
        error.statusCode = 402;
        throw error;
      }
    })
    .catch(err => {
      next(err);
    });
}

module.exports = {
  dokterRole,
  staffRole,
  dokterOrStaff
};
