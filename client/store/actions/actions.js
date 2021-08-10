export default {
  updateCountAsycn(store, data) {
    setTimeout(() => {
      store.commit("updateCount", { num: data.num });
    }, data.time);
  },
};
