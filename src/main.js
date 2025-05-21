import "./assets/main.css";
import Navbar from "../src/components/Navbar.vue";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

// Import BootstrapVue 3
import BootstrapVue3 from "bootstrap-vue-3";

// Import Bootstrap and BootstrapVue CSS files
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

const app = createApp(App);
app.use(BootstrapVue3);
app.use(createPinia());
app.use(router);
app.component("Navbar", Navbar);

app.mount("#app");
