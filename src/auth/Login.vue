<template>
  <div>
    <h1> Login Page </h1>
    <br>
      <form class="login-form">
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password"/>
        <button type="button">Log in</button>
        <p class="message">
          Not registered?
          <button type="button" v-on:click='goToSignin'>Sign In</button>
        </p>
      </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginExists: false
    }
  },
  methods: {
    goToSignin: function (event) {
        this.$router.push({name: 'Signin'})
    }
  }
}
</script>

<style>

</style>
