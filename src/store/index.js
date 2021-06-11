import Vue from "vue";
import Vuex from "vuex";
import movies from "./modules/movies";

Vue.use(Vuex);
console.log({ movies});

export default new Vuex.Store({
  modules: {
    movies,
  },
});