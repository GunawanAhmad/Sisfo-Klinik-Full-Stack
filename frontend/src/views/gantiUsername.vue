<template>
  <div class="app">
    <div class="back">
      <img src="../../public/img/arrow.png" alt />
      <router-link to="/account">kembali</router-link>
    </div>
    <div class="container">
      <div class="profil">
        <div class="foto-user">
          <div class="foto">
            <img alt :src="avatar" />
          </div>
        </div>
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
        <div class="label">username lama</div>
        <div class="username-lama content">{{ username }}</div>
        <div class="ubah-username label">
          <p>username baru</p>
        </div>
        <div class="content">
          <input type="text" placeholder="tulis username kamu..." v-model="newUsername" />
        </div>
        <div class="label">password</div>
        <div class="content">
          <input type="password" placeholder="tulis password kamu..." v-model="password" />
        </div>
        <div @click="gantiUsername" class="password label">
          <p>simpan</p>
          <img src="../../public/img/arrow.png" alt />
        </div>
        <div class="content"></div>
      </div>
    </div>

    <div class="kanan">
      <router-link to="/">
        <img id="logo" src="../../public/img/kliniku.png" alt />
      </router-link>
      <img id="bunga" src="../../public/img/bunga.png" alt />
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
        console.log(err.response);
        if (err.response.data.message === "jwt expired") {
          this.$router.push({ path: "/login" });
        }
      });
  },
  data() {
    return {
      username: "",
      name: "",
      avatar: "",
      password: "",
      newUsername: "",
    };
  },
  methods: {
    gantiUsername() {
      let body = {
        newUsername: this.newUsername,
        oldUsername: this.username,
        password: this.password,
      };
      console.log(body);
      let token = localStorage.getItem("token");
      axios
        .post("/change-username", body, {
          headers: {
            Authorization: "Barier " + token,
          },
        })
        .then((res) => {
          console.log(res);
          this.$router.push({ path: "/account" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped src="../../public/styles/ganti_username.css">
</style>