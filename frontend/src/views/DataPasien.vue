<template>
  <div class="app">
    <div class="back">
      <img src="img/arrow.png" alt />
      <router-link to="/dashboard-pasien">kembali ke halaman utama</router-link>
    </div>
    <div class="container">
      <div class="profil">
        <div class="foto-user">
          <div class="foto">
            <img :src="avatar" alt />
          </div>
          <div class="edit-foto">
            <a href="#" style="position: relative; z-index: 10;">ubah foto profil</a>
          </div>
        </div>
        <div class="nama">
          <!--nama dan status akun sesuai dengan user yang login/register-->
          <div class="username">{{ nama }}</div>
          <div class="account">Unverfied account</div>
        </div>
      </div>
    </div>
    <div class="img">
      <img src="img/bg.png" alt />
    </div>
    <div class="form">
      <div class="info">
        <h1 class="label">username</h1>

        <h1 class="content">{{ username }}</h1>
        <h1 class="label">no telepon</h1>
        <h1 class="content">{{ telepon }}</h1>
        <h1 class="label">nama lengkap</h1>
        <h1 class="content">{{ nama }}</h1>

        <h1 class="label">alamat</h1>

        <h1 class="content">{{ alamat }}</h1>
        <h1 class="label">tanggal lahir</h1>

        <div class="ttl content">
          <span>{{ tanggalLahir[2] }}</span>
          <span>{{ tanggalLahir[1] }}</span>
          <span>{{ tanggalLahir[0] }}</span>
        </div>

        <h1 class="label">tinggi badan</h1>

        <h1 class="content">{{ tinggi }} cm</h1>
        <h1 class="label">berat badan</h1>

        <h1 class="content">{{ berat }} kg</h1>
        <h1 class="label">riwayat penyakit</h1>

        <h1 class="content">
          <span
            v-for="(penyakit,index) in riwayat"
            :key="index"
            class="penyakit"
          >{{riwayat[index]}}&nbsp;</span>
        </h1>
        <button class="ubah" @click="$router.push({path : '/edit-data-pasien'})">
          <h2>ubah data</h2>
          <img src="img/arrow.png" alt />
        </button>
      </div>
      <div class="edit">
        <router-link to="/account">
          <h2>kelola akun</h2>
        </router-link>
        <img src="img/arrow.png" alt />
      </div>
    </div>

    <div class="bottom">
      <div class="tulisan">
        <p id="1">kenapa kami tanyakan tinggi dan berat badan?</p>
        <p id="2">
          tinggi badan dan berat badan digunakan untuk dosis yang pas buat
          kamu
        </p>
      </div>
      <div class="kanan">
        <router-link to="/">
          <img id="logo" src="img/kliniku.png" alt />
        </router-link>
        <img id="bunga" src="img/bunga.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      nama: "",
      tanggalLahir: [],
      alamat: "",
      tinggi: "",
      berat: "",
      riwayat: [],
      avatar: "",
      telepon: "",
      username: "",
    };
  },
  created() {
    let token = localStorage.getItem("token");
    axios
      .get("/getUser", {
        headers: {
          Authorization: "Barier " + token,
        },
      })
      .then((res) => {
        console.log(res);
        this.nama = res.data.user.name;
        this.alamat = res.data.user.alamat;
        this.tinggi = res.data.user.tinggi;
        this.berat = res.data.user.berat;
        this.tanggalLahir = this.monthName(res.data.user.ttl);
        this.riwayat = res.data.user.riwayat;
        this.telepon = res.data.user.telepon;
        this.username = res.data.user.username;
        this.avatar = "http://localhost:5000/" + res.data.user.avatar;
      })
      .catch((err) => console.log(err));
  },
  methods: {
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
  },
};
</script>

<style scoped src="../../public/styles/data_pasien.css">
</style>