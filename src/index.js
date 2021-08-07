import Vue from "vue";
import App from "./app.vue";

import "./assects/style/test.css";
import "./assects/style/test-stylus.styl";
import "./assects/images/leica5.jpg";

const root = document.createElement("div");
document.body.appendChild(root);

new Vue({
  render: (h) => h(App),
}).$mount(root);
