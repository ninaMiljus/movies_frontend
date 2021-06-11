import movieService from "../../services/movieService";

const state = {
  allMovies: [],
};

const getters = {
  allMovies: (state) => state.allMovies,
};

const actions = {
  async getAllMovies(store) {
    const data = await movieService.getAll();
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