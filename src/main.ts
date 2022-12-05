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
  baseUrl: "https://6368c0c615219b849605d2d9.mockapi.io/api/v1/users",
});

app.mount("#app");
