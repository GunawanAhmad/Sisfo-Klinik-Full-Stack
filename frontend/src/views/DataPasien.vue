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
            <img src alt />
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
      <div class="info">
        <h1 class="label">username</h1>

        <!--Disesuaikan-->
        <h1 class="content">Faris</h1>
        <h1 class="label">nama lengkap</h1>

        <!--Disesuaikan-->
        <h1 class="content">Faris Azizy</h1>
        <h1 class="label">alamat</h1>

        <!--Disesuaikan-->
        <h1 class="content">malang</h1>
        <h1 class="label">tanggal lahir</h1>

        <!--Disesuaikan-->
        <h1 class="content">21 Juni 2020</h1>
        <h1 class="label">tinggi badan</h1>

        <!--Disesuaikan-->
        <h1 class="content">150 cm</h1>
        <h1 class="label">berat badan</h1>

        <!--Disesuaikan-->
        <h1 class="content">40kg</h1>
        <h1 class="label">riwayat penyakit</h1>

        <!--Disesuaikan-->
        <h1 class="content">
          <span class="penyakit">asma</span>
          <span class="penyakit">diabetes</span>
        </h1>
        <div class="label" id="ubah">
          <a href>
            <h2>kelola akun</h2>
          </a>
          <img src="img/arrow.png" alt />
        </div>
      </div>
      <div class="edit">
        <a href>
          <h2>kelola akun</h2>
        </a>
        <img src="img/arrow.png" alt />
      </div>
    </div>

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
export default {};
</script>

<style scoped src="../../public/styles/data_pasien.css">
</style>