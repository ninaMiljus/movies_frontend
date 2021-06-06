import baseService from '../services/baseSevice.js'

export default class MoviesService{
    async getAllMovies(){
        const response = await baseService.get('/movies');

        return response.data;
    }

    async getSingleMovie(id){
        const {data} = await baseService.get(`/movies/${id}`);

        return data;
    }

    async addMovie(movie){
        const response = await baseService.post('/movies', movie);

        return response;
    }

    async deleteMovie(id){
        const response = await baseService.delete(`movies/${id}`)
    
        return response;
    }
}

export const moviesService = new MoviesService;