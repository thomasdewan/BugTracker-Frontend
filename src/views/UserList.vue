<template>
  <div>
    <h1> User Page </h1>
      <div class="issue" v-for="user in users">
        {{user.username}}<br>
        {{user.first_name}}<br>
      </div>
  </div>
</template>

<script>
export default {
  name: 'userList',
  data () {
    return {
      users:[]
    }
  },
  created: function () {
          this.$http.get(`http://127.0.0.1:8000/bugTracker/user/`)
            .then(response => {
              // JSON responses are automatically parsed.
              this.users=response.data.results

            }, response => {
                alert("ERROR")
            });
      }
}
</script>

<style>

</style>
