<template>
  <div>
    <h1> Signin Page </h1>
    <br>
      <table>
        <tr>
          <td>Username: </td>
          <td><input type="text" placeholder="Username" v-model="username"/></td>
        </tr>
        <tr>
          <td>First Name: </td>
          <td><input type="text" placeholder="First Name" v-model="first_name"/></td>
        </tr>
        <tr>
          <td>Last Name: </td>
          <td><input type="text" placeholder="Last Name" v-model="last_name"/></td>
        </tr>
        <tr>
          <td>E-Mail Address: </td>
          <td><input type="text" placeholder="Email address" v-model="email"/></td>
        </tr>
        <tr>
          <td>Password: </td>
          <td><input type="password" placeholder="Password" v-model="password"/></td>
        </tr>
      </table>
      <p><button type="button" v-on:click="signinMethod">Create Account</button></p>
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

table{
  margin: 0 auto;
}

td {
    text-align: left;
}

</style>
