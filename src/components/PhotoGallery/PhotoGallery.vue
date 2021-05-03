<template>
  <div v-if="bDataLoaded" id="gallery">
        <div id="c1" class="bigContainer">
          <img v-bind:src="`${photos[0].url}`" alt="photo" width="100%" height="100%">
        </div>
        <div id="c2" class="littleContainer">
          <img v-bind:src="`${photos[1].url}`" alt="photo" width="100%" height="100%">
        </div>
        <div id="c3" class="littleContainer">
          <img v-bind:src="`${photos[2].url}`" alt="photo" width="100%" height="100%">
        </div>
        <div id="c4" class="littleContainer">
          <img v-bind:src="`${photos[3].url}`" alt="photo" width="100%" height="100%">
        </div>
        <div id="c5" class="littleContainer">
          <img v-bind:src="`${photos[4].url}`" alt="photo" width="100%" height="100%">
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

  },

  data(){
      return{
          photos:[],
          bDataLoaded: false
      }
  },

  mounted(){
        let listingId = this.$route.params.id;

        axios.get('http://localhost:8080/api/photo/getByListingId/'+listingId)
        .then(response => {
            this.photos = response.data;
            if(this.photos.length > 0){
              this.bDataLoaded = true;
            }
        })
  }
}
</script>