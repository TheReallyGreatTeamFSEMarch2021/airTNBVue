<template>
    <div v-if="listing" class="row col-4">
        <h4>Health &amp; safety</h4>
        <p v-if="listing.healthAndSafetyInfo.enhancedCleaning">Committed to AirTNP's enhanced cleaning process</p>
        <p>AirTNP's social-distancing and other COVID-19-related guidelines apply</p>
        <p v-if="listing.healthAndSafetyInfo.cameraInfo!=null">Security camera/recording device</p>
        <p v-if='listing.healthAndSafetyInfo.smokeAlarm'>Smoke alarm</p>
        <p v-else>No smoke alarm reported</p>
        <p v-if='listing.healthAndSafetyInfo.cMonAlarm'>Carbon monoxide alarm</p>
        <p v-else>No carbon monoxide alarm reported</p>
    </div>
</template>

<style scoped src="./HealthAndSafetyInfo.css">
</style>
<script>
  export default {
    name: 'HealthAndSafetyInfo',
    
    props: {
      listing: Object
    },
    mounted(){
          
    }
    
  }
</script>