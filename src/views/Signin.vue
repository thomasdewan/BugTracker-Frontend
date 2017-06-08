<template>
  <div>
    <h1> Signin Page </h1>
    <br>
    <form class="registerForm">
      Username: <input type="text" placeholder="Username" v-model="username"/><br>
      First Name: <input type="text" placeholder="First Name" v-model="first_name"/><br>
      Last Name: <input type="text" placeholder="Last Name" v-model="last_name"/> <br>
      E-Mail Address: <input type="text" placeholder="Email address" v-model="email"/><br>
      Password: <input type="password" placeholder="Password" v-model="password"/><br>
      <p><button type="button" v-on:click="signinMethod">Create Account</button></p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'signin',
  data () {
    return {
      username:'',
      first_name:'',
      last_name:'',
      email:'',
      password:''
    }
  },
  methods: {
    signinMethod: function (event) {

      if (this.username.length!=0 &&
          this.first_name.length!=0 &&
          this.last_name.length!=0 &&
          this.email.length!=0 &&
          this.password.length!=0){
        //OK TO REGISTER

        const formData = {
          username: this.username,
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password
        };

        this.$http.post('http://127.0.0.1:8000/bugTracker/register/', formData, {emulateJSON: true})
           .then(response => {
                this.$router.push({name:'Home'});
            }, response => {

              var error=""
              if (response.body.username) {
                error+="- "+response.body.username+"\n";
              }
              if (response.body.email) {
                error+="- "+response.body.email+"\n";
              }

              if (error.length!=0) {
                alert(error);
              } else {
                console.log(response);
              }
            });

      } else {
        alert("Please Fill In All The Fields");
      }


    }
  }
}
</script>

<style>

</style>
