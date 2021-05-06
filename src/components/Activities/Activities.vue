<template>

    <div id="activitiesBox">
        <div v-for="activity in activities" :key="activity.id" :id="activity.id" class="activity">
            <img :src="activity.thumbNail" alt="" class="activityPhoto">
            <div class ="activitytiitle">{{activity.title}}</div>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios';
export default {
    name:'Activities',
    props: {
        listing:null,
    },    
    data(){
        return{
            activities:[]
        }
    },
    created(){
        axios.get(`http://localhost:8080/api/activity/getActivitiesByCityAndState/${this.listing.id}`)
        .then(resp =>{
            resp.data = resp.data.filter(list => list.id !== this.listing.id)
            if(resp.data.length>5) resp.data.splice(5);
            this.activities = resp.data;
        }
        ).catch((err) => console.log(err));
    }
}
</script>

<style scoped src="./ActivitiesStyle.css">
    
</style>