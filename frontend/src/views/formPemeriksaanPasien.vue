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

      <form action id="myForm" @submit="submitData">
        <div class="form">
          <div class="nama section">
            <label for="nama" class="label">Nama</label>
            <input type="text" name="nama" class="input" v-model="name" />
          </div>
          <div class="alamat section">
            <label for="alamat" class="label">Alamat</label>
            <input type="text" name="alamat" class="input" v-model="alamat" />
          </div>
          <div class="ttl section">
            <label for="tanggal" class="label">Tanggal lahir</label>
            <div class="input">
              <select id="day-val" ref="hari" class="ttl-option">
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>

              <select id="bulan-val" ref="bulan" class="ttl-option">
                Select Month
                <option value="01" class="data-bulan">Januari</option>
                <option value="02" class="data-bulan">Februari</option>
                <option value="03" class="data-bulan">Maret</option>
                <option value="04" class="data-bulan">April</option>
                <option value="05" class="data-bulan">Mei</option>
                <option value="06" class="data-bulan">Juni</option>
                <option value="07" class="data-bulan">Juli</option>
                <option value="08" class="data-bulan">Agustus</option>
                <option value="09" class="data-bulan">September</option>
                <option value="10" class="data-bulan">Oktober</option>
                <option value="11" class="data-bulan">November</option>
                <option value="12" class="data-bulan">Desember</option>
              </select>
              <input type="text" class="ttl-option" id="tahun" v-model="tahun" />
            </div>
          </div>
          <div class="tinggi section">
            <label for="tinggi" class="label">Tinggi badan</label>
            <div>
              <input type="number" name="tinggi" step="0.1" class="input" v-model="tinggi" />
              <span>&nbsp;cm</span>
            </div>
          </div>
          <div class="berat section">
            <label for="berat" class="label">Berat badan</label>
            <div>
              <input type="number" name="berat" step="0.1" class="input" v-model="berat" />
              <span>&nbsp;kg</span>
            </div>
          </div>
          <div class="riwayat section">
            <label for="riwayat" class="label">Riwayat penyakit</label>
            <div class="input">
              <input
                type="text"
                v-model="riwayatInput"
                class="before"
                v-if="isInput || riwayat.length < 0 "
                placeholder="riwayat penyakit"
                @focusout="focusOut"
                @change="changeInput"
              />
              <span class="after" @click="isInput = !isInput" v-else>
                <span
                  v-for="(penyakit,index) in riwayat"
                  :key="index"
                  class="penyakit"
                >{{riwayat[index]}}&nbsp;</span>
              </span>
            </div>
          </div>
          <div class="pekerjaan section">
            <label for="kerja" class="label">Pekerjaan</label>
            <input type="text" name="kerja" class="input" v-model="pekerjaan" required />
          </div>
          <div class="tidur section">
            <p class="label">Rata-rata waktu tidur</p>
            <div class="input radio">
              <input type="radio" name="tidur" id="tidur" value="1-3 jam" />
              <label>1-3 jam</label>
              <input type="radio" name="tidur" id="tidur" value="4-5 jam" />
              <label>4-5 jam</label>
              <input type="radio" name="tidur" id="tidur" value="6-7 jam" />
              <label>6-7 jam</label>
              <input type="radio" name="tidur" id="tidur" value="8-9 jam" />
              <label>8-9 jam</label>
              <input type="radio" name="tidur" id="tidur" value="10+ jam" />
              <label>10+ jam</label>
            </div>
          </div>
          <div class="olahraga section">
            <p class="label">Intensitas olahraga</p>
            <div class="input radio">
              <input type="radio" name="olahraga" id="olahraga" value="tidak pernah" />
              <label>tidak pernah</label>
              <input type="radio" name="olahraga" id="olahraga" value="1-2 kali seminggu" />
              <label>1-2 kali semingu</label>
              <input type="radio" name="olahraga" id="olahraga" value="3-5 kali seminggu" />
              <label>3-5 kali seminggu</label>
              <input type="radio" name="olahraga" id="olahraga" value="6-7 kali seminggu" />
              <label>6-7 kali seminggu</label>
            </div>
          </div>
          <div class="minum section">
            <p class="label">Intensitas minum air putih</p>
            <div class="input radio">
              <input type="radio" name="minum" id="minum" value="1-2 gelas" />
              <label>1-2 gelas</label>
              <input type="radio" name="minum" id="minum" value="3-5 gelas" />
              <label>3-5 gelas</label>
              <input type="radio" name="minum" id="minum" value="6-8 gelas" />
              <label>6-8 gelas</label>
              <input type="radio" name="minum" id="minum" value="9+ gelas" />
              <label>9+ gelas</label>
            </div>
          </div>
          <div class="rokok section">
            <p class="label">perokok</p>
            <div class="input radio">
              <input type="radio" name="rokok" id="rokok" value="merokok" />
              <label>Ya</label>
              <input type="radio" name="rokok" id="rokok" value="tidak merokok" />
              <label>Tidak</label>
            </div>
          </div>
          <div class="gejala section">
            <p class="label">Gejala umum</p>
            <div class="input radio">
              <input type="checkbox" name="gejala" id="gejala" value="demam" />
              <label>Demam</label>
              <input type="checkbox" name="gejala" id="gejala" value="batuk" />
              <label>Batuk</label>
              <input type="checkbox" name="gejala" id="gejala" value="pilek" />
              <label>Pilek</label>
            </div>
          </div>
          <div class="makan section">
            <label for="makan" class="label">makanan yang sering dikonsumsi</label>
            <input type="text" name="makan" class="input" v-model="makanan" required />
          </div>
          <div class="lain section">
            <label for="lain" class="label">Lain-lain</label>
            <input type="text" name="lain" class="input" v-model="lain" required />
          </div>
          <div class="diagnosis section">
            <label for="diagnosis" class="label">Diagnosis penyakit</label>
            <input type="text" name="diagnosis" class="input" v-model="diagnosis" required />
          </div>
          <div class="catatan section">
            <label for="catatan" class="label">Catatan untuk pasien</label>
            <input type="text" name="catatan" class="input" v-model="catatan" required />
          </div>
          <p
            class="warn"
          >* data dimasukan setelah/saat konsultasi secara langsung melalui telepon atau keluhan pasien</p>

          <button class="btn" type="submit">SUBMIT</button>
        </div>
      </form>
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
        this.monthFilter(res.data.konsul.userId.ttl);
        this.user = res.data.konsul.userId;
        this.keluhan = res.data.konsul.keluhan;
        this.tanggal = res.data.konsul.tanggal.slice(4, 15);
        this.riwayat = res.data.konsul.userId.riwayat;
        this.name = res.data.konsul.userId.name;
        this.alamat = res.data.konsul.userId.alamat;
        this.berat = res.data.konsul.userId.berat;
        this.tinggi = res.data.konsul.userId.tinggi;
        this.riwayatInput = this.riwayat.join();
        this.lain = res.data.konsul.lain;
        this.catatan = res.data.konsul.catatan;
        this.diagnosis = res.data.konsul.diagnosis;
        this.makanan = res.data.konsul.makanan;
        this.pekerjaan = res.data.konsul.pekerjaan;
        this.username = res.data.konsul.userId.username;
        if (this.riwayat.length > 0) this.isInput = false;

        if (res.data.konsul.waktuTidur) {
          const tidur = document.querySelectorAll("#tidur");
          this.getValue(tidur, res.data.konsul.waktuTidur);
        }
        if (res.data.konsul.intensitasMinum) {
          const minum = document.querySelectorAll("#minum");
          this.getValue(minum, res.data.konsul.intensitasMinum);
        }
        if (res.data.konsul.intensitasOlahraga) {
          const olahraga = document.querySelectorAll("#olahraga");
          this.getValue(olahraga, res.data.konsul.intensitasOlahraga);
        }
        if (res.data.konsul.perokok) {
          const rokok = document.querySelectorAll("#rokok");
          this.getValue(rokok, res.data.konsul.perokok);
        }

        if (res.data.konsul.gejalaUmum) {
          const gejala = document.querySelectorAll("#gejala");
          this.findGejala(gejala, res.data.konsul.gejalaUmum);
        }
      })
      .catch((err) => {
        console.log(err.response);
        if (
          err.response.data.message == "jwt expired" ||
          err.response.data.message === "Acces Denied"
        ) {
          this.$router.push({ path: "/login" });
        }
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
      riwayatInput: "",
      riwayat: [],
      isInput: true,
      name: "",
      alamat: "",
      berat: 0,
      tinggi: 0,
      ttl: "",
      username: "",
      tahun: "",
    };
  },
  methods: {
    monthFilter(date) {
      console.log(date);
      let month = date.slice(5, 7);
      let day = date.slice(8, 10);
      this.tahun = date.slice(0, 4);
      let bulan = document.querySelectorAll(".data-bulan");
      bulan.forEach((p) => {
        if (p.value == month) {
          p.setAttribute("selected", "selected");
        }
      });
      let hari = this.$refs.hari.children;
      hari.forEach((p) => {
        if (p.value == day) {
          p.setAttribute("selected", "selected");
        }
      });
    },

    changeInput() {
      this.riwayat = this.riwayatInput.split(",");
      this.isInput = !this.isInput;
    },
    focusOut() {
      if (this.riwayatInput !== "") {
        this.isInput = false;
      } else {
        this.isInput = true;
      }
    },
    submitData(e) {
      e.preventDefault();
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
        name: this.name,
        alamat: this.alamat,
        riwayat: this.riwayat.join(","),
        ttl: `${this.tahun}-${this.$refs.bulan.value}-${this.$refs.hari.value}`,
        tinggi: this.tinggi,
        berat: this.berat,
        username: this.username,
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
          this.$router.push({ path: "/dashboard-dokter" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    findValue(form) {
      let value = [];
      for (let i = 0; i < form.length; i++) {
        if (form[i].checked) {
          value.push(form[i].value);
        }
      }
      return value;
    },
    getValue(form, value) {
      for (let i = 0; i < form.length; i++) {
        if (form[i].getAttribute("value") === value) {
          return;
        }
      }
    },
    findGejala(form, value) {
      let array = value.split(",");
      form.forEach((el) => {
        array.forEach((val) => {
          if (val === el.getAttribute("value")) {
            el.checked = true;
          }
        });
      });
    },
  },
};
</script>

<style scoped src="../../public/styles/pemeriksaan_pasien.css">
</style>