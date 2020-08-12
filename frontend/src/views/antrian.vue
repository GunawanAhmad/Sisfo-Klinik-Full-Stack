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
        <h1>antrian</h1>
        <p>cek antrian kamu udah sampai mana</p>

        <div class="info">
          <h6>keluhan {{ tanggal[1]}} {{ tanggal[0] }} {{ tanggal[2] }}</h6>
          <h4>anda berada pada</h4>
          <h4>
            antrian ke
            <span>{{ antrian }}</span>
          </h4>
        </div>
      </div>
      <div class="dokter">
        <img src="img/dokter.png" alt />
      </div>
    </div>

    <div class="wave">
      <img src="img/wave2.png" alt />
    </div>
    <div class="dot">
      <img src="img/dot.png" alt />
    </div>
    <div class="bunga">
      <img src="img/bunga.png" alt />
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
    let one = "/getUser";
    let two = "/antrian";
    let data = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    const requestOne = axios.get(one, data);
    const requestTwo = axios.get(two, data);

    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          // use/access the results
          const responseOne = responses[0];
          const responseTwo = responses[1];
          this.username = responseOne.data.user.username;
          this.avatar = "http://localhost:5000/" + responseOne.data.user.avatar;
          this.antrian = responseTwo.data.index;
          this.tanggal = responseTwo.data.data.tanggal.slice(4, 15).split(" ");
          console.log(responseTwo);
        })
      )
      .catch((err) => {
        // react on errors.
        // console.log(err.response);
        console.log(err);
        if (err.response.data.message === "jwt expired") {
          this.$router.push({ path: "/login" });
        }
      });
  },
};
</script>

<style scoped src="../../public/styles/antrian.css">
</style>