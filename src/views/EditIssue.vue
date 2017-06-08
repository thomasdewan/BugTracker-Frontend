<template>
  <div>
    <h1>
      <button class="customButton" id="backButton" v-on:click="back">Back</button> <br>
      Edit Issue Page
    </h1>
    <h3>
      Fill in the fields you want to change <br>
      Leave blank to leave the field unmodified
    </h3>
    <form class="registerForm">
      Issue Name: <input type="text" v-model="name"/><br>
      Description: <input type="text" v-model="description"/><br>
      <p><button type="button" v-on:click="editIssue">Validate</button></p>
    </form>
  </div>
</template>

<script>
export default {
  name:'EditIssue',
  data(){
    return{
      idIssue:'',
      name:'',
      description:''
    }
  },
  methods:{
    back:function(){
      this.$router.push({name: 'Issue', params: { idIssue: this.idIssue }});
    },
    editIssue: function(){

      var formData = {};
      var modified = false;
      if (this.name.length!=0) {
        formData['name']=this.name;
        modified=true;
      }
      if (this.description.length!=0) {
        formData['description']=this.description;
        modified=true;
      }

      if(modified){
        //Send Request to modify
        this.$http.patch('http://127.0.0.1:8000/bugTracker/issue/'+this.idIssue, formData, {emulateJSON: true})
           .then(response => {
                this.$router.push({name: 'Issue', params: { idIssue: this.idIssue }});
            }, response => {
                console.info(response)
            });

      } else {
        alert("All the Fields are empty");
      }

    }
  },
  created: function () {
    this.idIssue=this.$route.params.idIssue
  }
}
</script>

<style>
#backButton{

}
</style>
