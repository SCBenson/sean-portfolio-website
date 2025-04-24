import { createRouter, createWebHistory } from "vue-router/auto";

import Home from "@/components/HelloWorld.vue";
import About from "@/components/about/index.vue";
import CurriculumVitae from "@/components/CV/index.vue";
import Projects from "@/components/my-projects/index.vue";
import Contact from "@/components/contact/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/CV", component: CurriculumVitae },
    { path: "/projects", component: Projects },
    { path: "/contact", component: Contact },
  ],
});

export default router;
