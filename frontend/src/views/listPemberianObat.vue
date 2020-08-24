<template>
  <div class="app">
    <nav>
      <div class="flexlogo">
        <div class="back">
          <img src="../../public/img/arrow.png" alt />
          <router-link to="/dashboard-staff">
            <p>kembali</p>
          </router-link>
        </div>
        <div class="logo">
          <router-link to="/">
            <img src="../../public/img/kliniku.svg" alt />
          </router-link>
        </div>
      </div>
    </nav>
    <div class="container">
      <h1>pemberian obat</h1>
      <div
        class="pasien"
        v-for="pasien in listPasien"
        :key="pasien._id"
        @click="goToForm(pasien._id)"
        style="cursor:pointer;"
      >
        <div class="nama">
          <h2>{{ pasien.userId.name }}</h2>
          <h3>{{ pasien.tanggal.slice(4,15) }}</h3>
        </div>
        <div class="img">
          <img src="../../public/img/arrow2.png" alt />
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
      .get("/konsul-belum-terobati", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        let konsul = res.data.konsul;
        this.filterPasien(konsul);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      listPasien: [],
    };
  },
  methods: {
    filterPasien(konsul) {
      for (let i = 0; i < konsul.length; i++) {
        if (konsul[i].telahDiperiksa) {
          this.listPasien.push(konsul[i]);
        }
      }
    },
    goToForm(id) {
      this.$router.push({ path: `/form-pemberian-obat/${id}` });
    },
  },
};
</script>

<style scoped src="../../public/styles/list_pemberian_obat.css">
</style>