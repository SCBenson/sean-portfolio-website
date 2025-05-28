/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import router from "@/router/index.js";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import "@/assets/fonts.css";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

const app = createApp(App);

// Define your custom theme
const customTheme = {
  dark: false,
  colors: {
    primary: "#1a1a2e", // Your custom primary color
    secondary: "#b4e1ef", // Blue grey
    header: "#2c3e50",
    accent: "#9C27B0", // Purple
    error: "#F44336", // Red
    info: "#2196F3", // Blue
    success: "#4CAF50", // Green
    warning: "#FFC107", // Amber
  },
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "customTheme",
    themes: {
      customTheme,
    },
  },
});

// REMOVED: registerPlugins(app); - This was causing duplicate Vuetify registration
// Only register the plugins you actually need, or create them manually

app.use(router);
app.use(vuetify); // Only one Vuetify instance
app.mount("#app");
