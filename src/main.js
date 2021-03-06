import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.use(Vuex);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
