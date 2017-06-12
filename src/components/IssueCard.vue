<template>
  <div class="issueCard">
    <b>{{ issue.name  }}</b> <br>
    <b>By:</b> {{ issue.owner }} <br>
    {{ issue.description }} <br>
    <router-link :to="{ name: 'Issue', params: { 'idIssue': issue.id }}">Show More</router-link>
  </div>
</template>

<script>
export default {
  name:'IssueCard',
  props: ['issue'],
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

</style>
