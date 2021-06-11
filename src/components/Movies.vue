<template>
    <div>
    <div>
      <ul>
        <movie-row
          v-for="(movie, index) in allMovies"
          :key="index"
          :movie="movie"
          >Movies</movie-row
        >
      </ul>
    </div>
    <button @click="logout" class="btn btn-danger">Logout</button>
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
        ...mapGetters(["allMovies"]),
    },

    methods: {
        ...mapActions(["getAllMovies"]),

        
        /* async remove(id){
            try{
                await moviesService.deleteMovie(id);
                this.movies = this.movies.filter(movie => movie.id !== id);
            } catch(err){
                console.log(err);
            }
        },

        logout() {
            authService.logout();
            this.$router.push("/login");
        },
        */

    async beforeRouteEnter(to, from, next) {
        await store.dispatch("getAllMovies");
        next();
    },        
    }
}
</script>
