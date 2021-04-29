<template>
    <div id="rooms">
        <div id="title">
            Sleeping Arrangements
        </div>
        <div v-for="room of rooms" :key="room.id" class="roomCard">
            <div id="roomName">
                {{room.name}}
            </div>
            <div class="beds">
                {{room.beds}}
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
            this.setRooms();
        })
    },

    methods: {
        setRooms: function(){
            
            for(let room of this.rooms){
                let beds = "";
                let bedArr = []

                if(room.kBeds > 1){
                    bedArr.push(room.kBeds+" king beds")
                }
                else if(room.kBeds == 1){
                    bedArr.push(room.kBeds+" king bed")
                }

                if(room.qBeds > 1){
                    bedArr.push(room.qBeds+" queen beds")
                }
                else if(room.qBeds == 1){
                    bedArr.push(room.qBeds+" queen bed")
                }

                if(room.dBeds > 1){
                    bedArr.push(room.dBeds+" double beds")
                }
                else if(room.dBeds == 1){
                    bedArr.push(room.dBeds+" double bed")
                }

                if(room.sBeds > 1){
                    bedArr.push(room.sBeds+" single beds")
                }
                else if(room.sBeds == 1){
                    bedArr.push(room.sBeds+" single bed")
                }

                if(room.cBeds > 1){
                    bedArr.push(room.cBeds+" couch beds")
                }
                else if(room.cBeds == 1){
                    bedArr.push(room.cBeds+" couch bed")
                }

                room.beds = bedArr.join(', ');
            }
        }
    }
    

}
</script>