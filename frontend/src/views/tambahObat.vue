<template>
  <div class="vue">
    <div class="container-loader hide" ref="loader">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
    <div class="app" ref="app">
      <nav>
        <div class="flexlogo">
          <div class="back">
            <img src="../../public/img/arrow.png" alt />
            <router-link to="/daftar-obat">
              <p>kembali</p>
            </router-link>
          </div>
          <div class="logo">
            <router-link to="/">
              <img src="../../public/img/kliniku.png" alt />
            </router-link>
          </div>
        </div>
        <h1>tambah obat</h1>
      </nav>

      <div class="container">
        <div class="form">
          <div class="nama section">
            <label for="nama" class="label">Nama obat</label>
            <input type="text" name="nama" class="input" v-model="namaObat" />
          </div>

          <form action class="satuan section">
            <label for="satuan" class="label">Satuan</label>
            <select name="satuan" id="satuan" class="input">
              <option value="botol">botol</option>
              <option value="pcs">pcs</option>
              <option value="tube">tube</option>
              <option value="stripe">stripe</option>
              <option value="pack">pack</option>
              <option value="tablet">tablet</option>
            </select>
          </form>
          <div class="jumlah section">
            <label for="jumlah" class="label">Jumlah</label>
            <input type="number" name="jumlah" class="input" v-model="jumlah" />
          </div>
          <div class="tombol section">
            <label class="label"></label>
            <button class="input" @click="postObat">TAMBAH</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      namaObat: "",
      jumlah: 0,
    };
  },
  methods: {
    postObat() {
      this.$refs.loader.classList.toggle("hide");
      this.$refs.app.classList.toggle("hide");
      let token = localStorage.getItem("token");
      const satuan = document.querySelector("#satuan").value;
      const body = {
        namaObat: this.namaObat,
        satuan: satuan,
        jumlah: this.jumlah,
      };
      axios
        .post("/staff/tambah-obat", body, {
          headers: {
            Authorization: "Barier " + token,
          },
        })
        .then((res) => {
          console.log(res);

          this.$router.push({ path: "/daftar-obat" });
          this.$refs.loader.classList.toggle("hide");
          this.$refs.app.classList.toggle("hide");
        })
        .catch((err) => {
          this.$refs.loader.classList.toggle("hide");
          this.$refs.app.classList.toggle("hide");
          console.log(err);
        });
    },
  },
};
</script>

<style scoped src="../../public/styles/tambah_obat.css">
</style>