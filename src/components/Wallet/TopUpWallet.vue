<template>
  <div class="container">
    <div class="row">
      <div class="d-flex justify-content-between align-items-center py-4">
        <button
          type="button"
          class="btn btn-sm rounded-circle"
          @click="$router.back()"
        >
          &#8592;
        </button>

        <h5 class="text-center mb-0">Fund Wallet</h5>
        <span class="px-4"></span>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6 col-md-8 col-sm-12 m-auto mb-5">
        <div class="card border-0 shadow">
          <div class="card-body">
            <p>
              Please note that all payments will be received in your local
              currency
            </p>

            <Payment />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Payment from "@/components/Wallet/Payment.vue";

export default {
  name: "TopUpWallet",

  components: { Payment },

  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
@media (min-width: 320px) {
  .w-50 {
    width: 100% !important;
  }
}

@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  .w-50 {
    width: 75% !important;
  }
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}

@media (min-width: 1025px) {
}
</style>
