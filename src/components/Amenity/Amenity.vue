<template>
  <div>
      <h1>{{amenity.value}}</h1>
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
