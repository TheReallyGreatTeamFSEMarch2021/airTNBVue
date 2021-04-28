<template>
  <div id="thingsToKnow">
     <h3>Things To Know</h3>
     <div class="row col-4">
       <h4>House Rules</h4>
        <p>Check in: {{this.listing.ruleList.checkInTime}}</p>
        <p>Check out: {{this.listing.ruleList.checkOutTime}}</p>
        <p v-if='regex.test(this.listing.ruleList.checkInMethod)'>Self check-in with {{this.listing.ruleList.checkInMethod.split('_')[1].toLowerCase()}}</p>
        <p v-if="!listing.ruleList.smokingAllowed">No smoking</p>
        <p v-if="!listing.ruleList.petsAllowed">No pets</p>
        <p v-if="!listing.ruleList.childSuitable">Not suitable for children</p>
        <p v-if="!listing.ruleList.partiesAllowed">No parties or events</p>
     </div><div class="row col-4">Health &amp; safety</div><div class="row col-4">Cancellation policy</div>
  </div>
</template>

<style scoped src="./ThingsToKnow.css">
</style>
<script>
  import axios from 'axios';
  export default {
    name: 'ThingsToKnow',
    
    props: {
      
    },
    data(){
        return{
          listing: null,
          regex: new RegExp("SELF_*")
          
        }
    },
    mounted(){
          axios.get('http://localhost:8080/api/listing/getById/1')
          .then(response=>this.listing=response.data);
    }
    
  }
</script>