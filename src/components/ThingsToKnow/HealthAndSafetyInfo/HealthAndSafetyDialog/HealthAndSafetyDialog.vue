<template>
    <v-dialog v-if="healthAndSafetyInfo" max-width="600px">
        <template v-slot:activator="{ on }">
            <v-btn v-on="on">Show all</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h4>Health &amp; safety</h4>
            </v-card-title>
            <v-card-text>
                
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
    mounted(){
          
    }
    
  }
</script>