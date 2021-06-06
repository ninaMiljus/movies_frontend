import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from '../components/Movies'
import Movie from '../components/Movie'
import AddMovie from '../components/AddMovie'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/movies'
  },
  {
    path: '/movies',
    name: 'movies',
    component: Movies
  },
  {
    path: '/movie/{id}',
    name: 'movie',
    component: Movie
  },
  {
    path: '/add',
    name: 'addMovie',
    component: AddMovie
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
