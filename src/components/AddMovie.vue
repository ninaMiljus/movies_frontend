<template>
    <div>
        <form v-on:submit.prevent="addMovie">
            <input v-model="movie.title" type="text" placeholder="Title">
            <br>
            <input v-model="movie.director" type="text" placeholder="Director">
            <br>
            <button type="submit">Submit</button>
            <br>
            <button type="button" @click="reset">Reset form</button>
        </form>
    </div>
</template>

<script>
import {moviesService} from '../services/moviesService.js'
export default {
    name: 'AddMovie',
    data(){
        return {
            movie: {}
        }
    },

    created(){
        this.addMovie();
    },

    methods: {
        async addMovie(){
            try{
                await moviesService.addMovie(this.movie);
                this.$router.push({name: 'movies'});
            } catch(err){
                console.log(err);
            }
        },

        reset(){
            this.movie = {
                title: '',
                director: ''
            }
        }
    }
}
</script>
