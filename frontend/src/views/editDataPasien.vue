<template>
  <div class="app">
    <!-- <div class="back">
      <img src="img/arrow.png" alt />
      <a href="dashboard_pasien.html">kembali ke halaman utama</a>
    </div>-->
    <div class="container">
      <div class="profil">
        <div class="foto-user">
          <div class="foto">
            <img id="sourceImg" />
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
        <h1 class="content">{{ username }}</h1>

        <h1 class="label">nama lengkap</h1>
        <input type="text" class="content" v-model="name" placeholder="nama" />

        <h1 class="label">alamat</h1>
        <input type="text" class="content" v-model="address" placeholder="alamat" />

        <h1 class="label">tanggal lahir</h1>
        <input type="date" class="content" v-model="birthday" placeholder="tanggal lahir" />

        <h1 class="label">tinggi badan</h1>
        <input type="number" class="content" v-model="height" placeholder="tinggi badan" />

        <h1 class="label">berat badan</h1>
        <input type="number" class="content" v-model="weight" placeholder="berat badan" />

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
        <a href>
          <h2>kelola akun</h2>
        </a>
        <img src="img/arrow.png" alt />
      </div>
    </form>
    <div class="tulisan">
      <p id="1">kenapa kami tanyakan tinggi dan berat badan?</p>
      <p id="2">
        tinggi badan dan berat badan digunakan untuk dosis yang pas buat
        kamu
      </p>
    </div>
    <div class="kanan">
      <a href="index.html">
        <img id="logo" src="img/kliniku.png" alt />
      </a>
      <img id="bunga" src="img/bunga.png" alt />
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
      let username = localStorage.getItem("username");
      formData.append("username", username);
      console.log(username);
      axios
        .post("/edit-data-pasien", formData)
        .then(res => {
          console.log(res);
          this.$router.push({ path: "/konsultasi" });
        })
        .catch(err => console.log(err));
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
    }
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
      isInput: true
    };
  },
  created() {
    let token = localStorage.getItem("token");
    axios
      .get("/getUser", {
        headers: {
          Authorization: "Barier " + token
        }
      })
      .then(res => {
        console.log(res);
        this.name = res.data.user.name;
        this.address = res.data.user.alamat;
        this.height = res.data.user.tinggi;
        this.weight = res.data.user.berat;
        this.birthday = res.data.user.ttl || "";
        this.avatar = res.data.user.avatar || "";
        this.username = res.data.user.username;
        this.riwayat = res.data.user.riwayat;
        this.riwayatInput = this.riwayat.join();
        if (this.riwayat.length > 0) this.isInput = false;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped src="../../public/styles/edit_data_pasien.css">
</style>