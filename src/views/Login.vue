<template>
  <div>
    <h1> Login Page </h1>
    <br>
      <form class="login-form">
        <input type="text" placeholder="Username" v-model="username"/>
        <input type="password" placeholder="Password" v-model="password"/>
        <button type="button" v-on:click="loginMethod">Log in</button>
        <p class="message">
          Not registered?
          <router-link :to="{ name: 'Signin'}">Sign In</router-link>
        </p>
      </form>
  </div>
</template>

<script>
import bus from '../bus'

export default {
  name: 'login',
  data () {
    return {
      username:'',
      password:'',
    }
  },
  methods: {
    loginMethod: function(){

    const formData = {
      username: this.username,
      password: this.password
    };

    this.$http.post('http://127.0.0.1:8000/api-token-auth/', formData, {emulateJSON: true})
       .then(response => {
            console.log("Token: "+response.body.token)


            localStorage.setItem('username', this.username)
            localStorage.setItem('token', response.body.token)

            bus.$emit('authenticated', this.username)

            this.$router.push({name:'IssueList'})
        }, response => {
            alert("Bad Credentials")
        });

    }
  }
}
</script>

<style>

</style>
