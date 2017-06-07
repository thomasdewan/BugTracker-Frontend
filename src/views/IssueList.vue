<template>
  <div>
    <h1> Issue List Page </h1>
      <div class="issue" v-for="issue in issues">
        <div class="issueName">
          {{ issue.name  }}
        </div>
        <div class="issueOwner">
          By: {{ issue.owner }}
        </div>
        <div class="issueDescription">
          {{ issue.description }}
        </div>
        <div class="issueCreationDate">
          Creation Date: {{ issue.creationDate }}
        </div>
        <router-link :to="{ name: 'Issue', params: { 'id': issue.id }}">Show More</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'issueList',
  data () {
    return {
      issues:[]
    }
  },
  created: function () {
          this.$http.get(`http://127.0.0.1:8000/bugTracker/issue/`)
            .then(response => {
              // JSON responses are automatically parsed.
              this.issues=response.data.results

            }, response => {
                alert("ERROR")
            });
      }
}
</script>

<style>

</style>
