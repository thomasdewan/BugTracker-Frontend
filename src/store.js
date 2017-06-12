import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state ={
  username:'',
}

const mutations = {
  authenticate (state, username) {
    state.username = username;
  },
  deauthenticate(state){
    state.username = '';
  }
}

export default new Vuex.Store({
    state,
    mutations
})
