import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state: {date: ''},
    mutations: {
      setDate(state, {date}) {
        state.date = date;
      },
    },
  });
}
