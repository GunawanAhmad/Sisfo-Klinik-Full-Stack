<template>
  <div class="vue">
    <div class="container-loader hide" ref="loader">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
    <div class="app" ref="app">
      <div class="container">
        <div class="back">
          <img src="../../public/img/arrow.png" alt />
          <router-link to="/data-pasien">kembali</router-link>
        </div>
        <div class="profil">
          <div class="foto-user">
            <div class="foto">
              <img id="sourceImg" :src="avatar" ref="img" />
            </div>
            <div class="edit-foto">
              <input type="file" @change="onFileSelected" ref="realFile" />
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
        <img src="../../public/img/bg.png" alt />
      </div>
      <form action @submit="editData">
        <div class="info">
          <h1 class="label">username</h1>
          <h1 class="content user-username">{{ username }}</h1>

          <h1 class="label">no telepon</h1>
          <input type="text" class="content" v-model="telepon" placeholder="no telepon" required />

          <h1 class="label">nama lengkap</h1>
          <input type="text" class="content" v-model="name" placeholder="nama" required />

          <h1 class="label">alamat</h1>
          <input type="text" class="content" v-model="address" placeholder="alamat" required />

          <h1 class="label">tanggal lahir</h1>
          <div class="ttl content">
            <div class="input">
              <select id="day-val" ref="hari" class="ttl-option">
                <!-- <option disabled selected value>tanggal</option> -->
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>

              <select id="bulan-val" ref="bulan" class="ttl-option">
                Select Month
                <!-- <option disabled selected value>bulan</option> -->
                <option value="01" class="data-bulan">Januari</option>
                <option value="02" class="data-bulan">Februari</option>
                <option value="03" class="data-bulan">Maret</option>
                <option value="04" class="data-bulan">April</option>
                <option value="05" class="data-bulan">Mei</option>
                <option value="06" class="data-bulan">Juni</option>
                <option value="07" class="data-bulan">Juli</option>
                <option value="08" class="data-bulan">Agustus</option>
                <option value="09" class="data-bulan">September</option>
                <option value="10" class="data-bulan">Oktober</option>
                <option value="11" class="data-bulan">November</option>
                <option value="12" class="data-bulan">Desember</option>
              </select>
              <input
                type="text"
                class="ttl-option"
                id="tahun"
                v-model="tahun"
                placeholder="tahun"
                autocomplete="off"
                required
              />
            </div>
          </div>

          <h1 class="label">tinggi badan</h1>
          <div class="content tinggi">
            <input type="number" v-model="height" placeholder="0" required />
            <span>cm</span>
          </div>

          <h1 class="label berat">berat badan</h1>
          <div class="content berat">
            <input type="number" class="content" v-model="weight" placeholder="0" required />
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
              @focusout="focusOut"
            />
            <span class="after" v-else @click="inputing">
              <span
                v-for="(penyakit,index) in riwayat"
                :key="index"
                class="penyakit"
              >{{riwayat[index]}}&nbsp;</span>
            </span>
          </h1>
          <button class="ubah" type="submit">
            <h2>simpan</h2>
            <img src="../../public/img/arrow.png" alt />
          </button>
        </div>
        <div class="edit">
          <router-link to="/account">
            <h2>kelola akun</h2>
          </router-link>
          <img src="../../public/img/arrow.png" alt />
        </div>
      </form>
      <div class="bottom">
        <div class="tulisan">
          <p>kenapa kami tanyakan tinggi dan berat badan?</p>
          <p>
            tinggi badan dan berat badan digunakan untuk dosis yang pas buat
            kamu
          </p>
        </div>
        <div class="kanan">
          <router-link to="/">
            <img id="logo" src="../../public/img/kliniku.png" alt />
          </router-link>
          <img id="bunga" src="../../public/img/bunga.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    editData(e) {
      e.preventDefault();
      this.$refs.loader.classList.toggle("hide");
      this.$refs.app.classList.toggle("hide");
      const formData = new FormData();
      formData.append("nama", this.name);
      formData.append("alamat", this.address);
      formData.append(
        "ttl",
        `${this.tahun}-${this.$refs.bulan.value}-${this.$refs.hari.value}`
      );
      formData.append("tinggi", this.height);
      formData.append("berat", this.weight);
      formData.append("avatar", this.file);
      formData.append("riwayat", this.riwayat);
      formData.append("telepon", this.telepon);
      let token = localStorage.getItem("token");
      axios
        .post("/edit-data-pasien", formData, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          console.log(res);
          this.$refs.loader.classList.toggle("hide");
          this.$refs.app.classList.toggle("hide");
          this.$router.push({ path: "/data-pasien" });
        })
        .catch((err) => {
          console.log(err);
          this.$refs.loader.classList.toggle("hide");
          this.$refs.app.classList.toggle("hide");
        });
    },
    getFile() {
      this.$refs.realFile.click();
    },
    onFileSelected(e) {
      this.$refs.img.style.display = "";
      this.file = e.target.files[0];
      this.avatar = URL.createObjectURL(this.file);
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
    monthFilter(date) {
      console.log(date);
      let month = date.slice(5, 7);
      let day = date.slice(8, 10);
      this.tahun = date.slice(0, 4);
      let bulan = document.querySelectorAll(".data-bulan");
      bulan.forEach((p) => {
        if (p.value == month) {
          p.setAttribute("selected", "selected");
        }
      });
      let hari = this.$refs.hari.children;
      hari.forEach((p) => {
        if (p.value == day) {
          p.setAttribute("selected", "selected");
        }
      });
    },
    focusOut() {
      if (this.riwayatInput !== "") {
        this.isInput = false;
      } else {
        this.isInput = true;
      }
    },
    hideImg() {
      this.$refs.img.style.display = "none";
    },
  },
  data() {
    return {
      file: "",
      name: "",
      address: "",
      height: 0,
      weight: 0,
      avatar: "",
      username: "",
      riwayatInput: "",
      riwayat: [],
      isInput: true,
      id: "",
      telepon: "",
      tahun: "",
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
        if (res.data.user.ttl) {
          this.monthFilter(res.data.user.ttl);
        }
        this.name = res.data.user.name;
        console.log(res.data.user.alamat);

        this.height = res.data.user.tinggi;
        this.weight = res.data.user.berat;
        this.address = res.data.user.alamat;
        this.avatar = res.data.user.avatar;
        this.username = res.data.user.username;
        this.riwayat = res.data.user.riwayat || [];
        this.telepon = res.data.user.telepon;
        this.riwayatInput = this.riwayat.join();
        if (res.data.user.avatar) {
          this.avatar = axios.defaults.baseURL + "/" + res.data.user.avatar;
        }

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