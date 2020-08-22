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
            <img src="../../public/img/kliniku.png" alt />
          </router-link>
        </div>
      </div>
    </nav>
    <div class="list">
      <div class="top">
        <div class="search">
          <input type="text" placeholder="search" v-model="filterInput" @keyup="filter" />
          <img src="../../public/img/search.png" alt />
        </div>

        <div class="stock">
          <div class="ready">
            <div class="kosong"></div>
            <p>tersedia</p>
          </div>
          <div class="notready">
            <div class="kosong"></div>
            <p>tidak tersedia</p>
          </div>
        </div>
        <h1>daftar obat</h1>
      </div>
      <div class="container">
        <button class="btn" @click="$router.push({path : '/staff/tambah-obat'})">
          tambah obat
          <span>
            <img src="../../public/img/circle-plus.png" alt />
          </span>
        </button>
        <ul class="list-obat">
          <li
            v-for="obat in list"
            :key="obat._id"
            :class="obat.jumlah > 0 ? 'ada' : 'tidak-ada'"
          >{{ obat.namaObat }}&nbsp; {{ obat.jumlah }} &nbsp;{{ obat.satuan }}</li>
        </ul>
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
      .get("/staff/daftar-obat", {
        headers: {
          Authorization: "Barier " + token,
        },
      })
      .then((res) => {
        console.log(res);
        this.list = res.data.obat;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      list: [],
      filterInput: "",
    };
  },
  methods: {
    filter() {
      let ul = document.querySelector(".list-obat");
      let li = ul.querySelectorAll("li");

      for (let i = 0; i < li.length; i++) {
        if (
          li[i].innerText
            .toUpperCase()
            .indexOf(this.filterInput.toUpperCase()) > -1
        ) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    },
  },
};
</script>

<style scoped src="../../public/styles/daftar_obat.css">
</style>