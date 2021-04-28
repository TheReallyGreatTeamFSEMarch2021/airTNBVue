<template>
  <div id="descriptionPanel">
      <h3>PLACE NAME</h3>
      <span>Number of Guests</span><span>Type of Place</span><span>Number of Rooms</span><span>number of bathrooms</span> <span>HostImage</span>
      <hr>
        <div>
            <p>Type of Place: {{data.typeOfPlace}}</p>
            <p>Cancellation Date: {{data.cancellationDate}}</p>
        </div>
      <hr>
      <p>Description: {{data.smallDescription}}</p>
  </div>
</template>

<style scoped>
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
              url: 'http://localhost:8080/api/description/7',
              headers: '',
          })
          .then(response=>{
              console.table(response.data)
              this.data = response.data
          })
          .catch((error)=>{
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