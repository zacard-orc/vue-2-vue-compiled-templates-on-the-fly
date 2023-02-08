import VueRouter from "vue-router";

const routes = [
  {
    path: "/user/:id",
    name: "user",
    component: () => import("./views/User")
  }
];

export const router = new VueRouter({
  mode: "history",
  routes
});
