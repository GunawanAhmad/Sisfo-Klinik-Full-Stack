<template>
  <div class="app">
    <nav>
      <div class="flexlogo">
        <div class="logo">
          <router-link to="/">
            <img src="../../public/img/kliniku.svg" alt />
          </router-link>
        </div>
        <div class="back">
          <img src="../../public/img/arrow.png" alt />
          <router-link to="/dashboard-pasien">
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
          <div class="foto-user" v-bind:style="{ backgroundImage: 'url(' + avatar + ')' }"></div>
          <div class="data">
            <router-link to="/edit-data-pasien">kelola data</router-link>
            <img src="../../public/img/arrow.png" alt />
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="teks">
        <h1>antrian</h1>
        <p>cek antrian kamu udah sampai mana</p>

        <div class="info" v-if="antrian">
          <h6>keluhan {{ tanggal[1]}} {{ tanggal[0] }} {{ tanggal[2] }}</h6>
          <h4>anda berada pada</h4>
          <h4>
            antrian ke
            <span>{{ antrian }}</span>
          </h4>
        </div>
        <div class="msg" v-else>
          <h4>kamu belum melakukan konsultasi</h4>
        </div>
      </div>
      <div class="dokter">
        <img src="../../public/img/dokter.png" alt />
      </div>
    </div>

    <div class="wave">
      <img src="../../public/img/wave2.png" alt />
    </div>
    <div class="dot">
      <img src="../../public/img/dot.png" alt />
    </div>
    <div class="bunga">
      <img src="../../public/img/bunga.svg" alt />
    </div>
  </div>
</template>

<script>
import { logout } from "../../mixin";
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      avatar: "",
      id: "",
      antrian: "",
      tanggal: [],
    };
  },
  mixins: [logout],
  methods: {
    showMenu() {
      const help = document.querySelector(".help");
      const activity = document.querySelector(".activity");
      help.classList.toggle("show");
      activity.classList.toggle("show");
    },
    test() {
      axios
        .get("/test/" + this.id)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    monthName(mon) {
      let month = mon.slice(6, 7);
      if (month[0] === "0") {
        month.slice(1);
      }
      let monthName = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "November",
        "December",
      ];
      return [mon.slice(0, 4), monthName[month], mon.slice(8, 10)];
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
        this.username = res.data.user.username;
        this.avatar = axios.defaults.baseURL + "/" + res.data.user.avatar;
      });

    axios
      .get("/antrian", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        this.antrian = res.data.index;
      });
  },
};
</script>

<style scoped src="../../public/styles/antrian.css">
</style>