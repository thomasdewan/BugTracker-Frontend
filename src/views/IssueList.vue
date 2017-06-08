<template>
  <div>
    <h1> Issue List Page </h1>
    <router-link :to="{name: 'AddIssue'}" class="addIssue">Add Issue</router-link>
      <div class="issueCard" v-for="issue in issues">
        <b>{{ issue.name  }}</b> <br>
        <b>By:</b> {{ issue.owner }} <br>
        {{ issue.description }} <br>
        <router-link :to="{ name: 'Issue', params: { 'idIssue': issue.id }}">Show More</router-link>
      </div>
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
              // JSON responses are automatically parsed.
              this.issues = response.body;

            }, response => {
                console.log(response);
            });
      }
}
</script>

<style>
.issueCard{
  text-align: left;
  border: 2px solid grey;
  margin: 0 auto;
  padding: 10px;
  width: 300px;
  margin-top: 20px;
}

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
