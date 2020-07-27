<template>
  <div class="asasd">
    <!--Navigasi Bar-->
    <nav>
      <div class="logoo">
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
        <p>feeling better</p>
        <div class="klinik">
          <span>with &nbsp;</span>
          <span class="klini">klini</span>
          <span class="ku">ku</span>
        </div>

        <p class="deks">
          pelayanan kesehatan praktis dan mudah digunakan.
          <br />hubungi dokter anda kapan saja dan di mana saja
        </p>
        <div class="started">
          <a href="#">get started</a>
          <a href>
            <img src="../../public/img/arrow.png" alt />
          </a>
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


