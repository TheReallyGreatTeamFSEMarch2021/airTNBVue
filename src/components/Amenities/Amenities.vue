<template>
  <div>
      <h1>{{list[0].value}}</h1>
  </div>
</template>

<style scoped src="./Amenities.css">
</style>
<script>
import axios from 'axios';


export default {
  name: 'Amenities',
  
  props: {
 
  },

  data(){
      return{
          list:[],
          
      }
  },

  mounted(){
        axios.get('http://localhost:8080/api/amenity/getByListingId/1')
        .then(response => {
            this.list = response.data;
            
        })
  }
}
</script>
