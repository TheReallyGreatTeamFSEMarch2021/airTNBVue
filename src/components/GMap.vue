<template>
<div>
    
    <iframe width="600" 
      height="450" 
      style="border:0" 
      loading="lazy" 
      allowfullscreen 
        :src="`https://www.google.com/maps/embed/v1/place?`+
        `key=AIzaSyAlQlrrSaPgoOxEwXgui45oBC97YQC1lfs&`+
        `q=${lat}%20-${long}`">
    </iframe>
</div>
</template>

<script>
export default {
    name:"GMap",
    props:{
        //taking longitude as a positive number and converting to negative
        // following Fei's structure from database
        lat:Number,
        long:Number
    }
}
</script>

<style>

</style>