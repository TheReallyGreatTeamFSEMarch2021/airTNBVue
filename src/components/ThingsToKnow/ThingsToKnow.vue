<template>
    <div v-if="listing" id="thingsToKnow">
    <h3>Things To Know</h3>
    <HouseRules v-if="listing" v-bind:listing="listing"/>
    <HealthAndSafetyInfo v-if="listing" v-bind:listing="listing"/>
    <div class="row col-4">
        <h4>Cancellation policy</h4>
    </div>
    </div>
</template>

<style scoped src="./ThingsToKnow.css">
</style>
<script>
  import HouseRules from "./HouseRules/HouseRules";
  import HealthAndSafetyInfo from "./HealthAndSafetyInfo/HealthAndSafetyInfo";
  export default {
    name: 'ThingsToKnow',
    components: {
      HouseRules,
      HealthAndSafetyInfo

    },
    props: {
      listing: Object
    },
    mounted(){
          
    }
    
  }
</script>