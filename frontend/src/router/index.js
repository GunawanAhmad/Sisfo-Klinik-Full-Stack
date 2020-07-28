import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/login.vue";
import Signup from "../views/signup.vue";
import DashboardPasien from "../views/dashboardPasien.vue";
import editDataPasien from "../views/editDataPasien.vue";
import DataPasien from "../views/DataPasien.vue";
import Konsultasi from "../views/konsultasi.vue";

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
