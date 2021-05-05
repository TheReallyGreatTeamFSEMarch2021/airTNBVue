<template>
    <div id ="activitiesBox">
        <h3>Hello Activities</h3>
        <div 
            :key="activity.id" v-for="activity in activities" >
            {{activity.id}}
            {{testAlert(activity.id)}}
        </div>
    </div>
    
</template>

<script>
import axios from 'axios';
export default {

    name:'Activities',
    props: {
        location:null,
    },

    methods:{
        
        test(id){
            console.log(id);
        }
    },

    updated(){
         //console.log("location:\n", this.location);
    },

    created(){
        axios.get(`http://localhost:8080/api/activity/getActivitiesByCity/${this.location.city}`)
        .then(response =>{
            this.activities = response.data;
        })
    },

    data(){
        return{
            activities:[]
        }
    }

}
</script>

<style scoped src="./ActivitiesStyle.css">
    
</style>