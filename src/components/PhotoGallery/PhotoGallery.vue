<template>
  <div id="gallery">
      <div v-if="bDataLoaded">
        <div id="c1" class="bigContainer">
          <img v-bind:src="`${photos[0].url}`" alt="photo" width="100%" height="100%">
        </div>
        <div id="container2" class="littleContainer">
          <img v-bind:src="`${photos[1].url}`" alt="photo" width="100%" height="100%">
        </div>
        <div id="container3" class="littleContainer">
          <img v-bind:src="`${photos[2].url}`" alt="photo" width="100%" height="100%">
        </div>
        <div id="container2" class="littleContainer">
          <img v-bind:src="`${photos[3].url}`" alt="photo" width="100%" height="100%">
        </div>
        <div id="container4" class="littleContainer">
          <img v-bind:src="`${photos[4].url}`" alt="photo" width="100%" height="100%">
        </div>
      </div>
  </div>
</template>

<style scoped src="./GalleryStyle.css">
</style>
<script>
import axios from 'axios';


export default {
  name: 'PhotoGallery',
  
  props: {
    listingId: Number
  },

  data(){
      return{
          photos:[],
          bDataLoaded: false
      }
  },

  mounted(){
        axios.get('http://localhost:8080/api/photo/getByListingId/1')
        .then(response => {
            this.photos = response.data;
            this.bDataLoaded = true;
            
        })
  }

  
}
</script>