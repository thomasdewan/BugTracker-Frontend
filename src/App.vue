<template>
  <div id="app">
      <ul>
          <li><router-link :to="{name: 'Home'}">Home</router-link></li>
          <a v-if='username'>
            <li><router-link :to="{name: 'IssueList'}">Issues</router-link></li>
            <li><a id="usernameMenu">{{username}}</a></li>
            <li><a href="" v-on:click.prevent="logout">Logout</a></li>
          </a>
          <a v-else>
            <li><router-link :to="{name: 'Login'}">Login</router-link></li>
            <li><router-link :to="{name: 'Signin'}">Signin</router-link></li>
          </a>
      </ul>
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
      this.$router.push({name:'Home'})
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
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover:not(.active) {
    background-color: #111;
}

#usernameMenu:hover:not(.active){
  background-color: #333;
}

.customButton{
    cursor:pointer;
    opacity: 1;
    font-family: 'Avenir';
    font-size: 12px;
    background-color: white;
    border-radius: 5px;
    color: black;
    border: 2px solid #333;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.customButton:hover{
  opacity: 0.7;
}
</style>
