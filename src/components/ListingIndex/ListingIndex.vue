<template>
  <div id="listingIndex">
     <h1>ListingIndex</h1>
     <GMap
     :lat="42.72"
     :long="78.01"
     />
     <PhotoGallery/>
  </div>

</template>

<script>
import GMap from '../GMap.vue'
import PhotoGallery from '../PhotoGallery/PhotoGallery.vue'
  export default {
    name: 'ListingIndex',
    props: {
    },
    components:{
        GMap,
        PhotoGallery
    }
    ,
    data(){
        return{
          
        }
    },
    mounted(){
          
    }
    
  }
</script>
<style scoped src="./ListingIndex.css"></style>