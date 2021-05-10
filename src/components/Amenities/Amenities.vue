<template>
<div>
  <div :key="amenity.id" v-for="amenity in list">
       <Amenity :amenity = "amenity"/>
    </div>
</div>
</template>

<style scoped src="./Amenities.css">
</style>
<script>
import axios from 'axios';
import Amenity from '../Amenity/Amenity'

export default {
  name: 'Amenities',
  
  props: {
    id: Number

  },

  data(){
      return{
          list: Array,
          
      }
  },
  components: {
    Amenity

  },

  mounted(){
        axios.get('https://airtnbapi.jaitken-projects.com/api/amenity/getByListingId/'+this.id)
        .then(response => {
            this.list = response.data;
            
        })
  }
}
</script>
