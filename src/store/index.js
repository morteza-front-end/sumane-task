import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    cartCount: 0,
  },
  mutations: {
    handle_data(state, payload) {
      state.cart.push(payload);
    },
    update_cart(state, payload) {
      let found = state.cart.find(
        (product) =>
          product.item == payload.item && product.period == payload.period
      );
      if (found) {
        found.count++;
        state.cartCount++;
      } else {
        state.cart.push(payload);
        state.cartCount++;
      }
    },
  },
  actions: {
    update_data({ commit }, payload) {
      commit("update_cart", payload);
    },
  },
  modules: {},
});
