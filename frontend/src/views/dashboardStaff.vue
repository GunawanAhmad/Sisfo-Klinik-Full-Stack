<template>
  <div class="app">
    <div class="logo">
      <router-link to="/">
        <img src="img/kliniku.png" alt />
      </router-link>
    </div>
    <div class="backg-img">
      <img src="img/stuff_back.png" alt />
    </div>
    <div class="komp">
      <img src="img/graph.png" alt />
    </div>
    <div class="teks">
      <h1>administrasi</h1>
    </div>
    <div class="list">
      <ul>
        <a href="daftar_pasien.html">
          <li class="list-fungsi">
            <p>daftar Pasien</p>
            <img src="img/arrow.png" alt />
          </li>
        </a>
        <a href>
          <li class="list-fungsi">
            <p>daftar obat</p>
            <img src="img/arrow.png" alt />
          </li>
        </a>
        <a href>
          <li class="list-fungsi">
            <p>Distribusi obat</p>
            <img src="img/arrow.png" alt />
          </li>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped src="../../public/styles/dashboard_stuff.css">
</style>