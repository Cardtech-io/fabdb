import Vue from "vue";

export const search = Vue.observable({
  page: 1,
  results: {}
});

export const mutations = {
  setPage(page) {
    store.page = page;
  }
};
