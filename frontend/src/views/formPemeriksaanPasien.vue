<template>
  <div class="app">
    <nav>
      <div class="flexlogo">
        <div class="back">
          <img src="../../public/img/arrow.png" alt />
          <router-link to="/dashboard-dokter">
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
    <div class="container">
      <h1 class="title">pemeriksaan pasien</h1>
      <div class="user">
        <div class="info">
          <h2>{{ user.name }}</h2>
          <h4>{{ tanggal }}</h4>
        </div>
        <div class="telpon">
          <button>TELEPON</button>
          <!-- <button @click="chat">CHAT</button> -->
        </div>
      </div>
      <div class="teks">
        <p>{{ keluhan }}</p>
      </div>

      <div class="form">
        <div class="nama section">
          <label for="nama" class="label">Nama</label>
          <input type="text" name="nama" class="input" />
        </div>
        <div class="alamat section">
          <label for="alamat" class="label">Alamat</label>
          <input type="text" name="alamat" class="input" />
        </div>
        <div class="ttl section">
          <label for="tanggal" class="label">Tanggal lahir</label>
          <input type="date" name="tanggal" class="input" />
        </div>
        <div class="tinggi section">
          <label for="tinggi" class="label">Tinggi badan</label>
          <div>
            <input type="number" name="tinggi" step="0.1" class="input" />
            <span>&nbsp;cm</span>
          </div>
        </div>
        <div class="berat section">
          <label for="berat" class="label">Berat badan</label>
          <div>
            <input type="number" name="berat" step="0.1" class="input" />
            <span>&nbsp;kg</span>
          </div>
        </div>
        <div class="riwayat section">
          <label for="riwayat" class="label">Riwayat penyakit</label>
          <div class="input">
            <span
              v-for="(penyakit,index) in user.riwayat"
              :key="index"
              class="penyakit"
            >{{ penyakit }}&nbsp;</span>
          </div>
        </div>
        <div class="pekerjaan section">
          <label for="kerja" class="label">Pekerjaan</label>
          <input type="text" name="kerja" class="input" />
        </div>
        <div class="tidur section">
          <p class="label">Rata-rata waktu tidur</p>
          <div class="input radio">
            <input type="radio" name="tidur" />
            <label>1-3 jam</label>
            <input type="radio" name="tidur" />
            <label>4-5 jam</label>
            <input type="radio" name="tidur" />
            <label>6-7 jam</label>
            <input type="radio" name="tidur" />
            <label>8-9 jam</label>
            <input type="radio" name="tidur" />
            <label>10+ jam</label>
          </div>
        </div>
        <div class="olahraga section">
          <p class="label">Intensitas olahraga</p>
          <div class="input radio">
            <input type="radio" name="olahraga" />
            <label>tidak pernah</label>
            <input type="radio" name="olahraga" />
            <label>1-2 kali semingu</label>
            <input type="radio" name="olahraga" />
            <label>3-5 kali seminggu</label>
            <input type="radio" name="olahraga" />
            <label>6-7 kali seminggu</label>
          </div>
        </div>
        <div class="minum section">
          <p class="label">Intensitas minum air putih</p>
          <div class="input radio">
            <input type="radio" name="minum" />
            <label>1-2 gelas</label>
            <input type="radio" name="minum" />
            <label>3-5 gelas</label>
            <input type="radio" name="minum" />
            <label>6-8 gelas</label>
            <input type="radio" name="minum" />
            <label>9+ gelas</label>
          </div>
        </div>
        <div class="rokok section">
          <p class="label">perokok</p>
          <div class="input radio">
            <input type="radio" name="rokok" />
            <label>Ya</label>
            <input type="radio" name="rokok" />
            <label>Tidak</label>
          </div>
        </div>
        <div class="gejala section">
          <p class="label">Gejala umum</p>
          <div class="input radio">
            <input type="checkbox" name="gejala" />
            <label>Demam</label>
            <input type="checkbox" name="gejala" />
            <label>Batuk</label>
            <input type="checkbox" name="gejala" />
            <label>Pilek</label>
          </div>
        </div>
        <div class="makan section">
          <label for="makan" class="label">makanan yang sering dikonsumsi</label>
          <input type="text" name="makan" class="input" />
        </div>
        <div class="lain section">
          <label for="lain" class="label">Lain-lain</label>
          <input type="text" name="lain" class="input" />
        </div>
        <div class="diagnosis section">
          <label for="diagnosis" class="label">Diagnosis penyakit</label>
          <input type="text" name="diagnosis" class="input" />
        </div>
        <div class="catatan section">
          <label for="catatan" class="label">Catatan untuk pasien</label>
          <input type="text" name="catatan" class="input" />
        </div>
        <p
          class="warn"
        >* data dimasukan setelah/saat konsultasi secara langsung melalui telepon atau keluhan pasien</p>
        <button class="btn">SUBMIT</button>
      </div>
      <!-- <div class="chat" v-if="isChat">
        <span class="close" @click="isChat = false">
          <i class="fas fa-times"></i>
        </span>
        <div class="user">
          <div class="photo">
            <img src alt />
          </div>
          <div class="name">Name</div>
        </div>
        <div class="message">
          <p class="from">hahah</p>
          <p class="from">hahah</p>
          <p class="from">hahah</p>
          <p class="to">hahah</p>
        </div>
        <div class="control">
          <input type="text" placeholder="type here..." v-model="chatInput" />
          <button @click="sendMessage">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>-->
    </div>
  </div>
</template>

 <script>
import axios from "axios";
// import io from "socket.io-client";
export default {
  created() {
    let token = localStorage.getItem("token");
    let id = this.$route.params.id;

    axios
      .get("/get-pasien-konsul/" + id, {
        headers: {
          Authorization: "Barier " + token,
        },
      })
      .then((res) => {
        console.log(res);
        this.user = res.data.konsul.userId;
        this.keluhan = res.data.konsul.keluhan;
        this.tanggal = res.data.konsul.tanggal.slice(4, 15);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      user: {},
      keluhan: "",
      tanggal: "",
      // isChat: false,
      // chatInput: "",
    };
  },
  methods: {
    // chat() {
    //   this.isChat = true;
    //   let socket = io("http://localhost:5000");
    //   socket.on("connect", function () {
    //     console.log("connect");
    //   });
    //   socket.on("chat", (data) => {
    //     console.log(data);
    //   });
    // },
    // sendMessage() {
    //   let socket = io("http://localhost:5000");
    //   socket.emit("chat", {
    //     user: "dokter",
    //     pesan: this.chatInput,
    //   });
    // },
  },
};
</script>

<style scoped src="../../public/styles/pemeriksaan_pasien.css">
</style>