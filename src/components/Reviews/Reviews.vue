<template>
    <div id="rootReviewDiv">
        <v-divider id = "divivder"></v-divider>
        <br/>

        <div id="overview">
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
                {{review.id}}
            </div>
        </div>

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
                console.log(this.reviews)
                this.reviews.array.forEach(review => {
                    this.averageRating += review.starRating
                });
                this.averageRating = this.averageRating / this.reviews.length;
            }
        },

        data(){
            return{
                averageReview: 0
            }
        },

        mounted(){
            this.averageRating();
        }
}
</script>

<style scoped src="./ReviewStyle.css">

</style>