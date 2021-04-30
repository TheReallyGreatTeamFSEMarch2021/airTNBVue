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
                type: Object
            }
        },

        methods:{

        },

        data(){
            return{
                averageReview: 0,
                reviewList: null
            }
        },

        mounted(){
            this.reviewList = this.reviews;
            console.log("Mounted");
            console.log(this.reviewList);
        }
}
</script>

<style scoped src="./ReviewStyle.css">

</style>