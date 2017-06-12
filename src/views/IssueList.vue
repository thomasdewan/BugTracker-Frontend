<template>
  <div>
    <h1> Issue List Page </h1>
    <router-link :to="{name: 'AddIssue'}" class="addIssue">Add Issue</router-link>
    <issueCard v-for="issue in issues" v-bind:issue="issue" v-bind:key="issue.id"> </issueCard>
  </div>
</template>

<script>
export default {
  name: 'issueList',
  data () {
    return {
      issues:[],
    }
  },
  created: function () {
          this.$http.get(`http://127.0.0.1:8000/bugTracker/issue/`)
            .then(response => {
              this.issues = response.body;
            }, response => {
                console.log(response);
            });
      }
}
</script>

<style>
.addIssue{
  background-color: #FE2E2E;
  color: white;
  padding: 10px 20px;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}

.addIssue:hover{
  background-color: #FE642E;
}
</style>
