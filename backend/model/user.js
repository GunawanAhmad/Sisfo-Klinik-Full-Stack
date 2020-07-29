const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  alamat: {
    type: String
  },
  ttl: {
    type: String
  },
  tinggi: {
    type: Number
  },
  berat: {
    type: Number
  },
  riwayat: {
    type: Array
  },
  role: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", userSchema);
