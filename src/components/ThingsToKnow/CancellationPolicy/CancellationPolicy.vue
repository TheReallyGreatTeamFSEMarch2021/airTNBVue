<template>
    <div v-if="listing" class="row col-4">
        <h4>Cancellation policy</h4>
        <p v-if="!listing.cancellationRefundPercentage">Non-refundable: Cancel before check-in and get back only the cleaning fee, if you paid one.</p>
        <div v-else>
          <p>Free cancellation for {{listing.freeCancellationDays*24}} hours</p>
          <p>After that, cancel before {{listing.ruleList.checkInTime}} on the day of check-in and get a {{listing.cancellationRefundPercentage==100?"full":listing.cancellationRefundPercentage+"%"}} refund, minus the first night and service fee.</p>
        </div>
        
    </div>
</template>

<style scoped src="./CancellationPolicy.css">
</style>
<script>
  export default {
    name: 'CancellationPolicy',
    
    props: {
      listing: Object
    },
    mounted(){
          
    }
    
  }
</script>