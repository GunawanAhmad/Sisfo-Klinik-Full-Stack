<template>
  <div class="app">
    <div class="logo">
      <router-link to="/">
        <img src="img/kliniku.png" alt />
      </router-link>
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
        <div class="user" v-for="(user,index) in konsul" :key="user._id">
          <div class="teks">
            <!--Nama, tanggal dan keluhan disesuaikan-->
            <h1 class="nama">{{ user.userId.name }}</h1>
            <p class="tanggal">{{ user.tanggal.slice(4,15) }}</p>
            <p class="keluhan">{{ user.keluhan }}</p>

            <!--Riwayat sakit disesuaikan-->
            <div class="sakit">
              <div
                class="item"
                v-for="(riwayat,index) in user.userId.riwayat"
                :key="index"
              >{{ riwayat}}</div>
            </div>
            <div class="tombol" @click="tanggapi(index)">
              <button>TANGGAPI</button>
            </div>
          </div>
        </div>
        <!--Jumlah Pasien disesuaikan-->
      </div>
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
        console.log(this.konsul);
        console.log(res);
      })
      .catch((err) => console.log(err));
  },
  methods: {
    tanggapi(index) {
      let id = this.konsul[index]._id;
      this.$router.push({ path: "/dokter/form-pemeriksaan-pasien/" + id });
    },
  },
};
</script>

<style scoped src="../../public/styles/daftar_pasien.css">
</style>