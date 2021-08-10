import Router from "vue-router";

import routes from "./routes";

export default () => {
  return new Router({
    routes,
    mode: "history",
    // base: "/base/",
    linkActiveClass: "todo-link-active",
    linkExactActiveClass: "todo-link-exact-active",
    //是否记录页面跳转的滚动位置
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
    fallback: true,
    //string -> obj
    // parseQuery(query){

    // },
    //obj -> string
    // stringifyQuery(obj){

    // }
  });
};
