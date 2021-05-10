<template>
  <v-card
    v-if="listing"
    id="priceBox"
    elevation="2"
    class="mx-auto"
    max-width="344"
    outlined
  >
    <div>
      <div id="title">
        <div class="inner">
          <span class="pricePerNight"
            ><span id="boldedPrice">${{ this.listing.price }} </span> /
            night</span
          >
        </div>
        <div class="reviews">
          <span id="star-five"></span>
          <i class="fas fa-star fa-md"></i>
          <span id="averageReview">{{ this.averageReview }} </span>
        </div>
      </div>
      <br />
      <div id="calendar">[Calendar Goes here]</div>
      <v-btn elevation="2" id="reserveBtn" outlined text>Reserve</v-btn>
      <p>You won't be charged yet</p>
      <div id="tableRowGrid">
        <div class="priceLabel">
          ${{ this.listing.price }} x {{ this.daysSelected }} nights
        </div>
        <div class="price">${{ this.listing.price * this.daysSelected }}</div>
        <div class="priceLabel">Cleaning Fee</div>
        <div class="price">${{ this.cleaningFee }}</div>
        <div class="priceLabel">Service Fee</div>
        <div class="price">${{ this.serviceFee }}</div>
        <div class="priceLabel">Occupancy Taxes and Fees</div>
        <div class="price">${{ this.occupancyTaxesAndFees }}</div>
        <hr /> <hr>
        <div class="priceLabel grandTotal">Total</div>
        <div class="price grandTotal" >
          ${{
            this.listing.price * this.daysSelected +
            this.cleaningFee +
            this.serviceFee +
            this.occupancyTaxesAndFees
          }}
        </div>
      </div>
    </div>
  </v-card>
</template>

<style scoped src="./Price.css">
</style>
<script>
export default {
  name: "Price",

  props: {
    listing: Object,
    reviews: Array,
  },
  data() {
    return {
      dialog: false,
      daysSelected: 0,
      cleaningFee: 50,
      serviceFee: 20,
      occupancyTaxesAndFees: 34,
      averageReview: false,
    };
  },
  methods: {
    averageRating() {
      for (let i = 0; i < this.reviews.length; i++) {
        this.averageReview = this.averageReview + this.reviews[i].starValue;
      }
      return (this.averageReview =
        (this.averageReview / this.reviews.length).toFixed(1) +
        " (" +
        this.reviews.length +
        " reviews)");
    },
  },
  created() {
    this.averageRating();
  },
};
</script>