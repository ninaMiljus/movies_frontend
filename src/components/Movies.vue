<template>
    <div>
        <table>
            <tr>
                <th>Title</th>
                <th>Director</th>
                <th>Action</th>
                <th>View movie</th>
            </tr>
            <tr v-for="movie in movies" :key="movie.id">
                <td>{{movie.title}}</td>
                <td>{{movie.director}}</td>
                <td><router-link :to="`/movies/${movie.id}`">Single movie</router-link></td>
                <td><button @click="remove(movie.id)">Delete movie</button></td>
            </tr>
        </table>
        <br>
        <button @click="logout" class="btn btn-danger">Logout</button>
    </div>
</template>

<script>
import {moviesService} from '../services/moviesService.js'
import { authService } from "../services/authService";
export default {
    data(){
        return{
            movies: [],
        }
    },

    created(){
        this.movies = this.getAllMovies();
    },

    methods: {
        async getAllMovies(){
            try{
                this.movies = await moviesService.getAllMovies();
            } catch(err){
                console.log(err);
            }
        },

        async remove(id){
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
    }
}
</script>
