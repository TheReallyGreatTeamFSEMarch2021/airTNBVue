<template>
   <div id="descriptionPanel">
      <div id="descriptionHeader">
         <h3>{{this.listing.subTitle}}</h3>
         <div class="detailSubHeading">
            <span> [0] guests</span><span>{{data.typeOfPlace}}</span><span>[0] beds</span><span>[0] bath</span> <span id="hostImage">[HostImage]</span>    
         </div>
      </div>
      <hr>
      <div id="detailsSection">
         <div class="grid-container">
            <div class="">
               <span class="detailIcon">🏠</span>
            </div>
            <div class="subDetail">
               <span class="detailHeading">
               Entire {{data.typeOfPlace}}
               </span>
               <br>
               <span class="detailSubHeading">
               You'll have the {{data.typeOfPlace}} to yourself.
               </span>
            </div>
         </div>
         <div class="grid-container">
            <div class="">
               <span class="detailIcon">📅</span>
            </div>
            <div class="subDetail">
               <span class="detailHeading">
               Free cancellation until {{data.cancellationDate}}
               </span>
               <br>
               <span class="detailSubHeading">
               After that, cancel before [HOUR AM/PM] on [DATE] and get a full refund, minus the first night and service fee.
               </span>
            </div>
         </div>
         <div class="grid-container">
            <div class="">
               <span class="detailIcon">⭐</span>
            </div>
            <div class="subDetail">
               <span class="detailHeading">
               Enchanced Clean
               </span>
               <br>
               <span class="detailSubHeading">
               This host commited to AirTnb  5 - step enhanced cleaning process. Learn more.
               </span>
            </div>
         </div>
         <div class="grid-container">
            <div class="">
               <span class="detailIcon">📋</span>
            </div>
            <div class="subDetail">
               <span class="detailHeading">
               House rules
               </span>
               <br>
               <span class="detailSubHeading">
               The host does allow pets, parties, and smoking.
               </span>
            </div>
         </div>
      </div>
      <hr>
      <div id="descriptionBlurb">
         {{data.smallDescription}}
      </div>
      <p></p>
   </div>
</template>

<style scoped src="./Description.css">
</style>
<script>
  import axios from 'axios';
  export default {
    name: 'DescriptionBox',
    
    props: ['listingId','listing'],
    data(){
        return{
          'data': ''
        }
    },
    created(){
       axios({
              method: 'GET',
              url: `http://localhost:8080/api/description/${this.listingId}`,
              headers: '',
          })
          .then(response=>{
              //console.table(response.data)
              this.data = response.data
              if(this.data === null){
                 this.data = {
                    typeOfPlace:'Unknown Place',
                    cancellationDate: '01/01/2000',
                    smallDescription: 'This listing does not exist.'
                 }
              }
          })
          .catch((error) => {
              switch(error.response.status){
                  case 400:
                      console.error('An error has occurred.')
                      break;
                  case 404:
                      console.error('Not found')
                      break;
                  case 401:
                      console.error('Not allowed')
                      break;
                  case 500:
                      console.error('Server error')
                      break;
                  default:
                      console.error('Unknown error has occurred.')
                      break;
              }
          })
         
    },
  }
</script>