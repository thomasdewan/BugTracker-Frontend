<template>
<div>
  <div class="issue">
    <h2>
      Informations
      <button class="customButton" id="backButton" v-on:click="back">Back</button>
    </h2>
      <b>{{ issue.name }}</b> <br>
      <b>By:</b> {{ issue.owner }} <br>
      {{ issue.description }} <br>
      <b>Creation Date:</b> {{issueDate}} at {{issueTime}}<br>
      <div class="editButtonSection" v-if='issue.owner == user'>
        <button class="customButton" id="edit" v-on:click="editIssue">Edit Issue</button>
      </div>
  </div>
  <div class="comments">
    <h2>Comments</h2>
    <div v-if='!isCommentsEmpty'>
      <div class="issueComment" v-for="comment in comments">
        <a class="ownerComment">{{comment.owner}}</a> wrote: <br>
        {{comment.comment}}<br>
        <a class="dateComment">on {{comment.creationDate}}</a>
      </div>
    </div>
    <div v-else>
      No Comments
    </div>
    <div class="commentButtonSection">
      <button class="customButton" id="comment" v-on:click="addComment">Add Comment</button>
    </div>
  </div>
  <div class="state">
    <h2>State</h2>
    Current State: {{this.states[(issue.state)-1]}}<br><br>
    <div v-if='issue.owner == user'>
      <div v-if='issue.state==2'>
        <button class="customButton" type="stateOpen" v-on:click="stateChange(1)">Open</button>
      </div>
      <div v-if='issue.state==1'>
        <button class="customButton" type="stateClose" v-on:click="stateChange(2)">Close</button>
        <button class="customButton" type="stateArchived" v-on:click="stateChange(3)">Archive</button>
      </div>
    </div>
    <div v-else>
      <a>You are not allowed to change the state of the issue</a>
    </div>
  </div>
  <div class="deleteButtonSection" v-if='issue.owner == user'>
    <button class="customButton" id="delete" v-on:click="deleteIssue">Delete Issue</button>
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
      issueDate:'',
      issueTime:'',
      isCommentsEmpty:true,
      states:["Open","Closed","Archived"],
      user: localStorage.getItem('username')
    }
  },
  methods:{
    editIssue: function(){
      this.$router.push({name: 'EditIssue', params: { idIssue: this.issue.id }});
    },
    back : function () {
      this.$router.push({name: 'IssueList'});
    },
    addComment : function(){
      this.$router.push({name: 'AddComment', params: { idIssue: this.issue.id }});
    },
    deleteIssue : function () {
      this.$http.delete('http://127.0.0.1:8000/bugTracker/issue/'+this.issue.id, {emulateJSON: true})
         .then(response => {
              this.$router.push({name:'IssueList'});
          }, response => {
              console.info(response);
          });
    },
    stateChange:function(state){

      const formData = {
        state:state
      };

      this.$http.patch('http://127.0.0.1:8000/bugTracker/issue/'+this.issue.id, formData, {emulateJSON: true})
         .then(response => {
              this.issue.state = state;
          }, response => {
              console.info(response);
          });

    },
  },
  created: function () {
      this.$http.get(`http://127.0.0.1:8000/bugTracker/issue/`+this.$route.params.idIssue)
        .then(response => {
          // JSON responses are automatically parsed.
          this.issue=response.data;
          this.issueDate = response.data.creationDate.substring(0,10);
          this.issueTime = response.data.creationDate.substring(11,19);
        }, response => {
            console.info(response);
        });
      this.$http.get(`http://127.0.0.1:8000/bugTracker/commentForIssue/`+this.$route.params.idIssue)
        .then(response => {
        if (response.data.length!=0) {
          //Check if there are comments for the view
          this.isCommentsEmpty=false;
        }
        this.comments=response.data;
        }, response => {
            console.info(response);
        });
      }
}
</script>
<style>

.issueName{
  color: red
}

.issue{
  margin: 35px;
  text-align: left;
  border-bottom: 1px solid #333;
  padding-bottom: 40px;
}

.editButtonSection{
  float: right;
  width: 70px;
}

.comments{
  margin: 35px;
  text-align: left;
  border-bottom: 1px solid #333;
  padding-bottom: 40px;
}

.issueComment{
  margin-left:15px;
  margin-bottom: 15px;
}

.ownerComment{
  color: #0174DF
}
.dateComment{
  font-size: 75%
}

.commentButtonSection{
  float: right;
  width: 100px;
}


.state{
  margin: 35px;
  text-align: left;
  border-bottom: 1px solid #333;
  padding-bottom: 30px;
}

.deleteButtonSection{
  margin-right: 35px;
  margin-bottom: 20px;
  float: right;
}

#delete{
  background-color: #FE2E2E;
}

#comment{
background-color: #2E9AFE;
}

#backButton{
  float: right;
  width: 70px;
}

#edit{
}

</style>
