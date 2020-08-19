<template>
  <div class="app">
    <nav>
      <div class="flexlogo">
        <div class="logo">
          <router-link to="/">
            <img src="img/kliniku.png" alt />
          </router-link>
        </div>
        <div class="back" v-if="isFull">
          <img src="img/arrow.png" alt />
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
        <div class="help"></div>
        <div class="nama">
          <!--username dan status sesuai dengan username yang sudah login/register-->
          <h1 class="username" @click="showMenu">{{ username }}</h1>
          <p class="status">patient account</p>
          <div class="activity">
            <div class="kelola-akun" @click="$router.push({path :'/account'})">
              <p>kelola akun</p>
              <img src="../../public/img/arrow.png" alt />
            </div>
            <div class="logout" @click="logout">
              <p>logout</p>
              <img src="../../public/img/arrow.png" alt />
            </div>
          </div>
        </div>
        <div class="foto">
          <div class="foto-user">
            <img :src="avatar" alt />
          </div>
          <div class="data">
            <router-link to="/edit-data-pasien">kelola data</router-link>
            <img src="../../public/img/arrow.png" alt />
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="teks">
        <section v-if="isFull">
          <h1>hasil</h1>
          <h1>pemeriksaan</h1>
        </section>
        <h1 class="small-ver" v-else>hasil pemeriksaan</h1>
        <p>cek hasil pemeriksaan kamu dari dokter</p>
      </div>
      <div class="dokter">
        <img src="../../public/img/hasil.png" alt />
      </div>
      <div class="fungsi" v-if="isFull">
        <section v-for="konsul in konsul" :key="konsul._id" @click="switchPage">
          <div class="riwayat">
            <img src="../../public/img/frame.png" alt />
            <h1>{{ konsul.tanggal.slice(4,16) }}</h1>
            <p>
              konsultasi kamu
              sudah ditanggapi
            </p>
          </div>
        </section>
      </div>
      <div class="detail" v-else>
        <h2 class="tanggal">mar 20 2020</h2>
        <div class="diagnosis">
          <h2>diagnosis penyakit</h2>
          <p>masuk angin</p>
        </div>
        <div class="obat">
          <h2>obat</h2>
          <div class="nama">
            <p>nama</p>
            <p>2</p>
          </div>
          <div class="aturan">
            <p>aturan pakai</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fugiat.</p>
          </div>
        </div>
        <div class="catatan">
          <h2>catatan dokter</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatum veritatis molestias voluptas sapiente impedit tenetur fugit doloribus provident ea.</p>
        </div>
      </div>
    </div>

    <div class="wave">
      <img src="img/wave2.png" alt />
    </div>
    <div class="dot">
      <img src="img/dot.png" alt />
    </div>
  </div>
</template>

<script>
import { logout } from "../../mixin";
import axios from "axios";
export default {
  mixins: [logout],
  data() {
    return {
      username: "",
      avatar: "",
      konsul: [],
      isFull: true,
    };
  },
  created() {
    let token = localStorage.getItem("token");

    axios
      .get("/get-riwayat", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        this.username = res.data.konsul[0].userId.username;
        this.avatar =
          "http://localhost:5000/" + res.data.konsul[0].userId.avatar;
        this.konsul = res.data.konsul;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    showMenu() {
      const help = document.querySelector(".help");
      const activity = document.querySelector(".activity");
      help.classList.toggle("show");
      activity.classList.toggle("show");
    },
    switchPage() {
      this.isFull = !this.isFull;
    },
  },
};
</script>

<style scoped src="../../public/styles/hasil_pemeriksaan.css">
</style>