<template>
   <div id="descriptionPanel">
      <div id="descriptionHeader">
         <h3>{{data.typeOfPlace}} hosted by [HostName]</h3>
         <div class="detailSubHeading">
            <span> [0] guests</span><span>[type of place]</span><span>[0] beds</span><span>[0] bath</span> <span id="hostImage">[HostImage]</span>    
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

<style scoped>
#descriptionHeader{
    padding-bottom:10px;
    text-align: left;
}
#detailsSection{
    padding-top: 10px;
    padding-bottom: 10px;
}
#descriptionPanel{
    width:500px;
}
#reviewNumber{

}
#placeDetails{

}
#hostImage{
float: right
}
#descriptionBlurb{
    text-align: left;
    margin-top: 10px;
    font-size: 12px;

}

.grid-container {
    display: grid;
    grid-template-columns: 100px auto;
}
.detailHeading{
    font-weight: 400 !important;
    font-size: 16px !important;
    line-height: 20px !important;
}
.detailSubHeading {
    font-size: 14px;
    color: rgb(113, 113, 113);
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
}
.subDetail{
    text-align: left;
}


</style>
<script>
  import axios from 'axios';
  export default {
    name: 'DescriptionBox',
    
    props: {
      
    },
    data(){
        return{
          'data': ''
        }
    },
    mounted(){
        // Get id from url to get description
          axios({
              method: 'GET',
              url: 'http://localhost:8080/api/description/24',
              headers: '',
          })
          .then(response=>{
              console.table(response.data)
              this.data = response.data
          })
          .catch((error) => {
              switch(error.response.status){
                  case 400:
                      console.log('An error has occurred.')
                      break;
                  case 404:
                      console.log('Not found')
                      break;
                  case 401:
                      console.log('Not allowed')
                      break;
                  case 500:
                      console.log('Server error')
                      break;
                  default:
                      console.log('Unknown error has occurred.')
                      break;
              }
          })
    }
    
  }
</script>