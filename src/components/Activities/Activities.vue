<template>
    <div>
        <h3>Hello Activities</h3>
        <p>{{location.city}}</p>
    </div>
    
</template>

<script>
import axios from 'axios';
export default {

    name:'Activities',
    props:{
        location: Object
    },

    mounted(){
        console.log("location:\n", this.location);
        
        axios.get('http://localhost:8080/api/activity/getActivitiesByCity/'+this.city)
        .then(response =>{
            this.list = response.data;
        })
    },

    data(){
        return{
            list: Array
        }
    }

}
</script>

<style scoped src="./ActivitiesStyle.css">
    
</style>