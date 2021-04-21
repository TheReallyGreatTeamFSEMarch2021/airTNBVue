<template>
  <div>
      <p>Photo Gallery</p>
      <div>{{photos}}</div>
      <div v-for="photo in photos" v-bind:key="photo.id">
        {{photo.url}}
      </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  name: 'PhotoGallery',
  
  props: {
    listingId: Number
  },

  data(){
      return{
          photos:null
      }
  },

  mounted(){
        axios.get('http://localhost:8080/api/photo/getByListingId/1')
        .then(response => {
            this.photos = response.data;
            
        })
  }

  
}
</script>