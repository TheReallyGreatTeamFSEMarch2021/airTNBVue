<template>
  <div>
      <h1 style="color:black;">{{amenity.value}}</h1>
  </div>
</template>

<style scoped src="./Amenity.css">
</style>
<script>



export default {
  name: 'Amenity',
  
  props: {
      amenity: Object

  },

}
</script>
