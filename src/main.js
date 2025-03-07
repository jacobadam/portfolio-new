import { createApp } from "vue";
import App from "./components/App.vue";
import "./global.css";
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";

createApp(App).use(Particles, {
  init: async (engine) => {
    await loadFull(engine);
  },
});

createApp(App).mount("#app");
