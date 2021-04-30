<template>
    <div id="rootDiv">
        <div v-if="reviewDataLoaded">
            <div id="overview">
                <div id ="AverageRating">
                    <span id = "star-five" v-on:click="doStuff"></span>
                </div>
            </div>
            <div id="reviews">

            </div>
        </div>

        <div v-else>
            <h2>No reviews for this listing</h2>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: 'Reviews',
        props:{
            
        },

        methods:{

        },

        data(){
            return{
                reviews:[],
                reviewDataLoaded: false,
                averageReview: 0
            }
        },

        mounted(){
            console.log(this.reviewDataLoaded);
            let listingId = this.$route.params.id;
            axios.get('http://localhost:8080/api/review/getByListing/'+listingId)
            .then(response => {
                this.reviews = response.data;
                if(this.reviews.length>0){
                    this.reviewDataLoaded=true;
                }
            })

        }
}
</script>

<style scoped src="./ReviewStyle.css">

</style>