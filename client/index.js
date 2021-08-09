import Vue from "vue";
import App from "./app.vue";
import VueRouter from "vue-router";

import "./assects/style/global.styl";
import createRouter from "./config/router";

const root = document.createElement("div");
document.body.appendChild(root);

Vue.use(VueRouter);
const router = createRouter();

new Vue({
  router,
  render: (h) => h(App),
}).$mount(root);
