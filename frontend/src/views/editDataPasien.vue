<template>
  <div class="app">
    <!-- <div class="back">
      <img src="img/arrow.png" alt />
      <a href="dashboard_pasien.html">kembali ke halaman utama</a>
    </div>-->
    <div class="container">
      <div class="back">
        <img src="../../public/img/arrow.png" alt />
        <router-link to="/account">kembali</router-link>
      </div>
      <div class="profil">
        <div class="foto-user">
          <div class="foto">
            <img id="sourceImg" :src="avatar" />
          </div>
          <div class="edit-foto">
            <input type="file" @change="onFileSelected" />
            <p
              style="position: relative; z-index: 10; cursor:pointer;"
              @click="getFile"
            >ubah foto profil</p>
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
      <img src="img/bg.png" alt />
    </div>
    <form action>
      <div class="info">
        <h1 class="label">username</h1>
        <h1 class="content user-username">{{ username }}</h1>

        <h1 class="label">nama lengkap</h1>
        <input type="text" class="content" v-model="name" placeholder="nama" />

        <h1 class="label">alamat</h1>
        <input type="text" class="content" v-model="address" placeholder="alamat" />

        <h1 class="label">tanggal lahir</h1>
        <input type="date" class="content" v-model="birthday" placeholder="tanggal lahir" />

        <h1 class="label">tinggi badan</h1>
        <div class="content tinggi">
          <input type="number" v-model="height" placeholder="tinggi badan" />
          <span>cm</span>
        </div>

        <h1 class="label berat">berat badan</h1>
        <div class="content berat">
          <input type="number" class="content" v-model="weight" placeholder="berat badan" />
          <span>Kg</span>
        </div>

        <h1 class="label">riwayat penyakit</h1>
        <h1 class="content">
          <input
            type="text"
            v-model="riwayatInput"
            class="before"
            v-if="isInput || riwayat.length <= 0 "
            placeholder="riwayat penyakit"
            @change="changeInput"
          />
          <span class="after" v-else @click="inputing">
            <span
              v-for="(penyakit,index) in riwayat"
              :key="index"
              class="penyakit"
            >{{riwayat[index]}}&nbsp;</span>
          </span>
        </h1>
        <div class="label" id="ubah" @click="editData">
          <h2>Simpan</h2>
          <img src="img/arrow.png" alt />
        </div>
      </div>
      <div class="edit">
        <router-link to="/account">
          <h2>kelola akun</h2>
        </router-link>
        <img src="img/arrow.png" alt />
      </div>
    </form>
    <div class="bottom">
      <div class="tulisan">
        <p id="1">kenapa kami tanyakan tinggi dan berat badan?</p>
        <p id="2">
          tinggi badan dan berat badan digunakan untuk dosis yang pas buat
          kamu
        </p>
      </div>
      <div class="kanan">
        <router-link to="/">
          <img id="logo" src="img/kliniku.png" alt />
        </router-link>
        <img id="bunga" src="img/bunga.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    editData() {
      const formData = new FormData();
      formData.append("nama", this.name);
      formData.append("alamat", this.address);
      formData.append("ttl", this.birthday);
      formData.append("tinggi", this.height);
      formData.append("berat", this.weight);
      formData.append("avatar", this.file);
      formData.append("riwayat", this.riwayat);
      let token = localStorage.getItem("token");
      axios
        .post("/edit-data-pasien", formData, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          console.log(res);
          this.$router.push({ path: "/konsultasi" });
        })
        .catch((err) => console.log(err));
    },
    getFile() {
      let input = document.querySelector(".edit-foto input").click();
      console.log(input);
    },
    onFileSelected(e) {
      this.file = e.target.files[0];
      let img = document.getElementById("sourceImg");
      img.src = URL.createObjectURL(this.file);
    },
    inputing() {
      console.log("asd");
      this.isInput = !this.isInput;
    },
    changeInput() {
      this.isInput = !this.isInput;
      this.riwayat = this.riwayatInput.split(",");
      console.log(this.riwayat.length);
    },
  },
  data() {
    return {
      file: "",
      name: "",
      address: "",
      height: 0,
      weight: 0,
      birthday: "",
      avatar: "",
      username: "",
      riwayatInput: "",
      riwayat: [],
      isInput: true,
      id: "",
    };
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
        console.log(res);
        this.id = res.data.user._id;
        this.name = res.data.user.name;
        this.address = res.data.user.alamat;
        this.height = res.data.user.tinggi;
        this.weight = res.data.user.berat;
        this.birthday = res.data.user.ttl || "";
        this.avatar = res.data.user.avatar || "";
        this.username = res.data.user.username;
        this.riwayat = res.data.user.riwayat;
        this.riwayatInput = this.riwayat.join();
        this.avatar = "http://localhost:5000/" + res.data.user.avatar;
        if (this.riwayat.length > 0) this.isInput = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped src="../../public/styles/edit_data_pasien.css">
</style>