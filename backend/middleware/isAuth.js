const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let check = req.get("Authorization");
  if (!check) {
    let error = new Error("Acces Denied");
    error.statusCode = 401;
    throw error;
  }
  const token = req.get("Authorization").split(" ")[1];
  let decoded;
  try {
    decoded = jwt.verify(token, "thisissecretkey");
  } catch (err) {
    err.statusCode = 500;

    throw err;
  }
  if (!decoded) {
    let error = new Error("Acces Denied");
    error.statusCode = 401;
    throw error;
  }

  req.userId = decoded.userId;
  next();
};
