<template>
  <div class="app">
    <nav>
      <div class="flexlogo">
        <div class="back">
          <img src="../../public/img/arrow.png" alt />
          <router-link to="/dashboard-staff">
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
    <h1 class="title">pemberian obat</h1>
    <h2 class="title-2">hasil pemeriksaan pasien</h2>
    <div class="container">
      <div class="form">
        <div class="nama section">
          <label for="nama" class="label">Nama</label>
          <input type="text" name="nama" class="input" v-model="nama" readonly />
        </div>
        <div class="alamat section">
          <label for="alamat" class="label">Alamat</label>
          <input type="text" name="alamat" class="input" readonly v-model="alamat" />
        </div>
        <div class="ttl section">
          <label for="tanggal" class="label">Tanggal lahir</label>
          <div class="input">
            <span>{{ tanggalLahir[2] }}</span>
            <span>{{ tanggalLahir[1] }}</span>
            <span>{{ tanggalLahir[0] }}</span>
          </div>
        </div>
        <div class="tinggi section">
          <label for="tinggi" class="label">Tinggi badan</label>
          <div>
            <input type="number" name="tinggi" step="0.1" class="input" v-model="tinggi" readonly />
            <span>&nbsp;cm</span>
          </div>
        </div>
        <div class="berat section">
          <label for="berat" class="label">Berat badan</label>
          <div>
            <input type="number" name="berat" step="0.1" class="input" v-model="berat" readonly />
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
          <input type="text" name="kerja" class="input" v-model="pekerjaan" readonly />
        </div>
        <div class="tidur section">
          <p class="label">Rata-rata waktu tidur</p>
          <div class="input radio">
            <input type="radio" name="tidur" id="tidur" value="1-3 jam" readonly />
            <label>1-3 jam</label>
            <input type="radio" name="tidur" id="tidur" value="4-5 jam" readonly />
            <label>4-5 jam</label>
            <input type="radio" name="tidur" id="tidur" value="6-7 jam" readonly />
            <label>6-7 jam</label>
            <input type="radio" name="tidur" id="tidur" value="8-9 jam" readonly />
            <label>8-9 jam</label>
            <input type="radio" name="tidur" id="tidur" value="10+ jam" readonly />
            <label>10+ jam</label>
          </div>
        </div>
        <div class="olahraga section">
          <p class="label">Intensitas olahraga</p>
          <div class="input radio">
            <input type="radio" name="olahraga" id="olahraga" value="tidak pernah" readonly />
            <label>tidak pernah</label>
            <input type="radio" name="olahraga" id="olahraga" value="1-2 kali seminggu" readonly />
            <label>1-2 kali semingu</label>
            <input type="radio" name="olahraga" id="olahraga" value="3-5 kali seminggu" readonly />
            <label>3-5 kali seminggu</label>
            <input type="radio" name="olahraga" id="olahraga" value="6-7 kali seminggu" readonly />
            <label>6-7 kali seminggu</label>
          </div>
        </div>
        <div class="minum section">
          <p class="label">Intensitas minum air putih</p>
          <div class="input radio">
            <input type="radio" name="minum" id="minum" value="1-2 gelas" readonly />
            <label>1-2 gelas</label>
            <input type="radio" name="minum" id="minum" value="3-5 gelas" readonly />
            <label>3-5 gelas</label>
            <input type="radio" name="minum" id="minum" value="6-8 gelas" readonly />
            <label>6-8 gelas</label>
            <input type="radio" name="minum" id="minum" value="9+ gelas" readonly />
            <label>9+ gelas</label>
          </div>
        </div>
        <div class="rokok section">
          <p class="label">perokok</p>
          <div class="input radio">
            <input type="radio" name="rokok" id="rokok" value="merokok" readonly />
            <label>Ya</label>
            <input type="radio" name="rokok" id="rokok" value="tidak merokok" readonly />
            <label>Tidak</label>
          </div>
        </div>
        <div class="gejala section">
          <p class="label">Gejala umum</p>
          <div class="input radio">
            <input
              type="checkbox"
              name="gejala"
              id="gejala"
              value="demam"
              readonly
              @click="checkboxPrevent"
            />
            <label>Demam</label>
            <input
              type="checkbox"
              name="gejala"
              id="gejala"
              value="batuk"
              readonly
              @click="checkboxPrevent"
            />
            <label>Batuk</label>
            <input
              type="checkbox"
              name="gejala"
              id="gejala"
              value="pilek"
              readonly
              @click="checkboxPrevent"
            />
            <label>Pilek</label>
          </div>
        </div>
        <div class="makan section">
          <label for="makan" class="label">makanan yang sering dikonsumsi</label>
          <input type="text" name="makan" class="input" v-model="makanan" readonly />
        </div>
        <div class="lain section">
          <label for="lain" class="label">Lain-lain</label>
          <input type="text" name="lain" class="input" v-model="lain" readonly />
        </div>
        <div class="diagnosis section">
          <label for="diagnosis" class="label">Diagnosis penyakit</label>
          <input type="text" name="diagnosis" class="input" v-model="diagnosis" readonly />
        </div>
        <div class="catatan section">
          <label for="catatan" class="label">Catatan untuk pasien</label>
          <input type="text" name="catatan" class="input" v-model="catatan" readonly />
        </div>
        <h2 class="title-obat">obat</h2>
        <div class="list-pemberian">
          <div class="obat-pemberian" v-for="obat in pemberianObat" :key="obat._id">
            <p>{{ obat.namaObat }}</p>
            <input
              type="number"
              v-model="obat.quantity"
              min="1"
              :max="obat.jumlah"
              class="jumlah"
              placeholder="0"
            />
            <input type="text" v-model="obat.catatan" class="catatan" placeholder="catatan" />
          </div>
        </div>
        <div class="input-obat">
          <button class="nama-obat" @click="showTambahObat">tambah obat</button>
          <!-- <input type="Number" class="jumlah-obat" />
          <input type="text" class="catatan-obat" />-->
        </div>

        <button class="btn" @click="submitData">SUBMIT</button>
      </div>

      <div class="container-daftar-obat" v-if="isTambahObat">
        <div class="list">
          <div class="back two" @click="showTambahObat" style="cursor:pointer;">
            <img src="../../public/img/arrow.png" alt />
            <p>kembali</p>
          </div>
          <div class="top">
            <div class="search">
              <input type="text" placeholder="search" />
              <img src="../../public/img/search.png" alt />
            </div>

            <div class="stock">
              <div class="ready">
                <div class="kosong"></div>
                <p>tersedia</p>
              </div>
              <div class="notready">
                <div class="kosong"></div>
                <p>tidak tersedia</p>
              </div>
            </div>
          </div>
          <div class="container-list-obat">
            <ul class="list-obat">
              <li
                :class="obat.jumlah > 0 ? 'ada' : 'tidak-ada'"
                style="cursor:pointer;"
                v-for="(obat,index) in daftarObat"
                :key="obat._id"
                @click="tambahObat(index)"
              >{{ obat.namaObat }}</li>
            </ul>
            <h3 class="error">{{ errorMsg }}</h3>
          </div>
        </div>
      </div>
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
        this.findGejala(gejala, res.data.konsul.gejalaUmum);

        // console.log(ttl);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        if (err.response.data.message === "jwt expired") {
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
      gejala: "",
      nama: "",
      alamat: "",
      tanggalLahir: [],
      tinggi: 0,
      berat: 0,
      isTambahObat: false,
      daftarObat: [],
      pemberianObat: [],
      isReqDaftarObat: true,
      errorMsg: "",
    };
  },
  methods: {
    submitData() {
      let id = this.$route.params.id;

      let token = localStorage.getItem("token");
      let data = {
        obat: this.pemberianObat,
      };
      axios
        .post("/post-obat-pasien/" + id, data, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          console.log(res);
          this.$router.push({ path: "/pemberian-obat-selesai" });
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(this.pemberianObat);
    },
    findValue(form, value) {
      for (let i = 0; i < form.length; i++) {
        if (form[i].getAttribute("value") === value) {
          form[i].checked = true;
        } else {
          form[i].setAttribute("disabled", true);
        }
      }
    },
    monthName(mon) {
      let month = mon.slice(5, 7);

      if (month[0] === "0") {
        month.slice(1);
      }
      let monthName = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];

      return [mon.slice(0, 4), monthName[month - 1], mon.slice(8, 10)];
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
    checkboxPrevent(event) {
      event.preventDefault();
      event.stopPropagation();

      return false;
    },
    showTambahObat() {
      this.isTambahObat = !this.isTambahObat;
      document.querySelector(".form").classList.toggle("hidden");
      console.log(this.daftarObat);
      if (this.isReqDaftarObat) {
        this.isReqDaftarObat = false;
        let token = localStorage.getItem("token");
        axios
          .get("/staff/daftar-obat", {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((res) => {
            console.log(res);
            this.daftarObat = res.data.obat;
          })
          .catch((err) => {
            console.log(err.response);
            if (err.response.data.message === "jwt expired") {
              this.$router.push({ path: "/login" });
            }
          });
      }
    },
    tambahObat(index) {
      if (this.daftarObat[index].jumlah > 0) {
        this.pemberianObat.push(this.daftarObat[index]);
        this.isReqDaftarObat = true;
        this.isTambahObat = !this.isTambahObat;
        document.querySelector(".form").classList.toggle("hidden");
        this.errorMsg = "";
      } else {
        this.errorMsg = "Obat sudah habis";
      }
    },
  },
};
</script>

<style scoped src="../../public/styles/pemberian_obat.css">
</style>