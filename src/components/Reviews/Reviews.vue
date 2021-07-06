<template>
    <div id="rootReviewDiv">
        <v-divider id = "divivder"></v-divider>
        <br/>

        <div id="overview" v-if="averageReview">
                <div id = "star">
                    <span id = "star-five"></span>
                    <i class="fas fa-star fa-sm"></i>
                </div>
                <div id = "averageRating">
                    <span id = "avgReview">{{this.averageReview}}</span>
                </div>
        </div>

        <br/>
        
        <div class="reviews">
            <div v-for="review in reviews" :key="review.id" :id="review.id" class="review">
                <div class="reviewInfo">
                    <p class="firstName"><b>{{review.userFirstName}}</b></p>
                    <p class="date">{{getCalendarMonth(review.date)}}</p>
                </div>
                <br/>
                <div class = "reviewContent">
                    <read-more more-str="read more" :text=review.content link="#" less-str="read less" :max-chars="50"></read-more>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import ReadMore from 'vue-read-more';
import Vue from 'vue';

    export default {
        name: 'Reviews',
        props: {
            reviews:{
                type: Array
            }
        },

        methods:{

            testAlert(){
                alert("Woo!")
            },

            averageRating(){
                for(let i = 0; i < this.reviews.length; i++){
                    this.averageReview = this.averageReview + this.reviews[i].starValue;
                }
                this.averageReview = (this.averageReview / this.reviews.length).toFixed(1) + ' (' + this.reviews.length + ' reviews)';
            },

            sortReviewsByDate(){
                const sortedReviews = this.reviews.sort((a, b) => b.date - a.date)
            },

            getCalendarMonth(date){
                const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
                let month = monthNames[date.getMonth()] + ' ' + date.getFullYear();
                return month;
            }

        },
    created(){
        this.averageRating();
        this.sortReviewsByDate();
    },

        data(){
            return{
                averageReview: false,
                reviewsToShow: 6,
            }
        },
       
}
Vue.use(ReadMore);
</script>

<style scoped src="./ReviewStyle.css">

</style>