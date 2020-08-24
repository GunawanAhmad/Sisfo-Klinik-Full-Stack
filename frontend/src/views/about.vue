<template>
  <div class="asasd">
    <!--Navigasi Bar-->
    <nav>
      <div class="logo">
        <img src="../../public/img/kliniku.svg" alt />
      </div>
      <ul class="navigasi">
        <li>
          <router-link to="/">home</router-link>
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
          <p>
            about
            <span>
              <span class="klini">klini</span>
              <span class="ku">ku</span>
            </span>
          </p>
          <div class="desc">
            <p>
              kliniku adalah sebuah pelayanan kesehatan
              online berbasis website. Kami akan membantu
              anda dimana pun dan kapan pun.
            </p>
            <p>
              Jika kamu memiliki gejala penyakit, jangan
              sampai kamu mendiagnosis secara mandiri!
              Kamu perlu dokter untuk menangani masalahmu.
              Maka dari itu, kliniku hadir untuk kamu
            </p>
          </div>
        </div>

        <div class="started">
          <router-link to="/signup">daftar sekarang</router-link>
          <router-link to="/signup">
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

<style scoped src="../../public/styles/about.css">
</style>


