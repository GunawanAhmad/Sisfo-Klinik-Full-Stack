<template>
  <div class="app">
    <nav>
      <div class="logo">
        <router-link to="/">
          <img src="img/kliniku.png" alt />
        </router-link>
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
            <router-link to="/data-pasien">kelola data</router-link>
            <img src="../../public/img/arrow.png" alt />
          </div>
        </div>
      </div>
    </nav>
    <div class="wave">
      <img src="img/wave2.png" alt />
    </div>
    <div class="halo">
      <!--nama sesuai dengan username yang sudah login/register-->
      <h1 id="nama">Halo Gunawan!</h1>

      <p>ada yang bisa kami bantu?</p>
    </div>
    <div class="fungsi">
      <router-link to="/konsultasi">
        <div class="konsultasi">
          <img src="img/heart.png" alt />
          <h1>konsultasi</h1>
          <p>kamu punya keluhan apa? kami siap bantu.</p>
        </div>
      </router-link>

      <div class="antrian">
        <router-link to="/antrian">
          <img src="img/antri.png" alt />
          <h1>antrian</h1>
          <p>cek antrian kamu udah sampai mana</p>
        </router-link>
      </div>
      <router-link to="/riwayat">
        <div class="riwayat">
          <img src="img/frame.png" alt />
          <h1>riwayat</h1>
          <p>riwayat konsultasi kamu ada di sini</p>
        </div>
      </router-link>

      <div class="hasil">
        <router-link to="/hasil-pemeriksaan">
          <img src="img/list.png" alt />
          <h1>hasil pemeriksaan</h1>
          <p>cek hasil pemeriksaan dari dokter</p>
        </router-link>
      </div>
    </div>
    <div class="dot">
      <img src="img/dot.png" alt />
    </div>
    <div class="suster">
      <img src="img/suster.png" alt />
    </div>
  </div>
</template>

<script>
import { logout } from "../../mixin";
import axios from "axios";
export default {
  mixins: [logout],
  methods: {
    showMenu() {
      const help = document.querySelector(".help");
      const activity = document.querySelector(".activity");
      help.classList.toggle("show");
      activity.classList.toggle("show");
    },
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
        this.username = res.data.user.username;
        this.avatar = axios.defaults.baseURL + "/" + res.data.user.avatar;
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
      username: "",
      avatar: "",
    };
  },
};
</script>

<style scoped src="../../public/styles/dashbord_pasien.css">
</style>