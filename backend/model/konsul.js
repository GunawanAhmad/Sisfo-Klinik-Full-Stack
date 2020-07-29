const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const konsulSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  keluhan: {
    type: String
  },
  pekerjaan: {
    type: String
  },
  waktuTidur: {
    type: String
  },
  intensitasOlahraga: {
    type: String
  },
  intensitasMinum: {
    type: String
  },
  perokok: {
    type: String
  },
  gejalaUmum: {
    type: String
  },
  makanan: {
    type: String
  },
  lain: {
    type: String
  },
  diagnosis: {
    type: String
  },
  catatan: {
    type: String
  },
  obat: [
    {
      namaObat: {
        type: String
      },
      jumlah: {
        type: String
      }
    }
  ]
});

module.exports = mongoose.model("Konsul", konsulSchema);
