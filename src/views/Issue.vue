<template>
<div>
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
  <h2>Comments</h2>
  <div class="issueComment" v-for="comment in comments">
    {{comment.comment}} by {{comment.owner}}
  </div>
</div>
</template>
<script>
export default {
  name: 'issue',
  data () {
    return {
      test:"TRUC",
      issue:{},
      comments:{},
    }
  },
  mounted: function () {
      this.$http.get(`http://127.0.0.1:8000/bugTracker/issue/`+this.$route.params.id)
        .then(response => {
          // JSON responses are automatically parsed.
          this.issue=response.data
        })
        .catch(e => {
          this.errors.push(e)
          console.info("ERROR MEC")
        })
      this.$http.get(`http://127.0.0.1:8000/bugTracker/commentForIssue/`+this.$route.params.id)
        .then(response => {
        // JSON responses are automatically parsed.
        this.comments=response.data
        })
        .catch(e => {
          this.errors.push(e)
          console.info("ERROR MEC")
        })
      }
}
</script>
<style>

</style>
