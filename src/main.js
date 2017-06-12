// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import bus from './bus'
Vue.use(VueResource);

Vue.config.productionTip = true


Vue.http.interceptors.push(function(request, next) {
  // modify request
  if (request.url!='http://127.0.0.1:8000/api-token-auth/'){
    var tokenString = 'Token '+localStorage.getItem('token')
    if (tokenString=='Token null'){
      bus.$emit('deauthenticated', this.username);
      router.push({name:'Login'});
    }
    else{
      request.headers.set('Authorization', tokenString)
    }
  }
  next(function(response) {
    // modify response
  });
});

Vue.component('navbar', require('./components/Navbar.vue'));
Vue.component('issueCard', require('./components/IssueCard.vue'))

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
