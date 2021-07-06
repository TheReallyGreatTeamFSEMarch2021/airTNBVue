<template>
  <div id="morePlaces">
      <div class="preview"
        :key="place.id" v-for=" place in moreListings"
      >
            <ListingPreview
                :listing="place"

            />
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import ListingPreview from './ListingPreview'
export default {
    name:"MorePlaces",
    methods:{
        getPlaces(){

        }
    },
    props:{
        listing:null,
    },
    components:{
        ListingPreview
    },
    data(){
        return{
            moreListings:[]
        }
    },
    created(){
            // eslint-disable-next-line no-undef
            axios.get(`https://airtnbapi.jaitken-projects.com/api/listing/getListingsByCityAndState/${this.listing.id}`).then(
                (resp) => {
                    resp.data = resp.data.filter( list => list.id !== this.listing.id);
                    if(resp.data.length>5)resp.data.splice(5);
                    this.moreListings = resp.data;
                }
            ).catch((err)=> console.log(err));
        }
}
</script>

<style scoped>
    #morePlaces{
        display:flex;
        justify-content: space-between;
    }
</style>