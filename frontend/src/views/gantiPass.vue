<template>
  <div class="vue">
    <div class="container-loader hide" ref="loader">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
    <div class="app" ref="app">
      <div class="back">
        <img src="../../public/img/arrow.png" alt />
        <router-link to="/account">kembali</router-link>
      </div>
      <div class="container">
        <div class="profil">
          <div class="foto-user" v-bind:style="{ backgroundImage: 'url(' + avatar + ')' }"></div>
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
          <div class="label">password lama</div>
          <input
            type="password"
            class="content"
            placeholder="tulis password lama kamu..."
            v-model="passwordLama"
          />
          <div class="ubah-username label">
            <p>password baru</p>
          </div>
          <div class="content">
            <input type="password" placeholder="password baru kamu..." v-model="passwordBaru" />
          </div>
          <div class="label">konfirmasi password baru</div>
          <div class="content">
            <input type="password" placeholder="konfirmasi password..." v-model="konfirPassword" />
          </div>

          <div @click="gantiPassword" class="password label">
            <p>simpan</p>
            <img src="../../public/img/arrow.png" alt />
          </div>

          <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
        </div>
      </div>

      <div class="kanan">
        <router-link to="/">
          <img id="logo" src="../../public/img/kliniku.svg" alt />
        </router-link>
        <img id="bunga" src="../../public/img/bunga.svg" alt />
      </div>
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
      passwordLama: "",
      passwordBaru: "",
      konfirPassword: "",
      errorMsg: "",
    };
  },
  methods: {
    gantiPassword() {
      this.$refs.loader.classList.toggle("hide");
      this.$refs.app.classList.toggle("hide");
      let body = {
        newPassword: this.passwordBaru,
        oldPassword: this.passwordLama,
        confirmPassword: this.konfirPassword,
        username: this.username,
      };
      console.log(body);
      let token = localStorage.getItem("token");
      axios
        .post("/change-password", body, {
          headers: {
            Authorization: "Barier " + token,
          },
        })
        .then((res) => {
          console.log(res);
          this.$refs.loader.classList.toggle("hide");
          this.$refs.app.classList.toggle("hide");
          this.$router.push({ path: "/account" });
        })
        .catch((err) => {
          console.log(err.response);
          this.$refs.loader.classList.toggle("hide");
          this.$refs.app.classList.toggle("hide");
          this.errorMsg =
            err.response.data.message || err.response.data.errors[0].msg;
        });
    },
  },
};
</script>

<style scoped src="../../public/styles/ganti_password.css">
</style>