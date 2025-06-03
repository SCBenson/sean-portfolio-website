import { createRouter, createWebHistory } from "vue-router/auto";

import Home from "@/components/Home.vue";
import Contact from "@/components/sections/contact/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/contact", component: Contact },
  ],
});

export default router;
