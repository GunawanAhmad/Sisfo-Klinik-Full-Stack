<template>
  <div class="app">
    <div class="logo">
      <router-link to="/">
        <img src="../../public/img/kliniku.svg" alt />
      </router-link>
    </div>
    <div class="backg-img">
      <img src="../../public/img/stuff_back.png" alt />
    </div>
    <div class="komp">
      <img src="../../public/img/graph.png" alt />
    </div>
    <div class="teks">
      <h1>administrasi</h1>
    </div>
    <div class="list">
      <ul>
        <router-link to="/daftar-obat">
          <li class="list-fungsi">
            <p>daftar obat</p>
            <img src="../../public/img/arrow.png" alt />
          </li>
        </router-link>
        <router-link to="/list-pemberian-obat">
          <li class="list-fungsi">
            <p>pemberian obat</p>
            <img src="../../public/img/arrow.png" alt />
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped src="../../public/styles/dashboard_stuff.css">
</style>