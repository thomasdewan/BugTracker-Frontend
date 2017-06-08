<template>
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
</template>

<script>
import bus from '../bus'
export default {
  name:'NavBar',
  data(){
    return{
      username:localStorage.getItem('username'),
    }
  },
  methods:{
    logout: function(){
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      this.username='';
      this.$router.push({name:'Home'});
    }
  },
  created() {
    bus.$on('authenticated', function(usernameSent){
      this.username=usernameSent;
    }.bind(this))
  }
}
</script>

<style>
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
</style>
