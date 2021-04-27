<template>

  <div id="app">    
     
    <div class="row col-12">
      <h1>NavBar Vue Component</h1>
    </div>
    <router-view></router-view>  
  </div>
</template>

<script>


//can pass in props through the component
//they have lifecycle methods -- can make axios calls through the lifecycle methods


export default {
  name: 'App',

  components: {
    
  }
}
</script >

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app * {
  border: 1px solid green;
  box-sizing: border-box;
  margin:0px;
  padding:0px;
}

h1{
    color:darkblue;
  }
  
  h2{
    color:darkgreen;
  }

  body{
    margin:0px;
    padding:0px;
  }
  
  /* added by Fei */
  .row::after{
    content: "";
    clear: both;
    display: table;
  }
  
  [class*="col-"]{
    float:left;
    padding:2px;
  }
  
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}
  


  
</style>

