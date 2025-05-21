import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/crew",
      name: "crew",
      component: () => import("../views/Crew.vue"),
    },
    {
      path: "/destination",
      name: "destination",
      component: () => import("../views/Destination.vue"),
    },
    {
      path: "/technology",
      name: "technology",
      component: () => import("../views/Technology.vue"),
    },
  ],
});

export default router;
