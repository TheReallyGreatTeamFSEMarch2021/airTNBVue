<template>
  <div style="display:flex; flex-direction:column">
    <router-link :to="{ name: 'ListingShow', params: { id: listing.id }}">
    <img v-if="photo.length>2" :src="photo" alt="">
    <div>
        <div>
            <i v-if="avgRating>0" class="fas fa-star"></i>
            <i v-if="avgRating>1" class="fas fa-star"></i>
            <i v-if="avgRating>2" class="fas fa-star"></i>
            <i v-if="avgRating>3" class="fas fa-star"></i>
            <i v-if="avgRating>4" class="fas fa-star"></i>
        </div>
        <span style="font-size:10px">{{avgRating}} average rating with {{listing.reviews.length}} reviews </span>
    </div>
    <span>{{listing.subTitle}}  <b>from ${{listing.price.toPrecision(3)}} / night</b></span>
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
            axios.get('http://localhost:8080/api/photo/getByListingId/'+this.listing.id).then(
                (resp)=> {
                    this.photo = resp.data[0].url; 
                }
            )
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
    color:yellow
}
a {
    text-decoration: none;
}

</style>