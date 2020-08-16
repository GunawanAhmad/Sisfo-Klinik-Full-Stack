<template>
  <div class="app">
    <nav>
      <div class="flexlogo">
        <div class="logo">
          <router-link to="/">
            <img src="../../public/img/kliniku.png" alt />
          </router-link>
        </div>
        <div class="back" v-if="isShow" style="cursor:pointer;">
          <img src="../../public/img/arrow.png" alt />
          <router-link to="/dashboard-pasien">
            <p>kembali ke halaman utama</p>
          </router-link>
        </div>
        <div class="back" v-else @click="switchPage" style="cursor:pointer;">
          <img src="../../public/img/arrow.png" alt />
          <a>
            <p>kembali</p>
          </a>
        </div>
      </div>
      <div class="user">
        <div class="nama">
          <!--username dan status sesuai dengan username yang sudah login/register-->
          <h1 id="user">{{ username }}</h1>
          <p id="status">Patient account</p>
        </div>
        <div class="foto">
          <div class="foto-user">
            <img :src="avatar" alt />
          </div>
          <div class="data">
            <router-link to="/edit-data-pasien">
              <p>kelola data</p>
            </router-link>
            <img src="../../public/img/arrow.png" alt />
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="teks">
        <h1>riwayat</h1>
        <p>riwayat konsultasi kamu ada disini</p>
      </div>
      <div class="riwayat" v-if="isShow">
        <p @click="switchPage">20 maret 2020</p>
        <p>20 maret 2020</p>
        <p>20 maret 2020</p>
      </div>
      <div class="riwayat-detail" v-else>
        <h4 class="tanggal">20 Maret 2020</h4>
        <h3 class="keluhan-title">Keluhan</h3>
        <p
          class="keluhan"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, illum.</p>
        <h3 class="tanggapan-title">Tanggapan Dokter</h3>
        <p
          class="tanggapan"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, voluptas.</p>
        <div class="obat">
          <p class="nama">nama Obat</p>
          <p class="jumlah">2</p>
          <p class="catatan">catatan</p>
        </div>
      </div>
      <div class="dokter">
        <img src="img/riwayat.png" alt />
      </div>
    </div>

    <div class="wave" ref="waveImg">
      <img src="img/wave2.png" alt />
    </div>
    <div class="dot">
      <img src="img/dot.png" alt />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isShow: true,
      username: "",
      avatar: "",
    };
  },
  methods: {
    switchPage() {
      this.isShow = !this.isShow;
      this.$refs.waveImg.classList.toggle("hidden");
    },
  },
  created() {
    let token = localStorage.getItem("token");
    axios
      .get("/getUser", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        this.username = res.data.user.username;
        this.avatar = "http://localhost:5000/" + res.data.user.avatar;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped src="../../public/styles/riwayat.css">
</style>