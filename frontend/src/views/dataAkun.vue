<template>
  <div class="app">
    <div class="back">
      <img src="../../public/img/arrow.png" alt />
      <router-link to="/dashboard-pasien">kembali ke halaman utama</router-link>
    </div>
    <div class="container">
      <div class="profil">
        <div class="foto-user" v-bind:style="{ backgroundImage: 'url(' + avatar + ')' }"></div>>
        <div class="nama">
          <!--nama dan status akun sesuai dengan user yang login/register-->
          <div class="username">{{ name }}</div>
          <div class="account">Unverfied account</div>
        </div>
      </div>
    </div>
    <div class="img">
      <img src="../../public/img/bg.png" alt />
    </div>
    <div class="form">
      <div class="info">
        <div class="label">username</div>
        <div class="content">{{ username }}</div>
        <router-link to="/ganti-username" class="ubah-username label">
          <p>ubah username</p>
          <img src="../../public/img/arrow.png" alt />
        </router-link>
        <div class="content"></div>
        <div class="label">password</div>
        <div class="content">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <div class="ubah-password label">
          <router-link to="/ganti-password">ubah password</router-link>
          <img src="../../public/img/arrow.png" alt />
        </div>
        <div class="content"></div>
      </div>
      <div class="edit">
        <router-link to="/data-pasien">
          <h2>kelola data diri</h2>
        </router-link>
        <img src="../../public/img/arrow.png" alt />
      </div>
    </div>

    <div class="kanan">
      <router-link to="/">
        <img id="logo" src="../../public/img/kliniku.svg" alt />
      </router-link>
      <img id="bunga" src="../../public/img/bunga.svg" alt />
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
          Authorization: "Barier " + token,
        },
      })
      .then((res) => {
        console.log(res);
        this.username = res.data.user.username;
        this.name = res.data.user.name;
        this.avatar = axios.defaults.baseURL + "/" + res.data.user.avatar;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      username: "",
      name: "",
      avatar: "",
    };
  },
};
</script>

<style scoped src="../../public/styles/data_diri.css">
</style>