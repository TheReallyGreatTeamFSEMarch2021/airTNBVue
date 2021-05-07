<template>
  <v-card id="priceBox" elevation="2" class="mx-auto" max-width="344" outlined>
    <div>
      <div id="title">
        <span id="pricePerNight"><span id="boldedPrice">${{ this.listing.price }} </span> / night</span>
        <span id="reviews">
          <Reviews :reviews="this.listing.reviews" />
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
import Reviews from "../Reviews/Reviews.vue";
export default {
  name: "Price",
  components: {
    Reviews,
  },
  props: ["listing"],
  data() {
    return {
      dialog: false,
      daysSelected: 0,
      cleaningFee: 50,
      serviceFee: 20,
      occupancyTaxesAndFees: 34,
    };
  },
  created() {},
};
</script>