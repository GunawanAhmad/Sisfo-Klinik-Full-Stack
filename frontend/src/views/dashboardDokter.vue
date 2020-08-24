<template>
  <div class="app">
    <div class="logo">
      <router-link to="/">
        <img src="../../public/img/kliniku.svg" alt />
      </router-link>
    </div>
    <div class="wave">
      <img src="../../public/img/wave3.png" alt id="waveleft" />
      <img src="../../public/img/dokter2.png" alt id="waveright" />
    </div>
    <div class="container">
      <div class="teks">
        <h1>hai dok!</h1>
        <p>tetap semangat dan semoga sehat selalu</p>
      </div>
      <div class="account">
        <div class="foto">
          <div class="photo" v-bind:style="{ backgroundImage: 'url(' + avatar + ')' }"></div>
          <p>
            <router-link to="/account" class="kelola-akun">
              <p>kelola akun</p>
              <img src="../../public/img/arrow.png" alt />
            </router-link>
          </p>
        </div>
        <div class="user-info">
          <!--Nama Dokter da spesialisasi di sesuaikan-->
          <h1 id="nama">{{ nama }}</h1>
          <p id="spesialis">dokter umum</p>
        </div>
      </div>
      <div class="fungsi">
        <div class="daftar hidden">
          <span @click="showPasien('.daftar', '.daftar-user')">daftar pasien</span>
          <div class="daftar-user hidden">
            <div
              class="user"
              v-for="(user,index) in daftarPasien"
              :key="index"
              @click="goToForm(index)"
              style="cursor:pointer;"
            >
              <div class="info">
                <h2>{{ user.userId.name }}</h2>
                <h4>{{ user.tanggal.slice(4, 15) }}</h4>
              </div>
              <img src="../../public/img/arrow2.png" alt />
            </div>
            <router-link to="/daftar-pasien" class="lain" v-if="daftarPasien.length > 0">lainnya</router-link>
          </div>
        </div>
        <div class="riwayat hidden">
          <span @click="showPasien('.riwayat', '.riwayat-user')">riwayat pemeriksaan</span>
          <div class="riwayat-user hidden">
            <div
              class="user"
              v-for="(user,index) in riwayatPemeriksaan"
              :key="index"
              @click="goToFormm(index)"
              style="cursor:pointer;"
            >
              <div class="info">
                <h2>{{ user.userId.name }}</h2>
                <h4>{{ user.tanggal.slice(4, 15) }}</h4>
              </div>
              <img src="../../public/img/arrow2.png" alt />
            </div>
            <router-link
              to="/daftar-pasien"
              class="lain"
              v-if="riwayatPemeriksaan.length > 0"
            >lainnya</router-link>
          </div>
        </div>
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
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        this.nama = res.data.user.name;
        this.avatar = axios.defaults.baseURL + "/" + res.data.user.avatar;
      });

    axios
      .get("/getKonsul", {
        headers: {
          Authorization: "bearer " + token,
        },
      })
      .then((res) => {
        this.daftarKonsulFilter(res.data.konsul);
      });
  },
  data() {
    return {
      nama: "",
      avatar: "",
      daftarPasien: [],
      riwayatPemeriksaan: [],
    };
  },
  methods: {
    showPasien(class1, class2) {
      const daftar = document.querySelector(class1);
      daftar.classList.toggle("hidden");
      const user = document.querySelector(class2);
      user.classList.toggle("hidden");
      const span = document.querySelector(`${class1} span`);
      span.classList.toggle("hidden");
    },
    goToForm(index) {
      let id = this.daftarPasien[index]._id;
      this.$router.push({ path: "/dokter/form-pemeriksaan-pasien/" + id });
    },
    goToFormm(index) {
      let id = this.riwayatPemeriksaan[index]._id;
      this.$router.push({ path: "/dokter/form-pemeriksaan-pasien/" + id });
    },
    daftarKonsulFilter(konsul) {
      for (let i = 0; i < konsul.length; i++) {
        if (konsul[i].telahDiperiksa) {
          this.riwayatPemeriksaan.push(konsul[i]);
        } else {
          this.daftarPasien.push(konsul[i]);
        }
      }
    },
  },
};
</script>

<style scoped src="../../public/styles/dashboard_dokter.css">
</style>