import Vue from "vue";

const app = new Vue({
  //   el: "#root",//挂载到template.html的id="root"节点，且整个替换掉！
  template: "<div>{{text}}{{obj.a}}</div>",
  data: {
    text: 0,
    obj: {},
  },
  // watch: {
  //   text: function(newval, oldval) {
  //     console.log(newval, oldval);
  //   },
  // },
});
app.$mount("#root");

// app.text = "text2";
let i = 0;
setInterval(() => {
  // app.text += 1;
  i++;
  app.$set(app.obj, "a", i);
  // app.$data.text += 1;
  // app.$options.data.text +=1 //没有用
}, 1000);

// console.log(app.$data);
// console.log(app.$el);
// console.log(app.$options);

// app.$options.render = (h) => {
//   return h("div", {}, "new render function");
// };

//console.log(app.$root === app); //true

// let unWatch = app.$watch("text", (newval, oldval) => {
//   console.log(newval, oldval);
// });

// setTimeout(() => {
//   unWatch();
// }, 2000);
