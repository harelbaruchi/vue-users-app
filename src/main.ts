import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import axios from "./plugins/axios";

import "./assets/base.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(axios, {
  baseUrl: "https://randomuser.me/api/?results=10",
});

app.mount("#app");
