import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import about from "../views/about.vue";
import Login from "../views/login.vue";
import Signup from "../views/signup.vue";
import DashboardPasien from "../views/dashboardPasien.vue";
import editDataPasien from "../views/editDataPasien.vue";
import DataPasien from "../views/DataPasien.vue";
import Konsultasi from "../views/konsultasi.vue";
import dashboardDokter from "../views/dashboardDokter.vue";
import dashboardStaff from "../views/dashboardStaff.vue";
import daftarPasien from "../views/daftarPasien.vue";
import tambahObat from "../views/tambahObat.vue";
import daftarObat from "../views/daftarObat.vue";
import formPemeriksaanPasien from "../views/formPemeriksaanPasien.vue";
import chat from "../views/chat.vue";
import dataAkun from "../views/dataAkun.vue";
import gantiUsername from "../views/gantiUsername.vue";
import gantiPass from "../views/gantiPass.vue";
import formPemberianObat from "../views/formPemberianObat.vue";
import listPemberianObat from "../views/listPemberianObat.vue";
import antrian from "../views/antrian.vue";
import hasilPemeriksaan from "../views/hasilPemeriksaan.vue";
import riwayat from "../views/riwayat.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup
  },
  {
    path: "/dashboard-pasien",
    name: "Dashboard Pasien",
    component: DashboardPasien
  },
  {
    path: "/edit-data-pasien",
    name: "Edit Data Pasien",
    component: editDataPasien
  },
  {
    path: "/data-pasien",
    name: "Data Pasien",
    component: DataPasien
  },
  {
    path: "/konsultasi",
    name: "Konsultasi",
    component: Konsultasi
  },
  {
    path: "/dashboard-dokter",
    name: "Dashboard Dokter",
    component: dashboardDokter
  },
  {
    path: "/dashboard-staff",
    name: "Dashboard Staff",
    component: dashboardStaff
  },
  {
    path: "/daftar-pasien",
    name: "Daftar Pasien",
    component: daftarPasien
  },
  {
    path: "/staff/tambah-obat",
    name: "Tambah Obat",
    component: tambahObat
  },
  {
    path: "/daftar-obat",
    name: "Daftar Obat",
    component: daftarObat
  },
  {
    path: "/dokter/form-pemeriksaan-pasien/:id",
    name: "Form Pemeriksaan Pasien",
    component: formPemeriksaanPasien
  },
  {
    path: "/chat",
    name: "chat",
    component: chat
  },
  {
    path: "/account",
    name: "data akun",
    component: dataAkun
  },
  {
    path: "/ganti-username",
    name: "Ganti Username",
    component: gantiUsername
  },
  {
    path: "/ganti-password",
    name: "Ganti password",
    component: gantiPass
  },
  {
    path: "/form-pemberian-obat/:id",
    name: "Pemberian Obat",
    component: formPemberianObat
  },
  {
    path: "/list-pemberian-obat",
    name: "List Pemberian Obat",
    component: listPemberianObat
  },
  {
    path: "/antrian",
    name: "Antrian",
    component: antrian
  },
  {
    path: "/hasil-pemeriksaan",
    name: "Hasil Pemeriksaan",
    component: hasilPemeriksaan
  },
  {
    path: "/riwayat",
    name: "Riwayat Page",
    component: riwayat
  },
  {
    path: "/about",
    name: "About",
    component: about
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
