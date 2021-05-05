<template>
    <div v-if="healthAndSafetyInfo" class="row col-4">
        <h4>Health &amp; safety</h4>
        <p v-if="healthAndSafetyInfo.enhancedCleaning">Committed to AirTNP's enhanced cleaning process</p>
        <p>AirTNP's social-distancing and other COVID-19-related guidelines apply</p>
        <p v-if="healthAndSafetyInfo.cameraInfo!=null">Security camera/recording device</p>
        <p v-if='healthAndSafetyInfo.smokeAlarm'>Smoke alarm</p>
        <p v-else>No smoke alarm reported</p>
        <p v-if='healthAndSafetyInfo.cMonAlarm'>Carbon monoxide alarm</p>
        <p v-else>No carbon monoxide alarm reported</p>
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