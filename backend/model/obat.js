const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const obatSchema = new Schema({
  namaObat: {
    type: String,
    required: true
  },
  satuan: {
    type: String,
    required: true
  },
  jumlah: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Obat", obatSchema);
