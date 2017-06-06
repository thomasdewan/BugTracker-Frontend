<template>
  <div>
    <h1> Login Page </h1>
    <br>
    <form class="register-form">
      <input type="text" placeholder="Username"/>
      <input type="text" placeholder="First Name"/>
      <input type="text" placeholder="Last Name"/>
      <input type="text" placeholder="Email address"/>
      <input type="password" placeholder="Password"/>
      <button type="button">Create Account</button>
      <p class="message">
        Already registered?
        <button type="button" v-on:click='goToLogin'>Sign In</button>
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
    goToLogin: function (event) {
        this.$router.push({name: 'Login'})
    }
  }
}
</script>

<style>

</style>
