import { createRouter, createWebHistory } from "vue-router/auto";

import Home from "@/components/Home.vue";
import About from "@/components/sections/about/About.vue";
import CurriculumVitae from "@/components/sections/CV/CV.vue";
import Projects from "@/components/sections/my-projects/Projects.vue";
import Contact from "@/components/sections/contact/Contact.vue";

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
