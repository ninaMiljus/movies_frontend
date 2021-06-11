import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from '../components/Movies'
import Movie from '../components/Movie'
import AddMovie from '../components/AddMovie'
import LoginComponent from '../components/LoginComponent'
import AppRegister from "../components/AppRegister";

import { globalAuthGuard } from '../guards/auth.guard';  

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/movies'
  },
  {
    path: '/movies',
    name: 'movies',
    component: Movies,
    meta: { authRequired: true }
  },
  {
    path: '/movies/:id',
    name: 'movie',
    component: Movie,
    meta: { authRequired: true }
  },
  {
    path: '/add',
    name: 'addMovie',
    component: AddMovie
  },
  {
    path: '/login',
    name: 'login',
    component: LoginComponent
  },
  {
    path: "/register",
    name: 'register',
    component: AppRegister,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(globalAuthGuard);

export default router
