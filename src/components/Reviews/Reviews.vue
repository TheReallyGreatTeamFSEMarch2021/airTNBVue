<template>
    <div id="rootReviewDiv">
        <div id="overview" v-if="averageReview">
                <div id = "star">
                    <!-- <span id = "star-five"></span>-->
                    <i class="fas fa-star fa-sm"></i>
                </div>
                <div id = "averageRating">
                    <span id = "avgReview">{{this.averageReview}}</span>
                </div>
        </div>
        <br/>
        <!--
        <div class="reviews">
            <div v-for="review in reviews" :key="review.id" :id="review.id" class="review">
                {{review.id}}
            </div>
        </div>
        -->
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: 'Reviews',
        props: {
            reviews:{
                type: Array
            }
        },

        methods:{

            averageRating(){

                for(let i = 0; i < this.reviews.length; i++){
                    this.averageReview = this.averageReview + this.reviews[i].starValue;
                }
                this.averageReview = (this.averageReview / this.reviews.length).toFixed(1) + ' (' + this.reviews.length + ' reviews)';
            },

            sortReviewsByDate(){
                const sortedReviews = this.reviews.sort((a, b) => b.date - a.date)
            }

        },
    created(){
        this.averageRating(this.reviews);
        this.sortReviewsByDate();
    },
    beforeUpdate(){
        this.averageRating(this.reviews);
        this.sortReviewsByDate();
    },

        data(){
            return{
                averageReview: false
            }
        }

       
}
</script>

<style scoped src="./ReviewStyle.css">

</style>