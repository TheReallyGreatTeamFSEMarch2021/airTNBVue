<template>
  <div id="listingIndex">
     <h1>ListingIndex</h1>
     <p>hi</p>
    <div style="height:1000px;width:1000px;">
        <iframe
        width="600"
        height="450"
        style="border:0"
        loading="lazy"
        allowfullscreen
        src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyAlQlrrSaPgoOxEwXgui45oBC97YQC1lfs&q=Space+Needle,Seattle+WA`">
    </iframe>
    </div>
  </div>

</template>

<style scoped src="./ListingIndex.css">
</style>
<script>
  export default {
    name: 'ListingIndex',
    
    props: {
      
    },
    data(){
        return{
          
        }
    },
    mounted(){
          
    }
    
  }
</script>