<template>
  <div class="asasd">
    <!--Navigasi Bar-->
    <nav>
      <div class="logo">
        <img src="../../public/img/kliniku.png" alt />
      </div>
      <ul class="navigasi">
        <li>
          <router-link to="/about">about</router-link>
        </li>
        <li>
          <router-link to="/login">login</router-link>
        </li>
      </ul>
    </nav>

    <!--Container Body-->

    <div class="container">
      <!--text kliniku-->
      <div class="teks">
        <div class="top">
          <p>feeling better</p>
          <div class="klinik">
            <span>with &nbsp;</span>
            <span class="klini">klini</span>
            <span class="ku">ku</span>
          </div>
        </div>

        <p class="deks">
          pelayanan kesehatan praktis dan mudah digunakan.
          <br />hubungi dokter anda kapan saja dan di mana saja
        </p>
        <div class="started">
          <router-link to="/about">get started</router-link>
          <router-link to="/about">
            <img src="../../public/img/arrow.png" alt />
          </router-link>
        </div>
      </div>

      <!--gambar-->
      <div class="image">
        <img src="../../public/img/main.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>

<style scoped src="../../public/styles/home.css">
</style>


