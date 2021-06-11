import moviesService from "../../services/moviesService";

const state = {
  allMovies: [],
};

const getters = {
  allMovies: (state) => state.allMovies,
};

const actions = {
  async getAllMovies(store) {
    const data = await moviesService.getAll();
    console.log(data);

    store.commit("getAll", data);
  },
};

const mutations = {
  getAll(state, movies) {
    state.allMovies = movies;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};