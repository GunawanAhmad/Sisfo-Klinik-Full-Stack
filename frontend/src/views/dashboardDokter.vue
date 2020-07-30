<template>
  <div class="app">
    <div class="logo">
      <a href="index.html">
        <img src="img/kliniku.png" alt />
      </a>
    </div>
    <div class="wave">
      <img src="img/wave3.png" alt id="waveleft" />
      <img src="img/dokter2.png" alt id="waveright" />
    </div>
    <div class="container">
      <div class="teks">
        <h1>hai dok!</h1>
        <p>tetap semangat dan semoga sehat selalu</p>
      </div>
      <div class="account">
        <div class="foto">
          <div class="photo">
            <img :src="avatar" alt />
          </div>
          <p>
            <a href>
              kelola akun
              <span class="kelola">&nbsp; ></span>
            </a>
          </p>
        </div>
        <div class="user-info">
          <!--Nama Dokter da spesialisasi di sesuaikan-->
          <h1 id="nama">{{ nama }}</h1>
          <p id="spesialis">dokter umum</p>
        </div>
      </div>
      <div class="fungsi">
        <div class="daftar hidden">
          <span @click="showPasien">daftar pasien</span>
          <div class="daftar-user hidden">
            <div class="user" v-for="(user,index) in daftarPasien" :key="index">
              <div class="info">
                <h2>{{ user.userId.name }}</h2>
                <h4>{{ user.tanggal.slice(4, 15) }}</h4>
              </div>
              <img src="img/arrow2.png" alt />
            </div>
          </div>
        </div>
        <div class="riwayat hidden">
          <span @click="showRiwayat">riwayat pemeriksaan</span>
          <div class="riwayat-user hidden">
            <div class="user">
              <div class="info">
                <h2>Nama</h2>
                <h4>tanggal</h4>
              </div>
              <img src="img/arrow2.png" alt />
            </div>
            <div class="user">
              <div class="info">
                <h2>Nama</h2>
                <h4>tanggal</h4>
              </div>
              <img src="img/arrow2.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    let token = localStorage.getItem("token");
    axios
      .get("/getUser", {
        headers: {
          Authorization: "Barier " + token
        }
      })
      .then(res => {
        console.log(res);
        this.nama = res.data.user.name;
        this.avatar = "http://localhost:5000/" + res.data.user.avatar;
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("/getKonsul", {
        headers: {
          Authorization: "Barier " + token
        }
      })
      .then(res => {
        this.daftarPasien = res.data.konsul;
        console.log(this.daftarPasien);
      })
      .catch(err => console.log(err.response));
  },
  data() {
    return {
      nama: "",
      avatar: "",
      daftarPasien: []
    };
  },
  methods: {
    showPasien() {
      const daftar = document.querySelector(".daftar");
      daftar.classList.toggle("hidden");
      const user = document.querySelector(".daftar-user");
      user.classList.toggle("hidden");
      const span = document.querySelector(".daftar span");
      span.classList.toggle("hidden");
    },
    showRiwayat() {
      const riwayat = document.querySelector(".riwayat");
      riwayat.classList.toggle("hidden");
      const user = document.querySelector(".riwayat-user");
      user.classList.toggle("hidden");
      const span = document.querySelector(".riwayat span");
      span.classList.toggle("hidden");
    }
  }
};
</script>

<style scoped src="../../public/styles/dashboard_dokter.css">
</style>