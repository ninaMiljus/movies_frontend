import baseService from '../services/baseSevice.js'

export default class MoviesService{
    async getAllMovies(){
        const response = await baseService.get('/movies');

        return response.data;
    }

    async getSingleMovie(){
        const response = await baseService.get('/movies/{id}');

        return response;
    }

    async addMovie(){
        const response = await baseService.post('/movies');

        return response;
    }

    async deleteMovie(){
        const response = await baseService.delete('/movies/{id}')
    
        return response;
    }
}

export const moviesService = new MoviesService;