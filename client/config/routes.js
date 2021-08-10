import Todo from "../views/todo/todo.vue";
import Login from "../views/login/login.vue";

export default [
  {
    path: "/",
    redirect: "/app",
  },
  {
    path: "/app",
    // path: "/app/:id",
    // props: true,
    // props: (route) => ({ id: route.query.b }),
    // component: Todo,
    component: () => import("../views/todo/todo.vue"),
    // components: {
    //   default: Todo,
    //   a: Login,
    // },
    name: "App",
    //保存路由信息
    meta: {
      title: "app",
      description: "this is app",
    },
    // children: [
    //   {
    //     path: "test",
    //     component: Login,
    //   },
    // ],
  },
  {
    path: "/login",
    component: Login,
    // components: {
    //   default: Login,
    //   a: Todo,
    // },
  },
];
