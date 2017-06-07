<template>
  <div>
    <h1> Add Issue Page </h1>
    <br>
    <form class="register-form">
      Issue: <input type="text" placeholder="Issue" v-model="issue"/><br>
      Description: <input type="text" placeholder="Description" v-model="description"/><br>
      <p><button type="button" v-on:click="createIssue">Create Issue</button></p>
    </form>
  </div>
</template>

<script>
export default {
  name:'addIssue',
  data () {
    return {
      issue:'',
      description:''
    }
  },
  methods: {
    createIssue: function () {
      if (this.issue.length!=0 &&
          this.description.length!=0){
        //OK TO REGISTER

        const formData = {
          name: this.issue,
          description: this.description,
          state: 1
        };

        this.$http.post('http://127.0.0.1:8000/bugTracker/issue/', formData, {emulateJSON: true})
           .then(response => {
                console.info(response)
                this.$router.push({name:'IssueList'})
            }, response => {
                console.info(response)
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
