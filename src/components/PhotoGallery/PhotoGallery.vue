<template>
  <div v-if="this.photos && this.photos.length > 4" id="initalDisplay">
        <div id="c1" class="bigContainer">
          <img v-bind:src="`${photos[0].url}`" alt="photo" width="100%" height="100%">
        </div>
        <div id="c2" class="littleContainer">
          <img v-bind:src="`${photos[1].url}`" alt="photo" width="100%" height="100%">
        </div>
        <div id="c3" class="littleContainer">
          <img v-bind:src="`${photos[2].url}`" alt="photo" width="100%" height="100%">
        </div>
        <div id="c4" class="littleContainer">
          <img v-bind:src="`${photos[3].url}`" alt="photo" width="100%" height="100%">
        </div>
        <div id="c5" class="littleContainer">
          <img v-bind:src="`${photos[4].url}`" alt="photo" width="100%" height="100%">
          <button class='showbtn' @click='showGallery'>Show All Photos</button>
        </div>
        
        <div v-show='toggle' id='fullGallery'>
          <button class='hidebtn' @click='toggle = !toggle'>X</button>
          <div id='gallery'>
            <div id="prev" @click="prevPhoto">  &lt; </div>
            <div id="photoDisplay">
              <div id='photoContainer'>
                <img v-bind:src="`${displayUrl}`" id='displayImage'>
              </div> 
            </div>
            <div id="next" @click="nextPhoto"> &gt; </div>
          </div>
        </div>

  </div>
  
</template>

<style scoped src="./GalleryStyle.css">
</style>
<script>
import axios from 'axios';

export default {
  name: 'PhotoGallery',
  
  props: {
    photos:{
                type: Array
            }
  },

  data(){
      return{
          bDataLoaded: true,
          toggle: false,
          displayUrl: "",
          currPhoto: 0
      }
  },


  methods:{
    showGallery: function(){
      this.toggle = !this.toggle
      this.displayUrl = this.photos[0].url;
    },

    prevPhoto: function(){
      if(this.currPhoto == 0){
        this.currPhoto = this.photos.length - 1;
      }
      else{
        this.currPhoto = this.currPhoto - 1;
      }
      this.displayUrl = this.photos[this.currPhoto].url;
    },

    nextPhoto: function(){
      if(this.currPhoto == this.photos.length - 1){
        this.currPhoto = 0
      }
      else{
        this.currPhoto = this.currPhoto + 1;
      }
      this.displayUrl = this.photos[this.currPhoto].url;
    }

  }

}
</script>