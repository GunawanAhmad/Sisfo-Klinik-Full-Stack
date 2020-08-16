<template>
  <div class="app">
    <nav>
      <div class="flexlogo">
        <div class="logo">
          <a href="index.html">
            <img src="img/kliniku.png" alt />
          </a>
        </div>
        <div class="back">
          <img src="img/arrow.png" alt />
          <a href="dashboard_pasien.html">
            <p>kembali ke halaman utama</p>
          </a>
        </div>
      </div>
      <div class="user">
        <div class="nama">
          <!--username dan status sesuai dengan username yang sudah login/register-->
          <h1 id="user">gunone</h1>
          <p id="status">verified account</p>
        </div>
        <div class="foto">
          <div class="foto-user">
            <img src alt />
          </div>
          <div class="data">
            <a href>
              <p>kelola data ></p>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="teks">
        <h1>riwayat</h1>
        <p>riwayat konsultasi kamu ada disini</p>
      </div>
      <div class="riwayat">
        <p>20 maret 2020</p>
        <p>20 maret 2020</p>
        <p>20 maret 2020</p>
      </div>
      <div class="dokter">
        <img src="img/riwayat.png" alt />
      </div>
    </div>

    <div class="wave">
      <img src="img/wave2.png" alt />
    </div>
    <div class="dot">
      <img src="img/dot.png" alt />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped src="../../public/styles/riwayat.css">
</style>