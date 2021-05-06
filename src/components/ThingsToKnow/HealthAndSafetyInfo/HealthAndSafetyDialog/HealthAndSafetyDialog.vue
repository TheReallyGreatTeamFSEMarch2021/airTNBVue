<template>
    <v-dialog transition="dialog-bottom-transition" v-if="healthAndSafetyInfo" max-width="600px">
        <template v-slot:activator="{ on }">
            <v-btn v-on="on">Show all</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h4>Health &amp; safety</h4>
            </v-card-title>
            <v-card-text>
              <p v-if="healthAndSafetyInfo.enhancedCleaning"><v-icon color=#000000 small>mdi-sparkles</v-icon> Committed to AirTNB's enhanced cleaning process.</p>
              <p><v-icon color=#000000 small>mdi-spray-bottle</v-icon>During the COVID-19 pandemic, all hosts and guests must review and follow AirTNB's social-distancing and other COVID-19-related guidelines.</p>
              <p v-if="healthAndSafetyInfo.cameraInfo!=null"><v-icon color=#000000 small>mdi-alert-circle</v-icon> Security camera/recording device - "{{this.healthAndSafetyInfo.cameraInfo}}"</p>
              <p v-if="healthAndSafetyInfo.animalsInfo"><v-icon color=#000 small>mdi-alert-circle</v-icon> May encounter potentially dangerous animal - {{healthAndSafetyInfo.animalsInfo}}</p>
              <p v-if='healthAndSafetyInfo.smokeAlarm'><v-icon color=#000 small>mdi-bell</v-icon> Smoke alarm</p>
              <p v-else><v-icon color=#000000 small>mdi-help-circle</v-icon> No smoke alarm reported</p>
              <p v-if='healthAndSafetyInfo.cMonAlarm'><v-icon color=#000000 small>mdi-bell</v-icon> Carbon monoxide alarm</p>
              <p v-else><v-icon color=#000000 small>mdi-help-circle</v-icon> No carbon monoxide alarm reported</p>
            </v-card-text>
            <v-card-title v-if="healthAndSafetyInfo.petsInfo||healthAndSafetyInfo.parkingInfo||healthAndSafetyInfo.noiseInfo||healthAndSafetyInfo.securityDeposit||healthAndSafetyInfo.sharedSpaces||healthAndSafetyInfo.stairs">
              <h4>You must also acknowledge</h4>
            </v-card-title>
            <v-card-text>
              <p v-if="healthAndSafetyInfo.petsInfo"><v-icon color=#000 small>mdi-paw</v-icon> Pet(s) live on property - {{healthAndSafetyInfo.petsInfo}}</p>
              <p v-if="healthAndSafetyInfo.noiseInfo"><v-icon color=#000 small>mdi-volume-high</v-icon> Potential for noise - {{healthAndSafetyInfo.noiseInfo}}</p>
              <p v-if="healthAndSafetyInfo.parkingInfo"><v-icon color=#000 small>mdi-car</v-icon> No parking on property - {{healthAndSafetyInfo.parkingInfo}}</p>
              <p v-if="healthAndSafetyInfo.securityDeposit"><v-icon color=#000 small>mdi-credit-card</v-icon> Security deposit - if you damage the home, you may be charged up to ${{healthAndSafetyInfo.securityDeposit}}</p>
              <p v-if="healthAndSafetyInfo.sharedSpaces"><v-icon color=#000 small>mdi-sofa-single</v-icon> Some spaces are shared - {{healthAndSafetyInfo.sharedSpaces}}</p>
              <p v-if="healthAndSafetyInfo.stairs"><v-icon color=#000 small>mdi-stairs</v-icon> Must climb stairs - {{healthAndSafetyInfo.stairs}}</p>
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