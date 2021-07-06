<template>
    <v-dialog transition="dialog-bottom-transition" v-if="ruleList" max-width="600px">
        <template v-slot:activator="{ on }">
            <v-btn v-on="on">Show all</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h4>House rules</h4>
            </v-card-title>
            <v-card-text>
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
            </v-card-text>
            <v-card-title>
              <h4>Other rules</h4>
            </v-card-title>
            <v-card-text>
              <p>{{ruleList.otherRules}}</p>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<style scoped src="./HouseRulesDialog.css"></style>
<script>
  export default {
    name: 'HouseRulesDialog',
    
    props: {
      ruleList: Object
    },
    data() {
      return {
        dialog: false,
        regex: new RegExp("^SELF_.*$")
      }
    },
    mounted(){
          
    }
    
  }
</script>