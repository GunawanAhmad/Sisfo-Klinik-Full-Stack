<template>
  <div class="app">
    <nav>
      <div class="logo">
        <a href="index.html">
          <img src="img/kliniku.png" alt />
        </a>
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
              <router-link to="/edit-data-pasien">kelola data ></router-link>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <div class="wave">
      <img src="img/wave2.png" alt />
    </div>
    <div class="halo">
      <!--nama sesuai dengan username yang sudah login/register-->
      <h1 id="nama">Halo Gunawan!</h1>

      <p>ada yang bisa kami bantu?</p>
    </div>
    <div class="fungsi">
      <router-link to="/konsultasi">
        <div class="konsultasi">
          <img src="img/heart.png" alt />
          <h1>konsultasi</h1>
          <p>kamu punya keluhan apa? kami siap bantu.</p>
        </div>
      </router-link>

      <div class="antrian">
        <router-link to="/antrian">
          <img src="img/antri.png" alt />
          <h1>antrian</h1>
          <p>cek antrian kamu udah sampai mana</p>
        </router-link>
      </div>
      <router-link to="/riwayat">
        <div class="riwayat">
          <img src="img/frame.png" alt />
          <h1>riwayat</h1>
          <p>riwayat konsultasi kamu ada di sini</p>
        </div>
      </router-link>

      <div class="hasil">
        <router-link to="/hasil">
          <img src="img/list.png" alt />
          <h1>hasil pemeriksaan</h1>
          <p>cek hasil pemeriksaan dari dokter</p>
        </router-link>
      </div>
    </div>
    <div class="dot">
      <img src="img/dot.png" alt />
    </div>
    <div class="suster">
      <img src="img/suster.png" alt />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped src="../../public/styles/dashbord_pasien.css">
/* @import "../../public/styles/dashbord_pasien.css"; */
</style>