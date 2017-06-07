// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = true

Vue.http.interceptors.push(function(request, next) {

  // modify request
  console.log("ENVOI")

  // continue to next interceptor
  next(function(response) {

    // modify response
    console.log("RECOI")

  });
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
