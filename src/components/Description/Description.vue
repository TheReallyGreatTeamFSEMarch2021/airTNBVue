<template>
  <div id="descriptionPanel">
     <div class="grid-container">
         <div class="Title">
            <h3>{{ this.listing.subTitle }}</h3>
         </div>
         <div class="SubTitle">
            <span> [0] guests</span>
            <span>[Type of Place]</span>
            <span>[0] beds</span>
            <span>[0] bath</span>
         </div>
         <div class="Image">
<v-avatar>
            <v-img
            v-bind:src="this.hostImageUrl"
            >
            </v-img>
          </v-avatar>
         </div>
     </div>
    <br>
    <hr />
    <div id="detailsSection">
      <div class="grid-features">
        <div class="">
          <span class="detailIcon">
            <v-img>
              <i class="fas fa-home fa-3x"></i>
            </v-img>
          </span>
        </div>
        <div class="subDetail">
          <span class="detailHeading"> Entire {{ data.typeOfPlace }} </span>
          <br />
          <span class="detailSubHeading">
            You'll have the [Type of place] to yourself.
          </span>
        </div>
      </div>
      <div class="grid-features">
        <div class="">
          <span class="detailIcon">
            <v-img>
              <i class="fas fa-calendar-alt fa-3x"></i>
            </v-img>
          </span>
        </div>
        <div class="subDetail">
          <span class="detailHeading">
            Free cancellation until {{ listing.freeCancellationDays }}
          </span>
          <br />
          <span class="detailSubHeading">
            After that, cancel before [HOUR AM/PM] on [DATE] and get a full
            refund, minus the first night and service fee.
          </span>
        </div>
      </div>
      <div class="grid-features">
        <div class="">
          <span class="detailIcon">
            <v-img>
              <i class="fas fa-hand-sparkles fa-3x"></i>
            </v-img>
          </span>
        </div>
        <div class="subDetail">
          <span class="detailHeading"> Enchanced Clean </span>
          <br />
          <span class="detailSubHeading">
            This host commited to AirTnb 5 - step enhanced cleaning process.
            Learn more.
          </span>
        </div>
      </div>
      <div class="grid-features">
        <div class="">
          <span class="detailIcon">
            <v-img>
              <i class="fas fa-clipboard-list fa-3x"></i>
            </v-img>
          </span>
        </div>
        <div class="subDetail">
          <span class="detailHeading"> House rules </span>
          <br />
          <span class="detailSubHeading">
            The host does allow pets, parties, and smoking.
          </span>
        </div>
      </div>
    </div>
    <hr />
    <div id="descriptionBlurb">
      {{ data.smallDescription }}
    </div>
    <p></p>
  </div>
</template>

<style scoped src="./Description.css">
</style>
<script>
import axios from "axios";
export default {
  name: "DescriptionBox",

  props: ["listing"],
  data() {
    return {
      data: "",
      hostImageUrl: ""
    };
  },
  mounted() {
    axios.get('http://localhost:8080/api/host/getById/'+this.listing.id).then(
          (resp)=> {
         this.hostImageUrl = resp.data.hostImageURL;
         //console.log(this.hostImageUrl)
            
          }
        ).catch(error=>{
          this.listing = null;
          console.error(error)
        })
  },
};
</script>