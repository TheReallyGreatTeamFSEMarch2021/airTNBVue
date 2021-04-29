<template>
  <div>
    <router-link :to="{ name: 'ListingShow', params: { id: listing.id }}">

    <img v-if="photo.length>2" :src="photo" alt="">
    <span>{{listing.subTitle}}</span>
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

        }
    },
    beforeMount(){        
            axios.get('http://localhost:8080/api/photo/getByListingId/'+this.listing.id).then(
                (resp)=> {
                    this.photo = resp.data[0].url; 
                }
            )
        
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
}

</style>