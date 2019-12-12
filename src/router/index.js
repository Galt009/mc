import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login/index.vue";
import Reg from "../views/Reg/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login" //重定向到login
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/reg",
    name: "reg",
    component: Reg
  }
];

const router = new VueRouter({
  routes
});

export default router;
