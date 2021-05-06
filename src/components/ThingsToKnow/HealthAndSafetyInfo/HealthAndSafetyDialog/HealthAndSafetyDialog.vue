<template>
    <v-dialog transition="dialog-bottom-transition" v-if="healthAndSafetyInfo" max-width="600px">
        <template v-slot:activator="{ on }">
            <v-btn v-on="on">Show all</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h4>Health &amp; safety</h4>
            </v-card-title>
            <v-divider/>
            <v-card-text>
              <p v-if="healthAndSafetyInfo.enhancedCleaning">Committed to AirTNP's enhanced cleaning process</p>
              <p>AirTNP's social-distancing and other COVID-19-related guidelines apply</p>
              <p v-if="healthAndSafetyInfo.cameraInfo!=null"><v-icon color=#000000 small>mdi-alert-circle</v-icon> Security camera/recording device</p>
              <p v-if='healthAndSafetyInfo.smokeAlarm'>Smoke alarm</p>
              <p v-else>No smoke alarm reported</p>
              <p v-if='healthAndSafetyInfo.cMonAlarm'>Carbon monoxide alarm</p>
              <p v-else>No carbon monoxide alarm reported</p>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<style scoped src="./HealthAndSafetyDialog.css"></style>
<script>
  export default {
    name: 'HealthAndSafetyDialog',
    
    props: {
      healthAndSafetyInfo: Object
    },
    data() {
      return {
        dialog: false
      }
    },
    mounted(){
          
    }
    
  }
</script>