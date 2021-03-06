import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@kouts/vue-modal/dist/vue-modal.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import './assets/css/main.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
 
  render: h => h(App)
}).$mount('#app')
