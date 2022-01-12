<template>
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
        <h5 class="text-center mb-0">Transaction</h5>
        <span class="px-4"></span>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6 col-md-8 col-sm-12 m-auto mb-5">
        <div class="card border-0 shadow">
          <div class="card-body">
            <form>
              <div v-show="step === 1">
                <div class="d-flex justify-content-between align-items-center">
                  <h4 class="my-3">FROM {{ shipmentType.origin.iso3 }}</h4>

                  <div class="btn-group">
                    <button
                      class="btn btn-sm btn-outline-primary dropdown-toggle"
                      type="button"
                      id="international"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      International
                    </button>
                    <div
                      class="dropdown-menu dropdown-menu-end"
                      aria-labelledby="international"
                    >
                      <h6 class="dropdown-header mb-0 fw-normal">Import</h6>
                      <a
                        href="#!"
                        class="dropdown-item fs-14"
                        @click.prevent="international('import')"
                      >
                        Abroad to Nigeria
                      </a>

                      <h6 class="dropdown-header mb-0 fw-normal">Export</h6>
                      <a
                        href="#"
                        class="dropdown-item fs-14"
                        @click.prevent="international('export')"
                      >
                        Nigeria to Abroad
                      </a>
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="sName" class="form-label">Name of sender:</label>
                  <input
                    type="text"
                    class="form-control border-0 border-custom"
                    v-model.trim.lazy="form.senderName"
                    :class="{
                      'is-invalid': $v.form.senderName.$error,
                    }"
                    placeholder="Sender Name"
                  />
                  <div
                    v-if="$v.form.senderName.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.senderName.required"
                      >Name field is required</span
                    >
                  </div>
                </div>

                <div class="grid grid-sm">
                  <div class="mb-3">
                    <label for="sPhone" class="form-label">
                      Phone number:</label
                    >
                    <input
                      type="tel"
                      class="form-control border-0 border-custom"
                      v-model.trim.lazy="$v.form.senderPhone.$model"
                      required="required"
                      :class="{
                        'is-invalid': $v.form.senderPhone.$error,
                      }"
                      placeholder="Sender Phone Number"
                    />
                    <div
                      v-if="$v.form.senderPhone.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.form.senderPhone.required"
                        >Phone number field is required</span
                      >
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="sEmail" class="form-label">
                      Email address</label
                    >
                    <input
                      type="email"
                      class="form-control border-0 border-custom"
                      v-model.trim.lazy="$v.form.senderEmail.$model"
                      required="required"
                      :class="{
                        'is-invalid': $v.form.senderEmail.$error,
                      }"
                      placeholder="Sender Email Address"
                    />
                    <div
                      v-if="$v.form.senderEmail.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.form.senderEmail.required"
                        >Email field is required</span
                      >

                      <span
                        class="error"
                        v-if="!$v.form.senderEmail.senderEmail"
                      >
                        <br />
                        Should be in email format
                      </span>
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="sAddress" class="form-label"> Address:</label>
                  <input
                    type="text"
                    class="form-control border-0 border-custom"
                    v-model.trim.lazy="$v.form.originatingStreet.$model"
                    placeholder="Sender Address"
                  />
                </div>

                <div class="grid grid-3">
                  <div>
                    <div class="mb-3">
                      <label for="sCountry" class="form-label"> Country:</label>
                      <select
                        v-model.trim.lazy="$v.form.originatingCountry.$model"
                        class="form-control border-0 border-custom"
                        required="required"
                        :class="{
                          'is-invalid': $v.form.originatingCountry.$error,
                        }"
                        @change="getCountryId('origin')"
                      >
                        <option value="" disabled selected>
                          -select country*-
                        </option>
                        <option :value="`${shipmentType.origin.id}`">
                          {{ shipmentType.origin.name }}
                        </option>
                      </select>
                      <div
                        v-if="$v.form.originatingCountry.$error"
                        class="invalid-feedback"
                      >
                        <span v-if="!$v.form.originatingCountry.required"
                          >Country field is required</span
                        >
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="mb-3">
                      <label for="sState" class="form-label"> State:</label>
                      <select
                        v-model.trim.lazy="$v.form.originatingState.$model"
                        class="form-control border-0 border-custom"
                        required="required"
                        :class="{
                          'is-invalid': $v.form.originatingState.$error,
                        }"
                        @change="getStateId('origin')"
                      >
                        <option value="" disabled selected>
                          -select state-
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
                        v-if="$v.form.originatingState.$error"
                        class="invalid-feedback"
                      >
                        <span v-if="!$v.form.originatingState.required"
                          >State field is required</span
                        >
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="mb-3">
                      <label for="sCity" class="form-label"> City:</label>
                      <select
                        v-model.trim.lazy="form.originatingCity"
                        class="form-control border-0 border-custom"
                      >
                        <option value="" disabled selected>
                          -select city-
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
                  </div>
                </div>

                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input rounded-0"
                    id="sDraft"
                    @click="saveToDraft"
                    :checked="draft != null"
                  />
                  <label class="form-label" for="sDraft"> Save to draft </label>
                </div>

                <button
                  class="btn btn-sm btn-primary btn-custom fw-bold w-50 my-4 d-block m-auto text-uppercase"
                  @click.prevent="next()"
                >
                  Next
                </button>
              </div>

              <div v-show="step === 2">
                <h4 class="my-3">
                  TO
                  {{
                    shipmentType.origin.id == 233
                      ? shipmentType.destination.iso3
                      : ""
                  }}
                </h4>

                <div class="mb-3">
                  <label for="rName" class="form-label"
                    >Name of recipient:</label
                  >
                  <input
                    type="text"
                    class="form-control border-0 border-custom"
                    v-model.trim.lazy="$v.form.receiverName.$model"
                    required="required"
                    :class="{
                      'is-invalid': $v.form.receiverName.$error,
                    }"
                    placeholder="Recipient Name"
                  />
                  <div
                    v-if="$v.form.receiverName.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.receiverName.required"
                      >Name field is required</span
                    >
                  </div>
                </div>

                <div class="grid grid-sm">
                  <div class="mb-3">
                    <label for="rPhone" class="form-label">
                      Phone number:</label
                    >
                    <input
                      type="tel"
                      class="form-control border-0 border-custom"
                      v-model.trim.lazy="$v.form.receiverPhone.$model"
                      required="required"
                      :class="{
                        'is-invalid': $v.form.receiverPhone.$error,
                      }"
                      placeholder="Recipient Phone Number"
                    />
                    <div
                      v-if="$v.form.receiverPhone.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.form.receiverPhone.required"
                        >Name field is required</span
                      >
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="rEmail" class="form-label">
                      Email address</label
                    >
                    <input
                      type="email"
                      class="form-control border-0 border-custom"
                      v-model.trim.lazy="$v.form.receiverEmail.$model"
                      required="required"
                      :class="{
                        'is-invalid': $v.form.receiverEmail.$error,
                      }"
                      placeholder="Recipient Email Address"
                    />
                    <div
                      v-if="$v.form.receiverEmail.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.form.receiverEmail.required"
                        >Email address field is required</span
                      >
                      <span
                        class="error"
                        v-if="!$v.form.receiverEmail.receiverEmail"
                      >
                        <br />
                        Should be in email format
                      </span>
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="rAddress" class="form-label"> Address:</label>
                  <input
                    type="text"
                    class="form-control border-0 border-custom"
                    v-model.trim.lazy="$v.form.destinationStreet.$model"
                    placeholder="Recipient Address"
                  />
                </div>

                <div class="grid grid-3">
                  <div class="mb-3">
                    <label for="rCountry" class="form-label">Country</label>
                    <select
                      class="form-control border-0 border-custom"
                      v-model.trim.lazy="$v.form.destinationCountry.$model"
                      required="required"
                      :class="{
                        'is-invalid': $v.form.destinationCountry.$error,
                      }"
                      @change="getCountryId('dest')"
                    >
                      <option value="" disabled selected>
                        -select country-
                      </option>
                      <template v-if="shipmentType.origin.id == 233">
                        <option :value="`${shipmentType.destination.id}`">
                          {{ shipmentType.destination.name }}
                        </option>
                      </template>
                      <template v-else>
                        <option
                          :value="`${country.id}`"
                          v-for="country in shipmentType.destination"
                          :key="country.id"
                        >
                          {{ country.name }}
                        </option>
                      </template>
                    </select>
                    <div
                      v-if="$v.form.destinationCountry.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.form.destinationCountry.required"
                        >Name field is required</span
                      >
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="rState" class="form-label">State</label>
                    <select
                      class="form-control border-0 border-custom"
                      v-model.trim.lazy="$v.form.destinationState.$model"
                      required="required"
                      :class="{
                        'is-invalid': $v.form.destinationState.$error,
                      }"
                      @change="getStateId('dest')"
                    >
                      <option value="" disabled selected>-select state-</option>
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
                      v-if="$v.form.destinationState.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.form.destinationState.required"
                        >Name field is required</span
                      >
                    </div>
                  </div>

                  <div>
                    <div class="mb-3">
                      <label for="rCity" class="form-label">City</label>
                      <select
                        class="form-control border-0 border-custom"
                        v-model.trim.lazy="form.destinationCity"
                      >
                        <option value="" disabled selected>
                          -select city-
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

                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input rounded-0"
                    id="rDraft"
                    @click="saveToDraft"
                    :checked="draft != null"
                  />
                  <label class="form-label" for="rDraft"> Save to draft </label>
                </div>

                <div class="grid">
                  <button
                    class="btn btn-sm btn-secondary btn-custom fw-bold w-100 my-4 text-uppercase"
                    @click.prevent="prev()"
                  >
                    Previous
                  </button>
                  <button
                    class="btn btn-sm btn-primary btn-custom fw-bold w-100 my-4 text-uppercase"
                    @click.prevent="next()"
                  >
                    Next
                  </button>
                </div>
              </div>

              <div v-show="step === 3">
                <h4 class="my-3">Description</h4>

                <div
                  v-for="(row, index) in form.descriptions"
                  :key="index"
                  class="table-row"
                >
                  <div class="mb-3">
                    <label for="" class="form-label">Description:</label>
                    <input
                      type="text"
                      class="form-control border-0 border-custom"
                      v-model.trim.lazy="row.description"
                      placeholder="Description"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="" class="form-label">Quantity:</label>
                    <input
                      type="number"
                      class="form-control border-0 border-custom"
                      v-model.trim.lazy="row.quantity"
                      placeholder="Quantity"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="weight" class="form-label">Weight (Kg):</label>
                    <input
                      type="number"
                      class="form-control border-0 border-custom is-invalid"
                      v-model.trim.lazy="row.weight"
                      placeholder="Weight (Kg)"
                      required
                    />
                    <div class="invalid-feedback">
                      <span> Weight field is required </span>
                    </div>
                  </div>

                  <div
                    class="removed d-flex justify-content-between align-items-end"
                  >
                    <div class="mb-3">
                      <label for="" class="form-label">Item Value:</label>
                      <input
                        type="number"
                        class="form-control border-0 border-custom"
                        v-model.trim.number.lazy="row.amount"
                        placeholder="Item Value"
                      />
                    </div>

                    <button
                      type="button"
                      class="btn btn-sm btn-danger btn-custom"
                      @click="removeRow(row)"
                    >
                      <i class="fa fa-trash"></i>
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  class="btn btn-sm btn-success btn-custom w-100 mt-4"
                  @click="addRow"
                >
                  Add another item
                </button>

                <div class="grid">
                  <button
                    class="btn btn-sm btn-secondary btn-custom fw-bold w-100 my-4 text-uppercase"
                    @click.prevent="prev()"
                  >
                    Previous
                  </button>
                  <button
                    class="btn btn-sm btn-primary btn-custom fw-bold w-100 my-4 text-uppercase"
                    @click.prevent="next()"
                    :disabled="form.descriptions[0].weight == ''"
                  >
                    Next
                  </button>
                </div>
              </div>

              <div v-show="step === 4">
                <div class="my-3 d-none">
                  <div>
                    <h3 class="mt-1">Enter discount code</h3>
                    <p>
                      Provide a valid discount code to use with your
                      transaction.
                    </p>
                    <div class="grid grid-sm">
                      <div class="mb-3">
                        <input type="text" v-model.trim.lazy="form.discount" />
                        <label for="" class="form-label">Discount Code:</label>
                      </div>

                      <div class="mb-2 d-none">
                        <h3>Priority</h3>
                        <div class="d-flex justify-content-between">
                          <div class="form-check">
                            <label class="form-check-label" for="priority1">
                              Standard
                            </label>
                            <input
                              class="form-check-input"
                              type="radio"
                              name="priority"
                              id="priority1"
                              value="1"
                              v-model.trim.lazy="form.priority"
                            />
                          </div>

                          <div class="form-check">
                            <label class="form-check-label" for="priority2">
                              Urgent
                            </label>
                            <input
                              class="form-check-input"
                              type="radio"
                              name="priority"
                              id="priority2"
                              value="2"
                              v-model.trim.lazy="form.priority"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 class="mt-1">Apply Insurance</h3>
                <div class="grid grid-sm">
                  <div class="form-check">
                    <label class="form-check-label" for="insured1">
                      Standard
                    </label>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="insured"
                      id="insured1"
                      value="1"
                      v-model.trim.lazy="form.insured"
                    />
                    <p>
                      Insures your eligible shipments at a value of N10,000 for
                      no additional cost
                    </p>
                  </div>

                  <div class="form-check">
                    <label class="form-check-label" for="insured2">
                      Extended
                    </label>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="insured"
                      id="insured2"
                      value="2"
                      v-model.trim.lazy="form.insured"
                    />
                    <p>
                      Eligible shipments valued up to N200,000 for N1,500.
                      Shipments valued above N200,000 are limited to an
                      insurance cover of N200,000 or shipped entirely at the
                      sender's risk
                    </p>

                    <label class="form-check-label" for="insured3">
                      None
                    </label>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="insured"
                      id="insured3"
                      value="0"
                      v-model.trim.lazy="form.insured"
                    />
                  </div>
                </div>

                <div class="grid">
                  <button
                    class="btn btn-sm btn-custom btn-secondary fw-bold w-100 my-4 text-uppercase"
                    @click.prevent="prev()"
                  >
                    Previous
                  </button>
                  <button
                    class="btn btn-sm btn-custom btn-primary fw-bold w-100 my-4 text-uppercase"
                    @click.prevent="next('requestRate')"
                  >
                    Next
                  </button>
                </div>
              </div>

              <div v-show="step === 5">
                <h4 class="my-3">Quote</h4>

                <div v-if="rate != null">
                  <div class="card">
                    <div class="card-body text-center">
                      <h5 class="card-title text-center">
                        {{ rate.originCountry[0] }} ({{
                          rate.originCountry[1]
                        }}) | {{ rate.originState[0] }} ({{
                          rate.originState[1]
                        }})
                      </h5>
                      <p class="card-text">TO</p>
                      <h5 class="card-title">
                        {{ rate.destCountry[0] }} ({{ rate.destCountry[1] }}) |
                        {{ rate.destState[0] }} ({{ rate.destState[1] }})
                      </h5>
                    </div>
                    <hr />
                    <div class="text-center">
                      <h1>
                        ₦{{
                          rate ? new Intl.NumberFormat().format(rate.price) : 0
                        }}
                      </h1>
                      <h6>{{ rate ? rate.weight : "" }}KG</h6>
                      <p class="card-text mb-3">
                        Rates and courier availability are based on your
                        specified route and estimated weight
                      </p>
                    </div>
                  </div>
                </div>

                <div class="grid">
                  <button
                    class="btn btn-sm btn-secondary btn-custom fw-bold w-100 my-4 text-uppercase"
                    @click.prevent="prev()"
                  >
                    Previous
                  </button>
                  <button
                    class="btn btn-sm btn-primary btn-custom fw-bold w-100 my-4 text-uppercase"
                    @click.prevent="next()"
                  >
                    Next
                  </button>
                </div>
              </div>

              <div v-show="step === 6">
                <h5 class="my-3">Summary & Payment</h5>

                <div class="card">
                  <div class="card-body">
                    <div class="text-center">
                      <h1>
                        ₦{{
                          rate ? new Intl.NumberFormat().format(rate.price) : 0
                        }}
                      </h1>
                      <h6>{{ rate ? rate.weight : "" }}KG</h6>
                      <p class="card-text">
                        Rates and courier availability are based on your
                        specified route and estimated weight
                      </p>
                    </div>
                  </div>
                </div>

                <div class="summary grid-sm grid-md my-4">
                  <details>
                    <summary>Origin</summary>
                    <p>
                      <strong>Sender Name:</strong>
                      <samp>{{ form.senderName }}</samp>
                    </p>
                    <p>
                      <strong>Sender Phone:</strong>
                      <samp>{{ form.senderPhone }}</samp>
                    </p>
                    <p>
                      <strong>Sender Email:</strong>
                      <samp>{{ form.senderEmail }}</samp>
                    </p>
                    <p>
                      <strong>Originating Country:</strong>
                      <samp v-if="rate != null">{{
                        rate.originCountry[0]
                      }}</samp>
                    </p>
                    <p>
                      <strong>Address:</strong>
                      <samp>{{ form.originatingStreet }}</samp>
                    </p>
                    <p>
                      <strong>Originating State:</strong>
                      <samp v-if="rate != null">{{ rate.originState[0] }}</samp>
                    </p>
                  </details>

                  <details>
                    <summary>Destination</summary>
                    <p>
                      <strong>Receiver Name:</strong>
                      <samp>{{ form.receiverName }}</samp>
                    </p>
                    <p>
                      <strong>Receiver Phone:</strong>
                      <samp>{{ form.receiverPhone }}</samp>
                    </p>
                    <p>
                      <strong>Receiver Email:</strong>
                      <samp>{{ form.receiverEmail }}</samp>
                    </p>
                    <p>
                      <strong>Destination Country:</strong>
                      <samp v-if="rate != null">{{ rate.destCountry[0] }}</samp>
                    </p>
                    <p>
                      <strong>Address:</strong>
                      <samp>{{ form.destinationStreet }}</samp>
                    </p>
                    <p>
                      <strong>Destination State:</strong>
                      <samp v-if="rate != null">{{ rate.destState[0] }}</samp>
                    </p>
                  </details>
                </div>

                <h5>Select Service Type</h5>
                <div class="grid grid-sm">
                  <div class="form-check">
                    <label for="service1" class="form-check-label">
                      Drop-off
                    </label>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="serviced"
                      id="service1"
                      value="1"
                      v-model.trim.lazy="form.serviceType"
                    />
                    <p>
                      The shipper will drop off the item at one of our locations
                    </p>
                  </div>

                  <div class="form-check">
                    <label for="service2" class="form-check-label">
                      Pickup
                    </label>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="serviced"
                      id="service2"
                      value="2"
                      v-model.trim.lazy="form.serviceType"
                    />
                    <p>
                      This item should be picked up by a courier from the origin
                    </p>
                  </div>
                </div>

                <div class="user-radio">
                  <div class="form-check">
                    <label class="form-check-label" for="policy1">
                      I represent I have read, understand, and agree to the
                      AAJ-Express Privacy Policy and Terms of Service
                    </label>
                    <input
                      type="checkbox"
                      name="policy"
                      v-model.trim.lazy="$v.form.policy.$model"
                      class="form-check-input"
                      :class="{
                        'is-invalid': $v.form.policy.$error,
                      }"
                      value="1"
                      checked
                      id="policy1"
                    />

                    <div v-if="$v.form.policy.$error" class="invalid-feedback">
                      <span v-if="!$v.form.policy.required"
                        >Policy check required</span
                      >
                    </div>
                  </div>
                </div>

                <div class="grid">
                  <button
                    class="btn btn-sm btn-secondary btn-custom fw-bold w-100 my-4 text-uppercase"
                    @click.prevent="prev()"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    @click.prevent="submitForm"
                    class="btn btn-sm btn-primary btn-custom fw-bold w-100 my-4 text-uppercase"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "UserTransaction",

  data() {
    return {
      step: 1,

      form: {
        shipment: "",
        senderName: "",
        senderPhone: "",
        senderEmail: "",

        originatingCountry: "",
        originatingStreet: "",
        originatingState: "",
        originatingCity: "",

        receiverName: "",
        receiverPhone: "",
        receiverEmail: "",

        destinationCountry: "",
        destinationStreet: "",
        destinationState: "",
        destinationCity: "",

        descriptions: [
          {
            description: "",
            quantity: "",
            weight: "",
            amount: "",
          },
        ],

        weight: "",
        priority: "",
        discount: "",
        insured: "",
        serviceType: "",
        policy: "",
      },

      isOriginCountryChanged: false,
      isOriginStateChanged: false,
      isDestCountryChanged: false,
      isDestStateChanged: false,
      submitStatus: null,
      submitted: false,
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
    ...mapGetters({
      draft: "transaction/draft",
      rate: "rate/rate",
      user: "auth/user",
    }),
  },

  methods: {
    ...mapActions("location", [
      "getCountries",
      "getStates",
      "getCities",
      "getShipmentType",
    ]),
    ...mapActions("rate", ["getRate"]),
    ...mapActions("transaction", ["makeTransaction", "saveDraft"]),

    submitForm() {
      this.submitted = true;
      this.$v.form.policy.$touch();
      if (this.$v.form.$invalid) return;

      this.form.customerId = this.user.id;
      this.form.price = this.rate.price;
      this.form.weight = this.rate.weight;
      this.makeTransaction(this.form);
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

    international: function (source) {
      this.getShipmentType(source);
    },

    saveToDraft: function (e) {
      console.dir(e.target.checked);
      let isChecked = e.target.checked;

      if (isChecked) {
        let draftData = {
          senderName: this.form.senderName,
          senderPhone: this.form.senderPhone,
          senderEmail: this.form.senderEmail,
          originatingStreet: this.form.originatingStreet,

          receiverName: this.form.receiverName,
          receiverPhone: this.form.receiverPhone,
          receiverEmail: this.form.receiverEmail,
          destinationStreet: this.form.destinationStreet,
        };

        this.saveDraft(draftData);
      } else {
        this.saveDraft(null);
      }
    },

    prev() {
      this.step--;
    },
    next(req) {
      if (this.step === 1) {
        this.$v.form.senderName.$touch();
        this.$v.form.senderPhone.$touch();
        this.$v.form.senderEmail.$touch();
        this.$v.form.originatingCountry.$touch();
        this.$v.form.originatingStreet.$touch();
        this.$v.form.originatingState.$touch();
        if (
          this.$v.form.senderName.$invalid ||
          this.$v.form.senderPhone.$invalid ||
          this.$v.form.senderEmail.$invalid ||
          this.$v.form.originatingCountry.$invalid ||
          this.$v.form.originatingStreet.$invalid ||
          this.$v.form.originatingState.$invalid
        ) {
          return false;
        } else {
          return (this.step = 2);
        }
      }

      if (this.step === 2) {
        this.$v.form.receiverName.$touch();
        this.$v.form.receiverPhone.$touch();
        this.$v.form.receiverEmail.$touch();
        this.$v.form.destinationCountry.$touch();
        this.$v.form.destinationStreet.$touch();
        this.$v.form.destinationState.$touch();
        if (
          this.$v.form.receiverName.$invalid ||
          this.$v.form.receiverPhone.$invalid ||
          this.$v.form.receiverEmail.$invalid ||
          this.$v.form.destinationCountry.$invalid ||
          this.$v.form.destinationStreet.$invalid ||
          this.$v.form.destinationState.$invalid
        ) {
          return false;
        } else {
          return (this.step = 3);
        }
      }

      if (this.step === 6) {
        if (this.$v.form.policy.$invalid) {
          return false;
        }
      }

      let load = [];
      this.form.descriptions.map((mass) => {
        load.push(parseFloat(mass.weight));
      });

      if (req == "requestRate") {
        let reqRate = {
          inter: "inter",
          shipment:
            this.shipmentType.origin.iso3 == "USA" ? "import" : "export",
          originatingCountry: this.form.originatingCountry,
          destinationCountry: this.form.destinationCountry,
          originatingState: this.form.originatingState,
          destinationState: this.form.destinationState,
          priority: this.form.priority,
          weight: load.reduce((returned, current) => returned + current, 0),
        };
        this.getRate(reqRate);
      }

      this.step++;
    },

    addRow: function () {
      this.form.descriptions.push({
        description: "",
        quantity: "",
        weight: "",
        amount: "",
      });
    },
    removeRow: function (index) {
      this.form.descriptions.splice(
        this.form.descriptions.findIndex((e) => e === index),
        1
      );
    },
  },

  created() {
    if (this.draft != null) {
      this.form.senderName = this.draft.senderName;
      this.form.senderPhone = this.draft.senderPhone;
      this.form.senderEmail = this.draft.senderEmail;
      this.form.originatingStreet = this.draft.originatingStreet;

      this.form.receiverName = this.draft.receiverName;
      this.form.receiverPhone = this.draft.receiverPhone;
      this.form.receiverEmail = this.draft.receiverEmail;
      this.form.destinationStreet = this.draft.destinationStreet;
    }

    if (this.countries && this.countries.data.length > 0) {
      return;
    } else {
      this.getCountries();
    }
  },

  mounted() {
    if (this.shipmentType) return;
    this.getShipmentType("export");
  },

  validations: {
    form: {
      senderName: { required },
      senderPhone: { required, minLength: minLength(6) },
      senderEmail: { required, email },

      receiverName: { required },
      receiverPhone: { required, minLength: minLength(6) },
      receiverEmail: { required, email },

      originatingCountry: { required },
      destinationCountry: { required },
      originatingStreet: { required },
      destinationStreet: { required },

      originatingState: { required },
      destinationState: { required },

      policy: { required },
    },
  },
};
</script>

<style scoped>
.fs-14 {
  font-size: 12px;
}

.form-check-input {
  margin-top: 0.35em;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.card {
  border-radius: 16px;
}

.btn-custom {
  border-radius: 16px;
}

.summary {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 20px;
}

details p {
  margin-bottom: 0.3rem !important;
  background-color: var(--aaj-gray-light);
  padding: 0.3rem;
}

samp {
  display: block;
}

.removed input {
  min-width: 200px;
}

h1,
h4,
h5,
h6,
h3 {
  color: var(--aaj-blue) !important;
}

.btn-outline-primary.dropdown-toggle:focus {
  box-shadow: none;
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

.border-custom {
  border-bottom: 1px solid #ccc !important;
  border-radius: none;
}

.border-custom:focus {
  border-bottom: 1px solid #333 !important;
}

.btn-primary:focus {
  box-shadow: none;
}

@media (min-width: 320px) {
  .grid-sm {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid-sm {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}

@media (min-width: 1025px) {
}
</style>
