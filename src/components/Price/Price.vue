<template>
  <div id="priceBox">
      <div id="pricePerNight">
          <span>${{this.price}} / night</span> <span>[Reviews]</span>
      </div>
      <div>
          CALENDAR Goes here
      </div>
      <v-btn elevation="2"></v-btn>
<span>You won't be charged yet</span>
<div id="priceBreakDown">

</div>
<hr>
<div id="grandTotal">
<span>Total</span>
</div>

  </div>
</template>

<style scoped src="./Price.css">

</style>
<script>
  import axios from 'axios';
  export default {
    name: 'DescriptionBox',
    
    props: ['listingId','listing'],
    data(){
        return{
          'price': ''
        }
    },
    created(){
    },
  }
</script>