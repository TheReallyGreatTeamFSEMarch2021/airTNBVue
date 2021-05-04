 <template>
  <div id="itemShowPage">
    <div class="row col-12">
      <h1>Title of AirTNB with ratings, superhost, city and state</h1>
    </div>
    <div class="listingPhotos row col-12">
      <PhotoGallery v-bind:photos="this.photos"/>
    </div>

     <div class="row col-12">
      <div class="col-9">
        <description :listing="this.listing" v-if="listing"/>
          <div class="col-12">
            <Rooms/>  
          </div>
           <div class="col-12">
            <h2> Amenities</h2>
            <Amenities  v-if="listing" :id="listing.id"/>
          </div>
          <div class="col-12">
              <h1>Calendar</h1>
          </div>
        
      </div>
      
      <div class="col-3"> 
        <h2> Select dates</h2>
      </div>   
    </div>
    <div class="row col-12"> 
        <h1>REVIEWS</h1>
        <Reviews v-bind:reviews="this.reviews"/>
    </div>
    <div class="row col-12"> 
        <h1 style="text-align:left">LOCATION</h1>
        <GMap
          v-if="listing"
          :lat="listing.location.latitude"
          :long="listing.location.longitude"      
        />
    </div>
    <div class="row col-12"> 
        <h1>HOSTED BY</h1>
    </div>
    <div class="row col-12"> 
        <h1>THINGS TO KNOW</h1>
    </div>
    <div class="row col-12"> 
        <h1>MORE PLACES TO STAY</h1>
        <MorePlaces
          :listing="listing"
          v-if="listing"
          />
    </div>
    <div class="row col-12"> 
        <h1>THINGS TO DO NEARBY</h1>
    </div>
     <div class="row col-12"> 
        <h1>FOOTER IF WE DECIDE TO DO A FOOTER</h1>
    </div>
  </div>
</template>

<style scoped src="./ListingShow.css">
</style>
<script>
  import GMap from "../GMap"
  import PhotoGallery from "../PhotoGallery/PhotoGallery.vue";
  import Reviews from "../Reviews/Reviews.vue";
  import Rooms from "../Rooms/Rooms.vue"
  import Description from "../Description/Description.vue";
  import axios from 'axios';
  import MorePlaces from '../MorePlaces'
  import Amenities from '../Amenities/Amenities'
  export default {
    name: 'ListingShow',
    components: {
        Description,
        PhotoGallery,
        Reviews,
        MorePlaces,
        GMap,
        Rooms,
        Amenities
    },  
    props: {
      
    },

    methods:{

        sortReviewsByDate(reviews){
            for(let i = 0; i < reviews.length; i++){
                this.reviews[i].date = new Date(this.reviews[i].date)
            }
            this.reviews.sort((a, b) => b.date - a.date)
        }
    },

    beforeMount(){
        let listingId = this.$route.params.id;
        axios.get('http://localhost:8080/api/listing/getById/'+listingId).then(
          (resp)=> {
            this.listing = resp.data;
            this.loaded = true
            this.reviews = this.listing.reviews
            this.sortReviewsByDate(this.listing.reviews)
            this.photos = this.listing.photos;
          }
        ).catch(error=>{
          this.listing = null;
          console.error(error)
        })
    },
    data(){
        return{
          listing:null,
          loaded:false,
          reviews:null,
          photos:null
        }
    },
    mounted(){
          
    }
    
  }
</script>