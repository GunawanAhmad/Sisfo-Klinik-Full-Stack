<template>
  <div class="app">
    <nav>
      <div class="flexlogo">
        <div class="logo">
          <router-link to="/">
            <img src="../../public/img/kliniku.svg" alt="logo" />
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
        <h1>riwayat</h1>
        <p>riwayat konsultasi kamu ada disini</p>
      </div>
      <div class="riwayat" v-if="isShow">
        <p
          @click="loadDetail(index)"
          v-for="(data,index) in riwayat"
          :key="data._id"
        >{{ date(data.tanggal) }}</p>
      </div>
      <div class="riwayat-detail" v-else>
        <h4 class="tanggal">{{ tanggal }}</h4>
        <h3 class="keluhan-title">Keluhan</h3>
        <p class="keluhan">{{ keluhan }}</p>
        <h3 class="tanggapan-title">Tanggapan Dokter</h3>
        <p class="tanggapan">{{ tanggapan }}</p>
        <h4 class="obat-title">Obat</h4>
        <div class="obat" v-for="obat in obat" :key="obat._id">
          <p class="nama">{{ obat.obat }}</p>
          <p class="jumlah">{{ obat.quantity }}</p>
          <p class="catatan">{{ obat.catatan }}</p>
        </div>
      </div>
      <div class="dokter">
        <img src="../../public/img/riwayat.png" alt />
      </div>
    </div>

    <div class="wave" ref="waveImg">
      <img src="../../public/img/wave2.png" alt />
    </div>
    <div class="dot">
      <img src="../../public/img/dot.png" alt />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { logout } from "../../mixin";
export default {
  mixins: [logout],
  data() {
    return {
      isShow: true,
      username: "",
      avatar: "",
      riwayat: [],
      keluhan: "",
      tanggapan: "",
      obat: [],
      tanggal: "",
    };
  },

  methods: {
    date(detail) {
      console.log(detail);
      let dt = this.monthChange(detail.slice(4, 8).replace(/\s/g, ""));
      return detail.slice(8, 11) + dt + detail.slice(10, 16);
    },
    switchPage() {
      this.isShow = !this.isShow;
      this.$refs.waveImg.classList.toggle("hidden");
    },
    loadDetail(index) {
      this.switchPage();
      let detail = this.riwayat[index];
      this.keluhan = detail.keluhan;
      this.tanggapan = detail.catatan;
      this.obat = detail.obat;
      let dt = this.monthChange(detail.tanggal.slice(4, 8).replace(/\s/g, ""));
      this.tanggal =
        detail.tanggal.slice(8, 11) + dt + detail.tanggal.slice(10, 16);
      console.log(this.tanggal);
    },
    showMenu() {
      const help = document.querySelector(".help");
      const activity = document.querySelector(".activity");
      help.classList.toggle("show");
      activity.classList.toggle("show");
    },
    monthChange(month) {
      let name;

      switch (month) {
        case "Jan":
          name = "Januari";
          break;
        case "Feb":
          name = "Februari";
          break;
        case "Mar":
          name = "Maret";
          break;
        case "Apr":
          name = "April";
          break;
        case "May":
          name = "Mei";
          break;
        case "Jun":
          name = "Juni";
          break;
        case "Jul":
          name = "Juli";
          break;
        case "Aug":
          name = "Agustus";
          break;
        case "Sep":
          name = "September";
          break;
        case "Oct":
          name = "Oktober";
          break;
        case "Nov":
          name = "September";
          break;
        case "Dec":
          name = "Desember";
          break;
        default:
          name = month;
      }
      return name;
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
      .get("/get-riwayat", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);

        this.riwayat = res.data.konsul;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped src="../../public/styles/riwayat.css">
</style>