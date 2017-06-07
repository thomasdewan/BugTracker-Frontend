<template>
  <div id="app">
      <div class="container">
          <router-link :to="{name: 'IssueList'}">Home</router-link>
          <a v-if='username'>
            <a>{{username}}</a>
            <a href="" v-on:click.prevent="logout">Logout</a>
          </a>
          <a v-else>
            <router-link :to="{name: 'Login'}">Login</router-link>
            <router-link :to="{name: 'Signin'}">Signin</router-link>
          </a>
      </div>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import bus from './bus'

export default {
  name: 'app',
  data () {
    return {
      username:localStorage.getItem('username')
    }
  },
  methods: {
    logout: function(){
      localStorage.removeItem('username')
      localStorage.removeItem('token')
      this.username=null
    }
  },
  created() {
    bus.$on('authenticated', function(usernameSent){
      this.username=usernameSent
    }.bind(this))
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html, body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;
}

.issue{
  border: 2px solid grey;
  border-radius: 5px;
  margin: 10px;
  padding: 20px
}

.issueName{
  color: red
}
</style>
