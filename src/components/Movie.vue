<template>
    <div>
        <h1>{{movie.title}}</h1>
        <h2>{{movie.director}}</h2>
    </div>
</template>
<script>
import store from '../store';
import {mapActions, mapGetters} from 'vuex';


export default {
    name: "movie",
    computed: {
        ...mapGetters({
            movie: 'movies/movie'
        })
    },

    methods: {
        ...mapActions({
            getSingleMovie: 'movies/getSingleMovie'
        })
    },

    async beforeRouteEnter(to, from, next) {
        await store.dispatch("movies/getSingleMovie");
        next();
    },  
}
</script>