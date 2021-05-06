<template>
    <div v-if="healthAndSafetyInfo" class="row col-4">
        <h4>Health &amp; safety</h4>
        <p v-if="healthAndSafetyInfo.enhancedCleaning"><v-icon color=#000000 small>mdi-sparkles</v-icon> Committed to AirTNB's enhanced cleaning process</p>
        <p><v-icon color=#000000 small>mdi-spray-bottle</v-icon> AirTNB's social-distancing and other COVID-19-related guidelines apply</p>
        <p v-if="healthAndSafetyInfo.cameraInfo!=null"><v-icon color=#000000 small>mdi-alert-circle</v-icon> Security camera/recording device</p>
        <p v-if="healthAndSafetyInfo.animalsInfo"><v-icon color=#000 small>mdi-alert-circle</v-icon> May encounter potentially dangerous animal</p>
        <p v-if='healthAndSafetyInfo.smokeAlarm'><v-icon color=#000 small>mdi-bell</v-icon> Smoke alarm</p>
        <p v-else><v-icon color=#000000 small>mdi-help-circle</v-icon> No smoke alarm reported</p>
        <p v-if='healthAndSafetyInfo.cMonAlarm'><v-icon color=#000000 small>mdi-bell</v-icon> Carbon monoxide alarm</p>
        <p v-else><v-icon color=#000000 small>mdi-help-circle</v-icon> No carbon monoxide alarm reported</p>
        <p v-if="healthAndSafetyInfo.securityDeposit"><v-icon color=#000 small>mdi-credit-card</v-icon> Security deposit - if you damage the home, you may be charged up to ${{healthAndSafetyInfo.securityDeposit}}</p>
        <br>
        <HealthAndSafetyDialog v-if="healthAndSafetyInfo" v-bind:healthAndSafetyInfo="healthAndSafetyInfo"/>
    </div>
</template>

<style scoped src="./HealthAndSafetyInfo.css">
</style>
<script>
    import HealthAndSafetyDialog from "./HealthAndSafetyDialog/HealthAndSafetyDialog";
    export default {
    name: 'HealthAndSafetyInfo',
    components: {
        HealthAndSafetyDialog
    },
    props: {
      healthAndSafetyInfo: Object
    },
    mounted(){
          
    }
    
  }
</script>