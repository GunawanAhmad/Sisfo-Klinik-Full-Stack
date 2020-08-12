<template>
  <div class="app">
    <nav>
      <div class="flexlogo">
        <div class="logo">
          <router-link to="/">
            <img src="img/kliniku.png" alt />
          </router-link>
        </div>
        <div class="back">
          <img src="img/arrow.png" alt />
          <router-link to="dashboard-pasien">
            <p>kembali ke halaman utama</p>
          </router-link>
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

    <div class="teks">
      <h1>konsultasi</h1>
      <p>kamu punya keluhan apa? sini biar kami bantu</p>
    </div>

    <div class="container">
      <div class="img">
        <img src="img/konsultasi.png" alt />
      </div>
      <div class="form">
        <div class="table">
          <div class="kiri">
            <p>tinggi badan</p>
            <p>berat badan</p>
            <p>spesialis</p>
            <p>keluhan</p>
          </div>
          <div class="kanan">
            <!--tinggi sesuai dengan username yang sudah login/register-->
            <p id="tinggi">{{ tinggi }} cm</p>

            <!--berat sesuai dengan username yang sudah login/register-->
            <p id="berat">{{ berat }} kg</p>

            <!--spesialis sesuai dengan username yang sudah login/register-->
            <p id="spesialis">umum</p>
            <p id="zero">a</p>
          </div>
          <p id="salah">
            <router-link to="/edit-data-pasien">kelola data ></router-link>
          </p>
        </div>
        <form action class="keluhan">
          <div>
            <textarea
              name="keluhan"
              id="keluhan"
              cols="30"
              rows="10"
              v-model="keluhan"
              placeholder="keluhan meliputi  gejala, sejak kapan mengalami keluhan,  metode penyembuhan 
yang pernah dicoba, dsb."
            ></textarea>
            <p class="error">{{ errorMsg }}</p>
          </div>
          <div class="submit">
            <button type="submit" @click="submitKonsul">KONSUL</button>
          </div>
        </form>
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

        this.username = res.data.user.username;
        this.berat = res.data.user.berat;
        this.tinggi = res.data.user.tinggi;
        this.avatar = "http://localhost:5000/" + res.data.user.avatar;
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.data.message === "jwt expired") {
          this.$router.push({ path: "/login" });
        }
      });
  },
  data() {
    return {
      berat: "",
      tinggi: "",
      avatar: "",
      username: "",
      keluhan: "",
      errorMsg: "",
    };
  },
  methods: {
    submitKonsul(e) {
      e.preventDefault();
      let token = localStorage.getItem("token");
      let body = {
        keluhan: this.keluhan,
      };
      axios
        .post("/pasien/konsultasi", body, {
          headers: {
            Authorization: "Barier " + token,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.response);
          this.errorMsg = err.response.data.message;
        });
    },
    showMenu() {
      const help = document.querySelector(".help");
      const activity = document.querySelector(".activity");
      help.classList.toggle("show");
      activity.classList.toggle("show");
    },
  },
};
</script>

<style scoped src="../../public/styles/konsultasi.css">
</style>