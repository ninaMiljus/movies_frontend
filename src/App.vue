<template>
  <div id="app">
    <div id="nav">
      <router-link to="/movies">All movies</router-link> |
      <router-link to="/add">Add movie</router-link> |
      <div v-if="isLoggedIn">
          <router-link class="navbar-brand" to="/logout" tag="button">Logout</router-link>
        </div>
        <div v-if="isNotLoggedIn">
          <router-link class="navbar-brand" to="/login" tag="button">Login</router-link>
          <router-link class="navbar-brand" to="/register" tag="button">Register</router-link>
        </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
  data() {
    return {};
  },
  computed: {
    isLoggedIn() {
      return window.localStorage.getItem("token");
    },
    isNotLoggedIn() {
      return !window.localStorage.getItem("token");
    },
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
