<template>
    <div v-if="listing" id="thingsToKnow">
    <h3>Things To Know</h3>
    <HouseRules v-if="listing" v-bind:ruleList="listing.ruleList"/>
    <HealthAndSafetyInfo v-if="listing" v-bind:healthAndSafetyInfo="listing.healthAndSafetyInfo"/>
    <CancellationPolicy v-if="listing" v-bind:listing="listing"/>
    </div>
</template>

<style scoped src="./ThingsToKnow.css">
</style>
<script>
  import HouseRules from "./HouseRules/HouseRules";
  import HealthAndSafetyInfo from "./HealthAndSafetyInfo/HealthAndSafetyInfo";
  import CancellationPolicy from "./CancellationPolicy/CancellationPolicy";
  export default {
    name: 'ThingsToKnow',
    components: {
      HouseRules,
      HealthAndSafetyInfo,
      CancellationPolicy

    },
    props: {
      listing: Object
    },
    mounted(){
          
    }
    
  }
</script>