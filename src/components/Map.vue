<template>
      <iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyAlQlrrSaPgoOxEwXgui45oBC97YQC1lfs&q=${lat}%20-${long}`">
</template>

<script>
export default {
    name:"Map",
    props:{
        lat:0,
        long:0
    }
}
</script>

<style>

</style>