<template>
  <div>
    <h1>
      Add Comment Page
      <button class="customButton" id="backButton" v-on:click="back">Back</button>
    </h1>
    <form class="addComment">
      Comment: <br> <textarea name="Text1" cols="40" rows="5" v-model="comment"></textarea><br>
      <p><button type="button" class="customButton" v-on:click="addComment">Add Comment</button></p>
    </form>
  </div>
</template>

<script>
export default {
  name:'AddComment',
  data () {
    return {
      idIssue:'',
      comment:''
    }
  },
  methods: {
    back: function(){
      //Go Back to previous page
      this.$router.push({name: 'Issue', params: { idIssue: this.idIssue }});
    },
    addComment:function(){
      //Check if something was entered
      if (this.comment.length!=0){
        //Ok To Register

        const formData = {
          issue: this.idIssue,
          comment: this.comment,
        };

        this.$http.post('http://127.0.0.1:8000/bugTracker/comment/', formData, {emulateJSON: true})
           .then(response => {
                // If OK => redirect to issue page
                this.$router.push({ name: 'Issue', params: { 'idIssue': this.idIssue }});
            }, response => {
                console.info(response)
            });

      } else {
        alert("Please Fill In All The Fields");
      }
    }
  },
  created: function () {
    this.idIssue=this.$route.params.idIssue;
  }
}
</script>

<style>

.addComment{
  border-width: 2px;
}

.textBox {
  width: 220px;
  height: 100px
}

</style>
