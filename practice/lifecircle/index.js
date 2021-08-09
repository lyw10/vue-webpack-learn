import Vue from "vue";

const app = new Vue({
  el: "#root",
  //   template: "<div>{{text}}</div>",
  data: {
    text: 0,
  },
  beforeCreate() {
    console.log("beforeCreate:", this.text);
  },
  created() {
    console.log("created:", this.text);
  },
  beforeMount() {
    console.log("beforeMount:", this.$el);
  },
  mounted() {
    console.log("mounted:", this.$el);
  },
  beforeUpdate() {
    console.log("beforeUpdate:", this);
  },
  updated() {
    console.log("updated:", this);
  },
  beforeDestroy() {
    console.log("beforeDestroy:", this);
  },
  destroyed() {
    console.log("destroyed:", this);
  },
  render(h) {
    console.log("render function");
    return h("div", {}, this.text);
  },
});

// setInterval(() => {
//   app.text++;
// }, 5000);

setTimeout(() => {
  app.$destroy();
}, 2000);
