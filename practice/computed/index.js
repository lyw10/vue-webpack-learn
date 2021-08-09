import Vue from "vue";

const app = new Vue({
  //   el: "#root",//挂载到template.html的id="root"节点，且整个替换掉！
  template: `
  <div>
    <span>{{fullname}}</span>
    <input type="text" v-model="name"/>
    <input type="text" v-model="info.city"/>
    </div>
  `,

  data: {
    firstName: "Jack",
    lastName: "Hshe",
    name: "lyw",
    info: {
      city: "nj",
    },
  },
  computed: {
    fullname() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  watch: {
    name(newVal, oldVal) {
      console.log("watch name", newVal, oldVal);
      // 值类型，可正常拿到 oldVal 和 val
    },
    info: {
      handler(newVal, oldVal) {
        console.log("watch info", newVal.city, oldVal.city);
        console.log(newVal.city === oldVal.city);
        // 引用类型，拿不到 oldVal 。因为指针相同，此时已经指向了新的 val
      },
      // 深度监听,若取消，没有打印输出；
      // 这种情况下，深度监听结果newVal === oldVal.city  //true
      deep: true,
      //Cannot read property 'city' of undefined 引用类型处不能用immediate？
      //immediate: true
    },
    "info.city": {
      handler(newVal, oldVal) {
        console.log("watch info", newVal, oldVal);
      },
      immediate: true,
      //watch info nj undefined
    },
  },
});
app.$mount("#root");
