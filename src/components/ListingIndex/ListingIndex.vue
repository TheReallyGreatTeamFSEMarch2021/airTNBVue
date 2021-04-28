<template>
  <div id="listingIndex">
     <h1>ListingIndex</h1>
     <GMap
     :lat="42.72"
     :long="78.01"
     />
  </div>

</template>

<script>
import GMap from '../GMap.vue'
  export default {
    name: 'ListingIndex',
    props: {
    },
    components:{
        GMap
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