<template>
    <div>
        <p>{{movie.title}}</p>
        <p>{{movie.director}}</p>
    </div>
</template>

<script>
import {moviesService} from '../services/moviesService.js'
export default {
    data(){
        return {
            movie: {}
        }
    },

    created(){
        this.movie = this.getSingleMovie();
    },

    methods: {
        async getSingleMovie(){
            await moviesService.getSingleMovie('/movies/{id}');
        }
    }

}
</script>
