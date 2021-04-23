<template>
    <div id="rooms">
        <div id="title">
            Sleeping Arrangements
        </div>
        <div v-for="room of rooms" :key="room.id" class="roomCard">
            <div v-if="false">
                {{numBeds = room.kBeds + room.qBeds + room.dBeds + room.sBeds + room.cBeds}}
            </div>
            
            {{room.name}}
            <div v-if="room.kBeds > 1" class="beds">
                {{room.kBeds}} king beds
            </div>
            <div v-if-else="room.kBeds > 0" class="beds">
                {{room.kBeds}} king bed
            </div>
            
            <div v-if="room.qBeds > 0" class="beds">
                {{room.qBeds}} queen bed
            </div>
            <div v-if="room.dBeds > 0" class="beds">
                {{room.dBeds}} double bed
            </div>
            <div v-if="room.sBeds > 0" class="beds">
                {{room.sBeds}} single bed
            </div>
            <div v-if="room.cBeds > 0" class="beds">
                {{room.cBeds}} couch bed
            </div>
        </div>
  </div>
</template>

<style scoped src="./RoomsStyle.css">
</style>
<script>
import axios from 'axios';


export default {
  name: 'Rooms',
  
  props: {
    listingId: Number
  },

  data(){
      return{
          rooms:[],
          bDataLoaded: false,
          numRooms:Number
      }
  },

  mounted(){
        axios.get('http://localhost:8080/api/room/getByListingId/1')
        .then(response => {
            this.rooms = response.data;
            this.bDataLoaded = true;
            this.numRooms = this.rooms.length;
        })
  }

  
}
</script>