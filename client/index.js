import Vue from "vue";
import App from "./app.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import "./assects/style/global.styl";
import createRouter from "./config/router";
import createStore from "./store/store";

const root = document.createElement("div");
document.body.appendChild(root);

Vue.use(VueRouter);
Vue.use(Vuex);

const router = createRouter();
const store = createStore();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount(root);
