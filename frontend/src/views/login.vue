<template>
  <div class="vue">
    <div class="container-loader hide" ref="loader">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
    <div class="app" ref="app">
      <div class="container">
        <div class="form">
          <div class="circle-container">
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
          </div>
          <div class="regis">
            <h1>Login</h1>
            <p>
              <router-link to="/signup">belum punya akun? ></router-link>
            </p>
          </div>
          <div class="form-log">
            <div class="username">
              <h1>username</h1>
              <input type="username" v-model="username" />
            </div>
            <div class="password">
              <h1>password</h1>
              <input type="password" v-model="password" />
            </div>
            <button @click="login">LOG IN</button>
            <p class="error" v-if="errorMsg.length > 0">{{ errorMsg }}</p>
          </div>
        </div>
        <div class="teks"></div>
      </div>
      <div class="smile">
        <img src="../../public/img/smile.png" alt />
      </div>
      <div class="logo">
        <router-link to="/">
          <img src="../../public/img/kliniku.png" alt />
        </router-link>
      </div>

      <div class="kumpulan">
        <div class="1">
          <h1>tahukah kamu?</h1>
          <p>
            Jika di dalam jiwa seseorang sehat (positive thinking) maka tubuh pun
            akan sehat. Pikiran positif sangat penting bagi kehidupan dan
            kesehatan kita. Karena jika kita sering berpikiran buruk, energi yang
            buruk akan menyelimuti tubuh dan memicu stress sehingga kita harus
            menghindarinya.
          </p>
        </div>
        <div class="1">
          <h1>tahukah kamu?</h1>
          <p>
            Untuk menjaga tubuh tetap sehat dan tidak mudah sakit ada baiknya kita
            mencukupi kebutuhan cairan di dalam tubuh kita. Kekurangan cairan di
            dalam tubuh bisa menyebabkan aliran darah dan aliran oksigen di
            pembuluh darah menjadi terganggu, akibatnya adalah darah menjadi
            kental. Organ yang ada di dalam tubuh manusia terdiri dari air atau
            cairan sehingga jika organ kekurangan air fungsi organ itu pun
            terganggu.
          </p>
        </div>
        <div class="1">
          <h1>tahukah kamu?</h1>
          <p>
            Kita harus bisa menjaga pola makan, jangan sampai kita meninggalkan
            sarapan dan atur selalu jam makan Orang yang tidak bisa mejaga pola
            makannya dia akan mudah sekali terkena penyakit maag. Gejala penyakit
            maag pertama yang akan dirasakan orang yang tidak memiliki pola makan
            yang teratur adalah perut terasa melilit dan sering terkena sakit
            perut.
          </p>
        </div>
        <div class="1">
          <h1>tahukah kamu?</h1>
          <p>
            Tanpa olahraga, lemak yang ada di dalam tubuh tidak bisa dibakar
            secara sempurna sehingga lemak itu tetap akan menempel di pembuluh
            darah yang menyebabkan penyempitan pembuluh darah. Dan lemak juga bisa
            menempel di jantung sehingga dapat mengakibatkan serangan jantung.
            Oleh sebab itu olahraga sangat penting sekali untuk menjaga tubuh agar
            tetap sehat.
          </p>
        </div>
        <div class="1">
          <h1>tahukah kamu?</h1>
          <p>
            Kelelahan setelah melakukan aktifitas atau berolahraga merupakan
            bahasa tubuh kita untuk menyampaikan pesan bahwa tubuh perlu
            berisitrahat. Tanggapi pesan tersebut dengan mengistirahatkan tubuh.
            Kita harus sadar bahkan untuk hal kecil sekalipun,misal mata yang
            terasa perih dan berair ketika bekerja di depan komputer, itu berarti
            mata kita sudah lelah dan butuh istirahat.Jangan paksakan kalau tidak
            ingin mengalami gangguan pada mata.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      errorMsg: "",
    };
  },
  mounted() {
    const a = document.querySelectorAll(".teks");
    const b = document.getElementsByClassName("1");

    let i = 0;
    a[0].innerHTML = b[i].innerHTML;
    i = 1;
    setInterval(function () {
      if (i > 4) {
        i = 0;
      }
      a[0].innerHTML = b[i].innerHTML;
      i += 1;
    }, 30000);
  },
  methods: {
    login() {
      this.$refs.loader.classList.toggle("hide");
      this.$refs.app.classList.toggle("hide");
      let body = {
        username: this.username,
        password: this.password,
      };

      axios
        .post("/login", body)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("username", res.data.username);
          this.$refs.loader.classList.toggle("hide");
          this.$refs.app.classList.toggle("hide");
          // console.log(res);
          if (res.data.role === "pasien")
            this.$router.push({ path: "/dashboard-pasien" });
          else if (res.data.role === "dokter")
            this.$router.push({ path: "/dashboard-dokter" });
          else if (res.data.role === "staff")
            this.$router.push({ path: "/dashboard-staff" });
        })
        .catch((err) => {
          this.$refs.loader.classList.toggle("hide");
          console.log(err.response);
          this.errorMsg = err.response.data.message || "error";
        });
    },
  },
};
</script>

<style  scoped src="../../public/styles/login.css">
</style> 




