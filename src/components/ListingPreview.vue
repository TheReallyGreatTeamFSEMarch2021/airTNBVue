<template>
  <div class="container">
    <router-link :to="{ name: 'ListingShow', params: { id: listing.id }}">
    <img v-if="photo.length>2" :src="photo" alt="">
    <div>
        <div>
            <i class="fas fa-star"></i>

            {{avgRating}} ({{listing.reviews.length}})
        </div>
        <!-- <span style="font-size:10px">{{avgRating}} average rating with {{listing.reviews.length}} reviews </span> -->
    </div>
    <span>{{listing.title.length>25?listing.title.substring(0,35)+"...":listing.title}} <br> <b>${{listing.price.toFixed(2)}} / night</b></span>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"ListingPreview",
    props:{
        listing:Object
    },
    data(){
        return {
            photo:String,
            avgRating:Number,
        }
    },
    methods:{
      getAvg() {
          let avg = this.listing.reviews.map(review => review.starValue).reduce((acc, value)=> acc+=value)/this.listing.reviews.length;    
          return avg.toPrecision(3);
      }  
    },
    created(){ 
            if(this.listing.photos && this.listing.photos.length>0)     
                this.photo=this.listing.photos[0].url  
            let average = this.getAvg();
            this.avgRating=average;
    },
}
</script>

<style scoped>
img{
    
    height:150px;

    border-radius:10%;
    display:block;
    margin-left:auto;
    margin-right:auto;
    margin-top:auto;
    margin-bottom:auto;
}
i{
    color:#ff5a5f
}
a {
    text-decoration: none;
}
.container{
    display:flex;
    text-align: left;
}
</style>