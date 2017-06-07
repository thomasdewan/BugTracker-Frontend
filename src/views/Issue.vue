<template>
<div>
  <div class="issue">
    <h2>Informations</h2>
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
  </div>
  <div class="Comments">
    <h2>Comments</h2>
    <div v-if='!isCommentsEmpty'>
      <div class="issueComment" v-for="comment in comments">
        {{comment.comment}} by {{comment.owner}}
      </div>
    </div>
    <div v-else>
      No Comments
    </div>
  </div>
  <div class="state">
    <h2>State</h2>
    Current State: {{this.states[(issue.state)-1]}}<br>
    <div v-if='issue.owner == user'>
      <div v-if='issue.state==2'>
        <button type="stateOpen" v-on:click="stateChange(1)">Open</button>
      </div>
      <div v-if='issue.state==1'>
        <button type="stateClose" v-on:click="stateChange(2)">Close</button>
        <button type="stateArchived" v-on:click="stateChange(3)">Archive</button>
      </div>
    </div>
  </div>
  <div v-if='issue.owner == user'>
    <button class="delete" v-on:click="deleteIssue">Delete Issue</button>
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
      isCommentsEmpty:true,
      states:["Open","Closed","Archived"],
      user: localStorage.getItem('username')
    }
  },
  methods:{
    deleteIssue : function () {
      this.$http.delete('http://127.0.0.1:8000/bugTracker/issue/'+this.issue.id, {emulateJSON: true})
         .then(response => {
              console.info(response)
              this.$router.push({name:'IssueList'})
          }, response => {
              console.info(response)
          });
      console.log("YO")
    },
    stateChange:function(state){
      console.log(state)

      const formData = {
        state:state
      };

      this.$http.patch('http://127.0.0.1:8000/bugTracker/issue/'+this.issue.id, formData, {emulateJSON: true})
         .then(response => {
              console.info(response)
              this.issue.state = state
              //this.$router.push({name:'IssueList'})
          }, response => {
              console.info(response)
          });

    },
  },
  created: function () {
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
        if (response.data.length!=0) {
          this.isCommentsEmpty=false
        }
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
