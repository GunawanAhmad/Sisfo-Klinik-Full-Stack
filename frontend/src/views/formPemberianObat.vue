<template>
  <div class="app">
    <nav>
      <div class="flexlogo">
        <div class="back">
          <img src="../../public/img/arrow.png" alt />
          <router-link to="/dashboard-dokter">
            <p>kembali</p>
          </router-link>
        </div>
        <div class="logo">
          <router-link to="/">
            <img src="../../public/img/kliniku.png" alt />
          </router-link>
        </div>
      </div>
    </nav>
    <div class="container">
      <h1 class="title">pemeriksaan pasien</h1>
      <div class="user">
        <div class="info">
          <h2>{{ user.name }}</h2>
          <h4>{{ tanggal }}</h4>
        </div>
        <div class="telpon">
          <button>TELEPON</button>
          <!-- <button @click="chat">CHAT</button> -->
        </div>
      </div>
      <div class="teks">
        <p>{{ keluhan }}</p>
      </div>

      <div class="form">
        <div class="nama section">
          <label for="nama" class="label">Nama</label>
          <input type="text" name="nama" class="input" v-model="nama" disabled />
        </div>
        <div class="alamat section">
          <label for="alamat" class="label">Alamat</label>
          <input type="text" name="alamat" class="input" disabled v-model="alamat" />
        </div>
        <div class="ttl section">
          <label for="tanggal" class="label">Tanggal lahir</label>
          <input type="date" name="tanggal" class="input" />
        </div>
        <div class="tinggi section">
          <label for="tinggi" class="label">Tinggi badan</label>
          <div>
            <input type="number" name="tinggi" step="0.1" class="input" v-model="tinggi" disabled />
            <span>&nbsp;cm</span>
          </div>
        </div>
        <div class="berat section">
          <label for="berat" class="label">Berat badan</label>
          <div>
            <input type="number" name="berat" step="0.1" class="input" v-model="berat" disabled />
            <span>&nbsp;kg</span>
          </div>
        </div>
        <div class="riwayat section">
          <label for="riwayat" class="label">Riwayat penyakit</label>
          <div class="input">
            <span
              v-for="(penyakit,index) in user.riwayat"
              :key="index"
              class="penyakit"
            >{{ penyakit }}&nbsp;</span>
          </div>
        </div>
        <div class="pekerjaan section">
          <label for="kerja" class="label">Pekerjaan</label>
          <input type="text" name="kerja" class="input" v-model="pekerjaan" disabled />
        </div>
        <div class="tidur section">
          <p class="label">Rata-rata waktu tidur</p>
          <div class="input radio">
            <input type="radio" name="tidur" id="tidur" value="1-3 jam" disabled />
            <label>1-3 jam</label>
            <input type="radio" name="tidur" id="tidur" value="4-5 jam" disabled />
            <label>4-5 jam</label>
            <input type="radio" name="tidur" id="tidur" value="6-7 jam" disabled />
            <label>6-7 jam</label>
            <input type="radio" name="tidur" id="tidur" value="8-9 jam" disabled />
            <label>8-9 jam</label>
            <input type="radio" name="tidur" id="tidur" value="10+ jam" disabled />
            <label>10+ jam</label>
          </div>
        </div>
        <div class="olahraga section">
          <p class="label">Intensitas olahraga</p>
          <div class="input radio">
            <input type="radio" name="olahraga" id="olahraga" value="tidak pernah" disabled />
            <label>tidak pernah</label>
            <input type="radio" name="olahraga" id="olahraga" value="1-2 kali seminggu" disabled />
            <label>1-2 kali semingu</label>
            <input type="radio" name="olahraga" id="olahraga" value="3-5 kali seminggu" disabled />
            <label>3-5 kali seminggu</label>
            <input type="radio" name="olahraga" id="olahraga" value="6-7 kali seminggu" disabled />
            <label>6-7 kali seminggu</label>
          </div>
        </div>
        <div class="minum section">
          <p class="label">Intensitas minum air putih</p>
          <div class="input radio">
            <input type="radio" name="minum" id="minum" value="1-2 gelas" disabled />
            <label>1-2 gelas</label>
            <input type="radio" name="minum" id="minum" value="3-5 gelas" disabled />
            <label>3-5 gelas</label>
            <input type="radio" name="minum" id="minum" value="6-8 gelas" disabled />
            <label>6-8 gelas</label>
            <input type="radio" name="minum" id="minum" value="9+ gelas" disabled />
            <label>9+ gelas</label>
          </div>
        </div>
        <div class="rokok section">
          <p class="label">perokok</p>
          <div class="input radio">
            <input type="radio" name="rokok" id="rokok" value="merokok" disabled />
            <label>Ya</label>
            <input type="radio" name="rokok" id="rokok" value="tidak merokok" disabled />
            <label>Tidak</label>
          </div>
        </div>
        <div class="gejala section">
          <p class="label">Gejala umum</p>
          <div class="input radio">
            <input type="checkbox" name="gejala" id="gejala" value="demam" disabled />
            <label>Demam</label>
            <input type="checkbox" name="gejala" id="gejala" value="batuk" disabled />
            <label>Batuk</label>
            <input type="checkbox" name="gejala" id="gejala" value="pilek" disabled />
            <label>Pilek</label>
          </div>
        </div>
        <div class="makan section">
          <label for="makan" class="label">makanan yang sering dikonsumsi</label>
          <input type="text" name="makan" class="input" v-model="makanan" disabled />
        </div>
        <div class="lain section">
          <label for="lain" class="label">Lain-lain</label>
          <input type="text" name="lain" class="input" v-model="lain" disabled />
        </div>
        <div class="diagnosis section">
          <label for="diagnosis" class="label">Diagnosis penyakit</label>
          <input type="text" name="diagnosis" class="input" v-model="diagnosis" disabled />
        </div>
        <div class="catatan section">
          <label for="catatan" class="label">Catatan untuk pasien</label>
          <input type="text" name="catatan" class="input" v-model="catatan" disabled />
        </div>
        <p
          class="warn"
        >* data dimasukan setelah/saat konsultasi secara langsung melalui telepon atau keluhan pasien</p>
        <button class="btn" @click="submitData">SUBMIT</button>
      </div>
      <!-- <div class="chat" v-if="isChat">
        <span class="close" @click="isChat = false">
          <i class="fas fa-times"></i>
        </span>
        <div class="user">
          <div class="photo">
            <img src alt />
          </div>
          <div class="name">Name</div>
        </div>
        <div class="message">
          <p class="from">hahah</p>
          <p class="from">hahah</p>
          <p class="from">hahah</p>
          <p class="to">hahah</p>
        </div>
        <div class="control">
          <input type="text" placeholder="type here..." v-model="chatInput" />
          <button @click="sendMessage">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>-->
    </div>
  </div>
</template>

 <script>
import axios from "axios";
// import io from "socket.io-client";
export default {
  created() {
    let token = localStorage.getItem("token");
    let id = this.$route.params.id;
    axios
      .get("/get-pasien-konsul/" + id, {
        headers: {
          Authorization: "Barier " + token,
        },
      })
      .then((res) => {
        console.log(res);
        this.user = res.data.konsul.userId;
        this.keluhan = res.data.konsul.keluhan;
        this.tanggal = res.data.konsul.tanggal.slice(4, 15);
        this.pekerjaan = res.data.konsul.pekerjaan;
        this.nama = res.data.konsul.userId.name;
        this.alamat = res.data.konsul.userId.alamat;
        this.tanggalLahir = this.monthName(res.data.konsul.userId.ttl);
        this.tinggi = res.data.konsul.userId.tinggi;
        this.berat = res.data.konsul.userId.berat;
        this.makanan = res.data.konsul.makanan;
        this.lain = res.data.konsul.lain;
        this.catatan = res.data.konsul.catatan;
        this.diagnosis = res.data.konsul.diagnosis;

        const tidur = document.querySelectorAll("#tidur");
        this.findValue(tidur, res.data.konsul.waktuTidur);

        const minum = document.querySelectorAll("#minum");
        this.findValue(minum, res.data.konsul.intensitasMinum);

        const olahraga = document.querySelectorAll("#olahraga");
        this.findValue(olahraga, res.data.konsul.intensitasOlahraga);

        const rokok = document.querySelectorAll("#rokok");
        this.findValue(rokok, res.data.konsul.perokok);

        const gejala = document.querySelectorAll("#gejala");
        this.findValue(gejala, res.data.konsul.gejala);

        // console.log(ttl);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      user: {},
      keluhan: "",
      tanggal: "",
      catatan: "",
      lain: "",
      diagnosis: "",
      makanan: "",
      pekerjaan: "",
      gejala: "",
      nama: "",
      alamat: "",
      tanggalLahir: "",
      tinggi: 0,
      berat: 0,
    };
  },
  methods: {
    submitData() {
      const tidur = document.querySelectorAll("#tidur");
      let tidurValue = this.findValue(tidur)[0];

      const minum = document.querySelectorAll("#minum");
      let minumValue = this.findValue(minum)[0];

      const olahraga = document.querySelectorAll("#olahraga");
      let olahragaValue = this.findValue(olahraga)[0];

      const rokok = document.querySelectorAll("#rokok");
      let rokokValue = this.findValue(rokok)[0];

      let gejala = document.querySelectorAll("#gejala");
      let gejalaValue = this.findValue(gejala).join(",");
      // console.log(
      //   checkedValue,
      //   tidurValue,
      //   minumValue,
      //   olahragaValue,
      //   rokokValue
      // );
      const data = {
        minum: minumValue,
        olahraga: olahragaValue,
        tidur: tidurValue,
        pekerjaan: this.pekerjaan,
        makanan: this.makanan,
        catatan: this.catatan,
        lain: this.lain,
        rokok: rokokValue,
        gejala: gejalaValue,
        konsulId: this.$route.params.id,
        diagnosis: this.diagnosis,
      };
      let token = localStorage.getItem("token");
      axios
        .post("pemeriksaan-pasien", data, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    findValue(form, value) {
      for (let i = 0; i < form.length; i++) {
        if (form[i].getAttribute("value") === value) {
          form[i].checked = true;
        }
      }
    },
    monthName(mon) {
      let month = mon.slice(6, 7);
      if (month[0] === "0") {
        month.slice(1);
      }
      let monthName = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "November",
        "December",
      ];
      return mon.slice(0, 5) + monthName[month] + mon.slice(7, 10);
    },
  },
};
</script>

<style scoped src="../../public/styles/pemberian_obat.css">
</style>