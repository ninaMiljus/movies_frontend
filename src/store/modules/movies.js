import {moviesService} from "../../services/moviesService";

const state = () => {
    return {
        allMovies: [],
        movie: {},
    }
};

const getters = {
  allMovies: (state) => state.allMovies,
  movie: (state) => state.movie,
  id: (state) => state.id,
};

const actions = {
  async getAllMovies(store) {
    const data = await moviesService.getAllMovies();

    store.commit("getAllMovies", data);
  },

  async getSingleMovie(store) {
    const data = await moviesService.getSingleMovie();

    store.commit("getSingleMovie", data);
  },

  async remove(store) {
    await moviesService.deleteMovie(this.movie.id);
    this.movies = this.movies.filter(movie => movie.id !== this.movie.id);

    store.commit("remove", this.movie.id);
  }

/*
        logout() {
            authService.logout();
            this.$router.push("/login");
        },
        */
};

const mutations = {
  getAllMovies(state, movies) {
    state.allMovies = movies;
  },

  getSingleMovie(state, movie) {
    state.movie = movie;
  },

  remove(state, id) {
    state.id = id;
  }
};

export default {
    namespaced: true,
  state,
  getters,
  actions,
  mutations,
};