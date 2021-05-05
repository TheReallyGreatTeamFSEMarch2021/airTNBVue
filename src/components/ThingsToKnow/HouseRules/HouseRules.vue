<template>
    <div v-if="listing" class="row col-4">
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
</template>

<style scoped src="./HouseRules.css">
</style>
<script>
  export default {
    name: 'HouseRules',
    
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