<template>
    <div id="rootReviewDiv">
        <v-divider id = "divivder"></v-divider>
        <br/>
        


        <div class="hello">
            <read-more more-str="read more" :text="msg" link="#" less-str="read less" :max-chars="50"></read-more>
            <read-more more-str="read more" less-str="read less" :text="msg2" link="#"></read-more>
        </div>

        <div id="overview" v-if="averageReview">
                <div id = "star">
                    <span id = "star-five"></span>
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
                    <br/>
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
import axios from 'axios';
//Vue.use(ReadMore);
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

    beforeUpdate(){
        this.averageRating(this.reviews);
        this.sortReviewsByDate();
        this.totalComments = this.reviews.length;
    },

        data(){
            return{
                averageReview: false,
                reviewsToShow: 6,
                msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                msg2: 'Lorem ipsum dolor sit amet'
            }
        },
       
}
Vue.use(ReadMore);
</script>

<style scoped src="./ReviewStyle.css">

</style>