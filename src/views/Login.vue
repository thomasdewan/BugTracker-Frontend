<template>
  <div>
    <h1> Login Page </h1>
    <br>
      <form class="loginForm">
        <a>Username</a> <br>
        <input type="text" placeholder="Username" v-model="username"/> <br>
        <a>Password</a> <br>
        <input type="password" placeholder="Password" v-model="password" v-on:keyup.enter="loginMethod"/> <br>
        <button type="button" class="submitButton" v-on:click="loginMethod">Log in</button>
      </form>
  </div>
</template>

<script>
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

            localStorage.setItem('username', this.username);
            localStorage.setItem('token', response.body.token);

            this.$store.commit('authenticate', this.username);
            
            this.$router.push({name:'Home'});
        }, response => {
            alert("Bad Credentials");
        });

    }
  }
}
</script>

<style>

.loginForm{

}

.submitButton{
  margin-top: 15px;
}

</style>
