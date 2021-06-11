<template>
  <div class="home">
    <div class="container">
      <b-form @submit.stop.prevent="login()">
        <b-form-group
          label="Email Adress:"
          label-for="email"
          description="Email adress"
        >
          <b-form-input
            id="email"
            v-model="user.email"
            type="email"
            placeholder="Enter email"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          label="Password:"
          label-for="password"
          description="Password"
        >
          <b-form-input
            id="password"
            v-model="user.password"
            type="password"
            placeholder="Enter password"
          >
          </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="dark">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import {authService} from '../services/authService.js'
export default {
  name: "LoginComponent",
  data() {
    return {
      user: {},
      error: "",
    };
  },
  components: {},
  methods: {
    login() {
      authService.login(this.user).then(response => {
        console.log(response);
        this.$router.push('/movies');
      })
      .catch((error) => {
          this.error = error.response.data[1];
          alert(this.error);
        });
    }
  },

  wrongCredentials() {
    alert(this.error);
  },
};
</script>