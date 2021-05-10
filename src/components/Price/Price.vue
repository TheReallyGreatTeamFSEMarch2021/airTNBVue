<template>
  <v-card v-if="listing" id="priceBox" elevation="2" class="mx-auto" max-width="344" outlined>
    <div>
      <div id="title">
        <span id="pricePerNight"><span id="boldedPrice">${{ this.listing.price }} </span> / night</span>
        <span id="averageReview">
          <!--{{this.averageReview}} -->
        </span> 
        
      </div>
      <br />
      <div id="calendar">[Calendar Goes here]</div>
      <v-btn elevation="2" id="reserveBtn" outlined text>Reserve</v-btn>
      <p>You won't be charged yet</p>
      <table>
        <tr>
          <td class="charges">
            ${{ this.listing.price }} x {{ this.daysSelected }} nights
          </td>
          <td class="chargePrice">
            ${{ this.listing.price * this.daysSelected }}
          </td>
        </tr>
        <tr>
          <td class="charges">Cleaning Fee</td>
          <td class="chargePrice">${{ this.cleaningFee }}</td>
        </tr>
        <tr>
          <td class="charges">Service Fee</td>
          <td class="chargePrice">${{ this.serviceFee }}</td>
        </tr>
        <tr>
          <td class="charges">Occupancy Taxes and Fees</td>
          <td class="chargePrice">${{ this.occupancyTaxesAndFees }}</td>
        </tr>
        <tr>
          <td><hr /></td>
          <td><hr /></td>
        </tr>
        <tr id="grandTotal">
          <td class="charges">Total</td>
          <td class="chargePrice">
            ${{
              this.listing.price * this.daysSelected +
              this.cleaningFee +
              this.serviceFee +
              this.occupancyTaxesAndFees
            }}
          </td>
        </tr>
      </table>
    </div>
  </v-card>
</template>

<style scoped src="./Price.css">
</style>
<script>
export default {
  name: "Price",

  props: {
    listing: Object
  },
  data() {
    return {
      dialog: false,
      daysSelected: 0,
      cleaningFee: 50,
      serviceFee: 20,
      occupancyTaxesAndFees: 34,
      averageReview:false
    };
  },
  methods: {
      averageRating(){
                for(let i = 0; i < this.listing.reviews.length; i++){
                    this.averageReview = this.averageReview + this.listing.reviews[i].starValue;
                }
                return this.averageReview = (this.averageReview / this.listing.reviews.length).toFixed(1) + ' (' + this.listing.reviews.length + ' reviews)';
            },
      
      test(){
        alert("Test")
      }
            
  },
  created() {
    console.log("here")
    this.averageRating();
    console.log("there")
  }
};
</script>