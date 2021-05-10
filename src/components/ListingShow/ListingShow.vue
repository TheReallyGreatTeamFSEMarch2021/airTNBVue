 <template>
  <div id="itemShowPage">
    <div class="row col-12">
      <!--<h1>Title of AirTNB with ratings, superhost, city and state</h1>-->
    </div>
    <div class="listingPhotos row col-12">
      <PhotoGallery v-bind:photos="this.photos"/>
    </div>

     <div class="row col-12">
      <div class="col-9">
        <description :listing="this.listing" v-if="listing"/>
          <div class="col-12">
            <Rooms v-bind:rooms="this.rooms"/>  
          </div>
           <div class="col-12">
            <h2> Amenities</h2>
            <Amenities  v-if="listing" :id="listing.id"/>
          </div>
          <div class="col-12">
              <v-app>
                 <v-content>
                   <Calendar  v-if="listing" :listing="listing"/>
                </v-content>
             </v-app>
          </div>
        
      </div>
      
      <div class="col-3"> 
        <Price :listing = "this.listing"
               :reviews = "this.listing.reviews"
         />
      </div>   
    </div>
    <div class="row col-12"> 
        <h1>REVIEWS</h1>
        <Reviews 
        v-if="listing"
        :reviews="this.reviews"/>
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
        <HostedBy v-if="host&&listing" v-bind:host="this.host" v-bind:listing="this.listing"/>
    </div>
    <div class="row col-12"> 
        <ThingsToKnow v-if="listing" v-bind:listing="this.listing"/>
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
        <Activities 
        v-if="listing"
        :listing="listing"/>
    </div>
     
  </div>
</template>

<style scoped src="./ListingShow.css">
</style>
<script>
  import Price from '../Price/Price.vue';
  import GMap from "../GMap";
  import PhotoGallery from "../PhotoGallery/PhotoGallery.vue";
  import Reviews from "../Reviews/Reviews.vue";
  import Rooms from "../Rooms/Rooms.vue";
  import Description from "../Description/Description.vue";
  import ThingsToKnow from '../ThingsToKnow/ThingsToKnow.vue';
  import axios from 'axios';
  import MorePlaces from '../MorePlaces';
  import Amenities from '../Amenities/Amenities';
  import Calendar from '../Calendar/Calendar';
  import HostedBy from '../HostedBy/HostedBy';
  import Activities from '../Activities/Activities.vue';
  export default {
    name: 'ListingShow',
    components: {
        Description,
        Price,
        PhotoGallery,
        Reviews,
        MorePlaces,
        GMap,
        Rooms,
        Amenities,
        Activities,
        Calendar,
        ThingsToKnow,
        HostedBy
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
        axios.get('https://airtnbapi.jaitken-projects.com/api/listing/getById/'+listingId).then(
          (resp)=> {
            this.listing = resp.data;
            this.loaded = true
            this.reviews = this.listing.reviews
            this.sortReviewsByDate(this.listing.reviews)
            this.photos = this.listing.photos;
            this.rooms = this.listing.rooms;
          }
        ).catch(error=>{
          this.listing = null;
          console.error(error)
        })

        axios.get('https://airtnbapi.jaitken-projects.com/api/listing/getHost/'+listingId)
        .then(resp=>{
          this.host = resp.data;
        }).catch(error=>{
          this.host = null;
          console.error(error);
        });
    },
    data(){
        return{
          host: null,
          listing:null,
          loaded:false,
          reviews:null,
          photos:null,
          rooms:null
        }
    },
    mounted(){

    }
    
  }
</script>