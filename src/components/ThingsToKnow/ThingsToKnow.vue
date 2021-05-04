<template>
    <div v-if="listing" id="thingsToKnow">
    <h3>Things To Know</h3>
    <div class="row col-4">
       <h4>House Rules</h4>
        <p>Check in: {{this.listing.ruleList.checkInTime}}</p>
        <p>Check out: {{this.listing.ruleList.checkOutTime}}</p>
        <p v-if='regex.test(this.listing.ruleList.checkInMethod)&&this.listing.ruleList.checkInMethod!="SELF_SMART_LOCK"'>Self check-in with {{this.listing.ruleList.checkInMethod.split('_')[1].toLowerCase()}}</p>
        <p v-if="!listing.ruleList.smokingAllowed">No smoking</p>
        <p v-if="!listing.ruleList.petsAllowed">No pets</p>
        <p v-if="!listing.ruleList.childSuitable">Not suitable for children</p>
        <p v-if="!listing.ruleList.partiesAllowed">No parties or events</p>
    </div>
    <div class="row col-4">
        <h4>Health &amp; safety</h4>
        <p v-if="this.listing.healthAndSafetyInfo.enhancedCleaning">Committed to AirTNP's enhanced cleaning process</p>
        <p>AirTNP's social-distancing and other COVID-19-related guidelines apply</p>
        <p v-if="listing.healthAndSafetyInfo.cameraInfo!=null">Security camera/recording device</p>
        <!-- todo: this doesn't work -->

    </div>
    <div class="row col-4">
        <h4>Cancellation policy</h4>
    </div>
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