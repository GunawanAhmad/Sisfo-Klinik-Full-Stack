<template>
  <div class="app">
    <div class="logo">
      <a href="index.html">
        <img src="img/kliniku.png" alt />
      </a>
    </div>
    <div class="wave">
      <img src="../../public/img/wave3.png" alt id="waveleft" />
    </div>
    <div class="back">
      <img src="../../public/img/arrow.png" alt />
      <router-link to="/dashboard-dokter">
        <p>kembali</p>
      </router-link>
    </div>

    <div class="title">daftar pasien</div>
    <div class="container">
      <div class="daftar-pasien">
        <div class="user" v-for="user in konsul" :key="user._id">
          <div class="teks">
            <!--Nama, tanggal dan keluhan disesuaikan-->
            <h1 id="nama">{{ user.userId.name }}</h1>
            <p id="tanggal">{{ user.tanggal.slice(4,15) }}</p>
            <p id="keluhan">{{ user.keluhan }}</p>

            <!--Riwayat sakit disesuaikan-->
            <div class="sakit">
              <span v-for="(riwayat,index) in user.userId.riwayat" :key="index">{{ riwayat}}</span>
            </div>
            <div class="tombol">
              <button>TANGGAPI</button>
            </div>
          </div>
        </div>
        <!--Jumlah Pasien disesuaikan-->
      </div>
    </div>
    <div class="logo-bot">
      <router-link to="/">
        <img src="../../public/img/kliniku.png" alt />
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      konsul: [],
    };
  },
  created() {
    let token = localStorage.getItem("token");
    axios
      .get("/getKonsul", {
        headers: {
          Authorization: "Barier " + token,
        },
      })
      .then((res) => {
        this.konsul = res.data.konsul;
        console.log(res);
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped src="../../public/styles/daftar_pasien.css">
</style>