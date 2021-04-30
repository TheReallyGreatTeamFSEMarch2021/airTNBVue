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

      let listingId = this.$route.params.id;
        axios.get('http://localhost:8080/api/amenity/getByListingId/'+listingId)
        .then(response => {
            this.list = response.data;
            
        })
  }
}
</script>
