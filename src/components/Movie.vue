<template>
    <div>
        <h1>{{movie.title}}</h1>
        <h2>{{movie.director}}</h2>
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

    beforeRouteEnter(to, from, next) {
        next(async vm => {
            try {
                vm.movie = await moviesService.getSingleMovie(to.params.id);
            } catch(e) {
                console.log(e);
            }
        })
    },
}
</script>