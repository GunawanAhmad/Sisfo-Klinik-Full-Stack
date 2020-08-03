<template>
  <div class="app">
    <div class="back">
      <img src="img/arrow.png" alt />
      <a href="dashboard_pasien.html">kembali ke halaman utama</a>
    </div>
    <div class="container">
      <div class="profil">
        <div class="foto-user">
          <div class="foto">
            <img alt />
          </div>
          <div class="edit-foto">
            <a href="#" style="position: relative; z-index: 10;">ubah foto profil</a>
          </div>
        </div>
        <div class="nama">
          <!--nama dan status akun sesuai dengan user yang login/register-->
          <div class="username">nama</div>
          <div class="account">Unverfied account</div>
        </div>
      </div>
    </div>
    <div class="img">
      <img src="img/bg.png" alt />
    </div>
    <div class="form">
      <div class="info"></div>
      <div class="edit">
        <a href>
          <h2>kelola akun</h2>
        </a>
        <img src="img/arrow.png" alt />
      </div>
    </div>

    <div class="kanan">
      <router-link to="/">
        <img id="logo" src="img/kliniku.png" alt />
      </router-link>
      <img id="bunga" src="img/bunga.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(process.env.BASE_URL);
  },
};
</script>

<style scoped src="../../public/styles/data_pasien.css">
</style>