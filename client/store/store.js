import Vuex from "vuex";

import defaultState from "./state/state";
import mutations from "./mutations/mutations";
import getters from "./getters/getters";
import actions from "./actions/actions";

const isDev = process.env.NODE_ENV === "development";

export default () => {
  return new Vuex.Store({
    strict: isDev, //开发环境下，无法从外部修改数据，规范代码
    state: defaultState,
    //修改数据
    // mutations: mutations
    mutations,
    getters,
    actions,
  });
};
