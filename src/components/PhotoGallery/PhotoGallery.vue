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
          <button class='showbtn' @click='toggle = !toggle'>Show All Photos</button>
        </div>
        <div v-show='toggle' id='fullGallery'>
          <button class='hidebtn' @click='toggle = !toggle'>X</button>
          <div id='gallery'>
            <div id="prev" @click="prevPhoto"> &lt; </div>
            <div id="photoDisplay">
              <div id='photoContainer'>
                <img v-bind:src="`${displayUrl}`">
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
          displayUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
      }
  },

  methods:{
    prevPhoto: function(){
      console.log("prev");
    },

    nextPhoto: function(){
      console.log('next');
    }

  }

}
</script>