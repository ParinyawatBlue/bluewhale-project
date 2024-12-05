import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// bootstrap 5 css
import "bootstrap/dist/css/bootstrap.css"; 
// bootstrap 5 css
import "bootstrap/dist/js/bootstrap.bundle.js";

createApp(App).use(store).use(router).mount("#app");
