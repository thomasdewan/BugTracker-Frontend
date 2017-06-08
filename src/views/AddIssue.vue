<template>
  <div>
    <h1> Add Issue Page </h1>
    <br>
    <table>
      <tr>
        <td>Issue: </td>
        <td><input type="text" placeholder="Issue" v-model="issue"/></td>
      </tr>
      <tr>
        <td>Description: </td>
        <td><input type="text" placeholder="Description" v-model="description"/></td>
      </tr>
    </table>
    <p><button type="button" v-on:click="createIssue">Create Issue</button></p>
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
      //Check for Fields
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
                this.$router.push({name:'IssueList'});
            }, response => {
                console.info(response);
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
