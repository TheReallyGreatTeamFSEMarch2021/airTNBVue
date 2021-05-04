<template>
    <div v-if="listing" id="thingsToKnow">
    <h3>Things To Know</h3>
    <div class="row col-4">
       <h4>House Rules</h4>
        <p>Check in: {{listing.ruleList.checkInTime}}</p>
        <p>Check out: {{listing.ruleList.checkOutTime}}</p>
        <p v-if='regex.test(listing.ruleList.checkInMethod)&&listing.ruleList.checkInMethod!="SELF_SMART_LOCK"'>Self check-in with {{listing.ruleList.checkInMethod.split('_')[1].toLowerCase()}}</p>
        <p v-else-if='regex.test(listing.ruleList.checkInMethod)'>Self check-in with smart lock</p>
        <p v-if="!listing.ruleList.smokingAllowed">No smoking</p>
        <p v-else>Smoking allowed</p>
        <p v-if="!listing.ruleList.petsAllowed">No pets</p>
        <p v-else>Pets allowed</p>
        <p v-if="!listing.ruleList.childSuitable">Not suitable for children and infants</p>
        <p v-if="!listing.ruleList.partiesAllowed">No parties or events</p>
        <p v-else>Parties allowed</p>
    </div>
    <div class="row col-4">
        <h4>Health &amp; safety</h4>
        <p v-if="listing.healthAndSafetyInfo.enhancedCleaning">Committed to AirTNP's enhanced cleaning process</p>
        <p>AirTNP's social-distancing and other COVID-19-related guidelines apply</p>
        <p v-if="listing.healthAndSafetyInfo.cameraInfo!=null">Security camera/recording device</p>
        <p v-if='listing.healthAndSafetyInfo.smokeAlarm'>Smoke alarm</p>
        <p v-else>No smoke alarm reported</p>
        <p v-if='listing.healthAndSafetyInfo.cMonAlarm'>Carbon monoxide alarm</p>
        <p v-else>No carbon monoxide alarm reported</p>

    </div>
    <div class="row col-4">
        <h4>Cancellation policy</h4>
    </div>
    </div>
</template>

<style scoped src="./ThingsToKnow.css">
</style>
<script>
  export default {
    name: 'ThingsToKnow',
    
    props: {
      listing: Object
    },
    data(){
        return{
          regex: new RegExp("^SELF_.*$")
          
        }
    },
    mounted(){
          
    }
    
  }
</script>