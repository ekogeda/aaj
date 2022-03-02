<template>
  <div class="rate">
    <Modal :open="isOpen">
      <template v-slot:modalHeader>
        <h5 class="modal-title text-uppercase" id="transLabel">
          <img
            src="@/assets/logo.png"
            alt="AAJ-Express"
            width="40px"
            class="img-fluid"
          />
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          @click="close"
        ></button>
      </template>

      <template v-slot:default v-if="rate != null">
        <h3 class="text-center">
          <span>{{ rate.weight }} Kg</span> @
          <span>₦{{ new Intl.NumberFormat().format(rate.price) }}</span>
        </h3>
        <h6 class="modal-title fw-normal text-center">
          The above rates presented are estimates and may be adjusted when the
          package is picked up
        </h6>
      </template>

      <template v-slot:modalFooter>
        <button type="button" class="btn btn-sm btn-primary" @click="close">
          Close
        </button>
      </template>
    </Modal>

    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-between align-items-center py-4">
          <!-- <img src="/img/aaj-files/bars-b.svg" alt="Menu Bars" /> -->
          <button
            type="button"
            class="btn btn-sm rounded-circle"
            @click="$router.go(-1)"
          >
            &#8592;
          </button>
          <h5 class="text-center mb-0">Get Estimate</h5>
          <span class="px-4"></span>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 col-md-8 col-sm-12 m-auto mb-5">
          <div class="card border-0 shadow">
            <div class="card-body">
              <form @submit.prevent="rateForm">
                <div class="d-none">
                  <h4 class="text-muted">Add Pickup Details</h4>
                  <div>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="pickup"
                          id="pickup"
                          value="1"
                          checked
                        />
                        Pick up and Delivery
                      </label>
                    </div>
                    <hr class="w-100" />

                    <div class="form-check mb-2">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="pickup"
                          id="pickup2"
                          value="2"
                        />
                        Office Drop Off
                      </label>
                    </div>

                    <div class="card border-0 bg-aaj-light">
                      <div class="card-body">
                        <p class="mb-0">
                          Shop F217, First Floor Tejuosho Ultra Modern Market.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="my-4">
                  <div>
                    <div class="mb-3">
                      <label for="s-type" class="form-label"
                        >Shipment Type</label
                      >
                      <select
                        class="form-control border-0 border-custom"
                        v-model.trim.lazy="form.shipment"
                        :class="{
                          'is-invalid': submitted && $v.form.shipment.$error,
                        }"
                        @change="shipments()"
                      >
                        <option value="" disabled selected>
                          -shipment type-
                        </option>
                        <option value="1">Import</option>
                        <option value="2">Export</option>
                      </select>
                      <div
                        v-if="submitted && $v.form.shipment.$error"
                        class="invalid-feedback"
                      >
                        <span v-if="!$v.form.shipment.required"
                          >Shipment type is required</span
                        >
                      </div>
                    </div>

                    <div v-if="form.shipment == 2">
                      <div
                        class="animate__animated animate__fadeIn my-4 bg-light p-2"
                      >
                        <div class="form-check">
                          <label class="form-check-label">
                            <input
                              type="radio"
                              class="form-check-input"
                              v-model.trim.lazy="form.serviceType"
                              name="pickup"
                              id="pickup"
                              value="1"
                              checked
                            />
                            Pick up and Delivery
                          </label>
                        </div>
                        <hr class="w-100" />

                        <div class="form-check mb-2">
                          <label class="form-check-label">
                            <input
                              type="radio"
                              class="form-check-input"
                              v-model.trim.lazy="form.serviceType"
                              name="pickup"
                              id="pickup2"
                              value="2"
                            />
                            Office Drop Off
                          </label>
                        </div>

                        <div class="card border-0 bg-aaj-light">
                          <div class="card-body">
                            <p class="mb-0">
                              Shop F217, First Floor Tejuosho Ultra Modern
                              Market.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h5 class="py-2 text-muted fw-normal">
                      Where are you shipping from?
                    </h5>

                    <div class="mb-3">
                      <label for="country" class="form-label">Country</label>
                      <select
                        class="form-control border-0 border-custom"
                        id="oCountry"
                        v-model.trim.lazy="$v.form.originatingCountry.$model"
                        :class="{
                          'is-invalid':
                            submitted && $v.form.originatingCountry.$error,
                        }"
                        @change="getCountryId('origin')"
                      >
                        <option selected disabled value="">
                          -select origin country-
                        </option>
                        <option :value="`${shipmentType.origin.id}`">
                          {{ shipmentType.origin.name }}
                        </option>
                      </select>
                      <div
                        v-if="submitted && $v.form.originatingCountry.$error"
                        class="invalid-feedback"
                      >
                        <span v-if="!$v.form.originatingCountry.required"
                          >Country is required</span
                        >
                      </div>
                    </div>

                    <div class="mb-3">
                      <label for="state" class="form-label">State</label>
                      <select
                        class="form-control border-0 border-custom"
                        v-model.trim.lazy="$v.form.originatingState.$model"
                        :class="{
                          'is-invalid':
                            submitted && $v.form.originatingState.$error,
                        }"
                        @change="getStateId('origin')"
                      >
                        <option value="" disabled selected>
                          -select origin state-
                        </option>
                        <template v-if="isOriginCountryChanged">
                          <option
                            :value="state.id"
                            v-for="state in states.data"
                            :key="state.id"
                          >
                            {{ state.name }}
                          </option>
                        </template>
                      </select>
                      <div
                        v-if="submitted && $v.form.originatingState.$error"
                        class="invalid-feedback"
                      >
                        <span v-if="!$v.form.originatingState.required"
                          >State is required</span
                        >
                      </div>
                    </div>

                    <div class="mb-3">
                      <label for="city" class="form-label">city</label>
                      <select
                        class="form-control border-0 border-custom"
                        v-model.trim.lazy="form.originatingCity"
                      >
                        <option value="" disabled selected>
                          -select origin city-
                        </option>
                        <template v-if="isOriginStateChanged">
                          <option
                            :value="city.id"
                            v-for="city in cities.data"
                            :key="city.id"
                          >
                            {{ city.name }}
                          </option>
                        </template>
                      </select>
                    </div>

                    <div class="mb-3">
                      <label for="weight" class="form-label">Weight (Kg)</label>
                      <input
                        type="text"
                        class="form-control border-0 border-custom"
                        v-model.trim.lazy="form.weight"
                        name="weight"
                        :class="{
                          'is-invalid': submitted && $v.form.weight.$error,
                        }"
                        placeholder="Enter weight"
                      />
                      <div
                        v-if="submitted && $v.form.weight.$error"
                        class="invalid-feedback"
                      >
                        <span v-if="!$v.form.weight.required"
                          >Weight is required</span
                        >
                      </div>
                    </div>

                    <h5 class="py-2 text-muted fw-normal">
                      Where are you shipping to?
                    </h5>

                    <div class="mb-3">
                      <label for="country" class="form-label">Country</label>
                      <select
                        class="form-control border-0 border-custom"
                        v-model.trim.lazy="$v.form.destinationCountry.$model"
                        :class="{
                          'is-invalid':
                            submitted && $v.form.destinationCountry.$error,
                        }"
                        @change="getCountryId('dest')"
                      >
                        <option value="" disabled selected>
                          -select destination country-
                        </option>
                        <template v-if="shipmentType.origin.id == 233">
                          <option :value="`${shipmentType.destination.id}`">
                            {{ shipmentType.destination.name }}
                          </option>
                        </template>
                        <template v-else>
                          <option
                            :value="`${country.id}`"
                            v-for="country in countries.data"
                            :key="country.id"
                          >
                            {{ country.name }}
                          </option>
                        </template>
                      </select>
                      <div
                        v-if="submitted && $v.form.destinationCountry.$error"
                        class="invalid-feedback"
                      >
                        <span v-if="!$v.form.destinationCountry.required"
                          >Country is required</span
                        >
                      </div>
                    </div>

                    <div class="mb-3">
                      <label for="state" class="form-label">State</label>
                      <select
                        class="form-control border-0 border-custom"
                        v-model.trim.lazy="$v.form.destinationState.$model"
                        :class="{
                          'is-invalid':
                            submitted && $v.form.destinationState.$error,
                        }"
                        @change="getStateId('dest')"
                      >
                        <option value="" disabled selected>
                          -select destination state-
                        </option>
                        <template v-if="isDestCountryChanged">
                          <option
                            :value="state.id"
                            v-for="state in destStates.data"
                            :key="state.id"
                          >
                            {{ state.name }}
                          </option>
                        </template>
                      </select>
                      <div
                        v-if="submitted && $v.form.destinationState.$error"
                        class="invalid-feedback"
                      >
                        <span v-if="!$v.form.destinationState.required"
                          >State is required</span
                        >
                      </div>
                    </div>

                    <div class="mb-3">
                      <label for="city" class="form-label">city</label>
                      <select
                        class="form-control border-0 border-custom"
                        v-model.trim.lazy="form.destinationCity"
                      >
                        <option value="" disabled selected>
                          -select destination city-
                        </option>
                        <template v-if="isDestStateChanged">
                          <option
                            :value="city.id"
                            v-for="city in destCities.data"
                            :key="city.id"
                          >
                            {{ city.name }}
                          </option>
                        </template>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="d-none">
                  <h4 class="text-muted">Note</h4>
                  <div>
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control border-0 border-custom"
                        name="note"
                        id="note"
                        aria-describedby="nodes"
                        placeholder="Enter note"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  class="btn btn-primary d-block m-auto btn-custom mb-2"
                >
                  Get Estimate
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/ModalComp.vue";
import { mapGetters, mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";

export default {
  name: "GetRate",
  components: { Modal },
  data() {
    return {
      form: {
        inter: "inter",
        shipment: "",
        serviceType: "",
        originatingCountry: "",
        originatingState: "",
        originatingCity: "",
        destinationCountry: "",
        destinationState: "",
        destinationCity: "",
        weight: "",
      },

      isOriginCountryChanged: false,
      isOriginStateChanged: false,
      isDestCountryChanged: false,
      isDestStateChanged: false,

      submitted: false,
      isOpen: false,
    };
  },

  computed: {
    ...mapGetters("location", [
      "countries",
      "states",
      "cities",
      "destCountries",
      "destStates",
      "destCities",
      "shipmentType",
    ]),
    ...mapGetters("rate", ["rate"]),
  },

  methods: {
    ...mapActions("location", [
      "getCountries",
      "getStates",
      "getCities",
      "getShipmentType",
    ]),
    ...mapActions("rate", ["getRate"]),

    shipments: function () {
      const sType = this.form.shipment == 1 ? "import" : "export";
      this.getShipmentType(sType);
    },

    rateForm() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) return;

      this.getRate(this.form);
    },

    getCountryId: function (source) {
      if (source == "origin") {
        this.getStates([this.form.originatingCountry, source]);
        this.isOriginCountryChanged = true;
      } else {
        this.getStates([this.form.destinationCountry, source]);
        this.isDestCountryChanged = true;
      }
    },

    getStateId: function (source) {
      if (source == "origin") {
        this.getCities([this.form.originatingState, source]);
        this.isOriginStateChanged = true;
      } else {
        this.getCities([this.form.destinationState, source]);
        this.isDestStateChanged = true;
      }
    },

    close: function () {
      this.isOpen = !this.isOpen;
    },
  },

  watch: {
    rate(val) {
      if (val.price != "") {
        this.isOpen = true;
      } else {
        this.isOpen = false;
      }
    },
  },

  mounted() {
    if (this.countries && this.countries.length > 0) return;
    this.getCountries();

    if (this.shipmentType && this.shipmentType != 0) return;
    this.getShipmentType("export");
  },

  validations: {
    form: {
      shipment: { required },
      originatingCountry: { required },
      weight: { required },
      originatingState: { required },
      destinationCountry: { required },
      destinationState: { required },
    },
  },
};
</script>

<style scoped>
.rate h5 {
  font-size: 16px;
}

.form-control {
  padding: 0.75rem 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: hsl(0, 0%, 44%);
  border-radius: 0;
}

.form-label {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #4f4f4f;
}

.card {
  border-radius: 16px;
}

.border-custom {
  border-bottom: 1px solid #ccc !important;
  border-radius: none;
}

.border-custom:focus {
  border-bottom: 1px solid #333 !important;
}

.btn-custom {
  border-radius: 16px;
}

.bg-aaj-light {
  color: #cc5501;
  background: rgba(255, 242, 242, 0.5);
  border-radius: 24px;
  font-size: 14px;
  line-height: 16px;
}

.btn-primary:focus {
  box-shadow: none;
}

@media (min-width: 320px) {
  /* smartphones, iPhone, portrait 480x320 phones */
}

@media (min-width: 481px) {
  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
}

@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}

@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */
}

@media (min-width: 1281px) {
  /* hi-res laptops and desktops */
}
</style>
