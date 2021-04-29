 
 <template>
  <div id="itemShowPage">
    <div class="row col-12">
      <h1>Title of AirTNB with ratings, superhost, city and state</h1>
    </div>
    <div class="listingPhotos row col-12">
      <PhotoGallery/>
    </div>

     <div class="row col-12">
      <div class="col-9">
          <div class="col-12">
            <h2> Description 1</h2>
            <p>Entire home</p>
            <p>Enhanced Clean</p>
            <p>Self check-in</p>
          </div>
          <div class="col-12">
            <h2> Description 2</h2>
            <p>Vintage & repurposed finds make this space unique with modern upscale amenities and appliances. This cozy cool industrial space is the perfect place to wind down & get cozy after a day of exploring WNY!
            </p>
          </div>
          <div class="col-12">
            <h2> Sleeping Arrangemnets</h2>
            BEDROOM1 - 1 Queen Bed
       
          </div>
           <div class="col-12">
            <h2> Amenities</h2>
            <p>Wifi</p>
            <p>Air Conditioning</p>
            <p>Kitchen</p>
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
  import axios from 'axios';
  import MorePlaces from '../MorePlaces'
  export default {
    name: 'ListingShow',
    components: {
        PhotoGallery,
        MorePlaces,
        GMap
    },  
    props: {
      
    },

    beforeMount(){
        let listingId = this.$route.params.id;
        axios.get('http://localhost:8080/api/listing/getById/'+listingId).then(
          (resp)=> {
            this.listing = resp.data;
            console.log(resp.data);
            this.loaded = true
          }
        )
    },
    data(){
        return{
          listing:null,
          loaded:false
        }
    },
    mounted(){
          
    }
    
  }
</script>
 