<template>
    <div id="rootDiv">
        <div v-if="reviewDataLoaded">
            <div id="overview">
                    <div id = "star">
                        <span id = "star-five"></span>
                    </div>
                    <div id = "averageRating">
                        <span id = "avgReview">{{this.averageReview}}</span>
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

            getAverageRating(){
                this.reviews.forEach(rating => {
                    this.averageReview = this.averageReview + rating.starValue;
                });
                this.averageReview = (this.averageReview / this.reviews.length).toFixed(1);
                this.averageReview = this.averageReview + ' (' + this.reviews.length + ' reviews)'
            }
        },

        data(){
            return{
                reviews:[],
                reviewDataLoaded: false,
                averageReview: 0
            }
        },

        mounted(){
            let listingId = this.$route.params.id;
            axios.get('http://localhost:8080/api/review/getByListing/'+listingId)
            .then(response => {
                this.reviews = response.data;
                if(this.reviews.length>0){
                    this.reviewDataLoaded=true;
                }
                this.getAverageRating();
            })
        }
}
</script>

<style scoped src="./ReviewStyle.css">

</style>