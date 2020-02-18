require('./bootstrap');

import Vue from 'Vue'
import App from './App.vue'
import router from './router'

new Vue ({
  router,
  render: h => h(App)
}).$mount('app')
