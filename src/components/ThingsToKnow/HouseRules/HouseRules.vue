<template>
    <div v-if="ruleList" class="row col-4">
       <h4>House Rules</h4>
        <p><v-icon color=#000 small>mdi-clock</v-icon> Check in: {{ruleList.checkInTime}}</p>
        <p><v-icon color=#000 small>mdi-clock</v-icon> Check out: {{ruleList.checkOutTime}}</p>
        <p v-if='regex.test(ruleList.checkInMethod)&&ruleList.checkInMethod!="SELF_SMART_LOCK"'><v-icon color=#000 small>mdi-door-open</v-icon> Self check-in with {{ruleList.checkInMethod.split('_')[1].toLowerCase()}}</p>
        <p v-else-if='regex.test(ruleList.checkInMethod)'><v-icon color=#000 small>mdi-door-open</v-icon> Self check-in with smart lock</p>
        <p v-if="!ruleList.smokingAllowed"><v-icon color=#000 small>mdi-smoking-off</v-icon> No smoking</p>
        <p v-else><v-icon color=#000 small>mdi-smoking</v-icon> Smoking allowed</p>
        <p v-if="!ruleList.petsAllowed"><v-icon color=#000 small>mdi-paw-off</v-icon> No pets</p>
        <p v-else><v-icon color=#000 small>mdi-paw</v-icon> Pets allowed</p>
        <p v-if="!ruleList.childSuitable"><v-icon color=#000 small>mdi-baby-carriage-off</v-icon> Not suitable for children and infants</p>
        <p v-if="!ruleList.partiesAllowed"><v-icon color=#000 small>mdi-speaker-off</v-icon> No parties or events</p>
        <p v-else><v-icon color=#000 small>mdi-speaker</v-icon> Parties allowed</p>
    </div>
</template>

<style scoped src="./HouseRules.css">
</style>
<script>
  export default {
    name: 'HouseRules',
    
    props: {
      ruleList: Object
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