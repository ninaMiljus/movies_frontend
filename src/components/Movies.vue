<template>
    <div>
    <div>
        movies
      <ul>
        <movie-row
          v-for="(movie, index) in allMovies"
          :key="index"
          :movie="movie"
          >Movies</movie-row>
      </ul>
    </div>
    <!-- <button @click="logout" class="btn btn-danger">Logout</button> -->
  </div>
</template>

<script>
import store from '../store';
import {mapActions, mapGetters} from 'vuex';
import MovieRow from './MovieRow.vue';

export default {
    components: {MovieRow},
    name: "movies",
    computed: {
        ...mapGetters({
            allMovies: 'movies/allMovies',
            id: 'movies/id'
        })
    },

    methods: {
        ...mapActions({
            getAllMovies: 'movies/getAllMovies',
            remove: 'movies/remove'
        }),

    },

    async beforeRouteEnter(to, from, next) {
        await store.dispatch("movies/getAllMovies");
        next();
    },  
}
</script>
