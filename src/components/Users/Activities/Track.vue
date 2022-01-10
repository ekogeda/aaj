<template>
  <div class="track">
    <div style="display: grid; place-items: center; height: 90vh">
      <div class="container my-5">
        <div class="row mb-5">
          <div class="col-lg-6 col-md-8 col-sm-12 m-auto">
            <div class="card border-0 shadow">
              <div class="card-body">
                <button class="btn" @click="$router.back()">&#8592;</button>

                <h5 class="text-center">Track your shipment</h5>

                <small class="text-muted d-block text-center mb-4">
                  Enter the waybill-number you received when you booked your
                  request
                </small>

                <template v-if="isTracking">
                  <ul class="list-group list-group-flush mb-3">
                    <li
                      class="list-group-item mb-3 shadow border-0"
                      style="border-radius: 25px"
                    >
                      <span class="text-uppercase text-muted fs-12"
                        >Waybill Number</span
                      >
                      <h6 class="fw-normal">{{ tracked.waybill_no }}</h6>
                    </li>
                    <li
                      class="list-group-item mb-3 shadow border-0"
                      style="border-radius: 25px"
                    >
                      <span class="text-uppercase text-muted fs-12"
                        >Status</span
                      >
                      <h6 v-switch="tracked.status" class="fw-normal">
                        <span v-case="'1'"> Pending </span>
                        <span v-case="'2'"> In-progress </span>
                        <span v-case="'3'"> Delivered </span>
                        <span v-case="'4'"> Returned </span>
                      </h6>
                    </li>
                    <li
                      class="list-group-item mb-3 shadow border-0"
                      style="border-radius: 25px"
                    >
                      <span class="text-uppercase text-muted fs-12"
                        >Origin</span
                      >
                      <h6 class="fw-normal">{{ tracked.o_address }}</h6>
                    </li>
                    <li
                      class="list-group-item mb-3 shadow border-0"
                      style="border-radius: 25px"
                    >
                      <span class="text-uppercase text-muted fs-12"
                        >Destination</span
                      >
                      <h6 class="fw-normal">{{ tracked.d_address }}</h6>
                    </li>
                  </ul>
                </template>

                <div class="mb-3">
                  <label for="trackId" class="form-label text-muted"
                    >Waybill Number</label
                  >
                  <input
                    type="text"
                    v-model="form.waybill"
                    id="trackId"
                    :class="{
                      'is-invalid': submitted && $v.form.waybill.$error,
                    }"
                    class="form-control"
                    placeholder="Enter your waybill number"
                  />
                  <div
                    v-if="submitted && $v.form.waybill.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.waybill.required"
                      >Waybill number is required</span
                    >
                  </div>
                </div>

                <button
                  type="button"
                  class="btn btn-primary d-block m-auto"
                  @click.prevent="trackOrder"
                >
                  Track
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";

export default {
  name: "Track",

  data() {
    return {
      form: { waybill: "", track: 1 },
      isTracking: false,
      submitted: false,
    };
  },

  computed: {
    ...mapGetters({ tracked: "transaction/track" }),
  },

  methods: {
    ...mapActions("transaction", ["getSingleTransaction"]),

    trackOrder: function () {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) return;

      this.isTracking = true;
      this.getSingleTransaction(this.form);
    },
  },

  validations() {
    return {
      form: {
        waybill: { required },
      },
    };
  },
};
</script>

<style scoped>
.fs-12 {
  font-size: x-small;
}
.form-control {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: hsl(0, 0%, 44%);
}

.form-label {
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #4f4f4f;
}

input,
.btn {
  border-radius: 15px;
}
.btn-primary:focus {
  box-shadow: none;
}
</style>
