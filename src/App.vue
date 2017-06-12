<template>
  <div id="app">
    <navbar v-bind:title="title"></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      title:"BugTracker"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.customButton{
    cursor:pointer;
    opacity: 1;
    font-family: 'Avenir';
    font-size: 12px;
    background-color: white;
    border-radius: 5px;
    color: black;
    border: 2px solid #333;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.customButton:hover{
  opacity: 0.7;
}
</style>
