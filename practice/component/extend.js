import Vue from "vue";

const componentBase = {
  // props: {
  //   active: Boolean,
  //   propOne: String,
  // },
  // template: `
  //   <div>
  //     <input type="text" v-model="text">
  //     <span @click="handleChange">{{propOne}}</span>
  //     <span v-show="active">see me if active</span>
  //   </div>
  // `,
  template: `
    <div>
      <span>This is componentBase</span>
      <input type="text" v-model="text">
    </div>
  `,
  data() {
    return {
      text: "componentBase text",
    };
  },
  mounted() {
    this.$parent.text = "componentBase text change";
    console.log("componentBase mounted");
  },
  // methods: {
  //   handleChange() {
  //     this.$emit("change");
  //   },
  // },
};

// const Comp1 = Vue.extend(componentBase);

// new Comp1({
//   el: "#root",
//   propsData: {
//     propOne: "xxx",
//   },
//   data: {
//     text: "123",
//   },
//   mounted() {
//     console.log("Comp1 mounted");
//   },
// });

const Comp2 = {
  extends: componentBase,
  data() {
    return {
      text: "Comp2 text",
    };
  },
  mounted() {
    this.$parent.text = "comp2 text change";
    console.log(this.$parent.$options.name, "Comp2 mounted");
  },
};

const parent = new Vue({
  name: "parent",
});
new Vue({
  parent: parent,
  name: "Root",
  el: "#root",
  mounted() {
    console.log(this.$parent.$options.name, "root mounted");
  },
  components: {
    Comp2: Comp2,
  },
  data: {
    text: "root text",
  },
  template: `
    <div>
      <span>This is Vue Text: {{text}}</span>
      <Comp2></Comp2>
    </div>
  `,
});
