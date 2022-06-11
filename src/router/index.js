import { createRouter, createWebHashHistory } from "vue-router";
import daybookRouter from "../modules/daybook/router";

const notFound = { template: "<div>404</div>" };

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/daybook",
    ...daybookRouter,
  },
  {
    path: "/:pathMatch(.*)*",
    component: notFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
