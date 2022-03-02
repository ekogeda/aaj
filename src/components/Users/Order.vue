<template>
  <div class="dashboard position-absolute start-0 end-0 h-100 overflow-auto">
    <div class="container-fluid">
      <Sidebar />

      <main :class="[isBigScreen ? 'big-screen' : 'small-screen']" id="main">
        <div class="container">
          <div class="card my-4 border-0 card-custom">
            <div class="card-body">
              <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                  <button
                    class="btn d-none d-lg-block"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#dashboardSide"
                    aria-controls="dashboardSide"
                    @click.prevent="toggled"
                  >
                    <i class="bi bi-list"></i>
                  </button>
                  <a class="navbar-brand" href="#">Orders</a>

                  <button
                    class="btn btn-sm btn-outline-primary shadow-none border-0 d-lg-none"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#dashboardSide"
                    aria-controls="dashboardSide"
                    @click.prevent="toggled"
                  >
                    <i class="bi bi-list"></i>
                  </button>

                  <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav ms-auto mt-2 mt-lg-0 sm-viewport">
                      <li class="nav-item me-3 active">
                        <div class="container-2">
                          <span class="icon"><i class="fa fa-search"></i></span>
                          <input
                            id="search"
                            type="search"
                            placeholder="Search..."
                          />
                        </div>
                      </li>
                      <li class="nav-item me-3">
                        <a class="nav-link" href="#">
                          <img
                            src="/img/aaj-files/new.png"
                            alt="Notification"
                          />
                        </a>
                      </li>
                      <li class="nav-item me-3 dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          id="dropdownId"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          ><img src="/img/aaj-files/setting.png" alt="settings"
                        /></a>
                        <div
                          class="dropdown-menu dropdown-menu-end"
                          aria-labelledby="dropdownId"
                        >
                          <a class="dropdown-item" href="#">My profile</a>
                          <a
                            class="dropdown-item"
                            href="#"
                            @click.prevent="logout"
                            >Logout</a
                          >
                        </div>
                      </li>

                      <img
                        src="/img/aaj-files/divider.png"
                        class="me-3 h-100 m-auto"
                        alt="divider"
                      />

                      <li class="nav-item me-3">
                        <router-link
                          :to="{ name: 'user.profile' }"
                          class="nav-link d-flex justify-content-center align-items-center"
                          exact
                        >
                          <img
                            src="/img/aaj-files/profile.png"
                            class="img-thumbnail rounded-circle me-2"
                            alt="Avatar"
                          />
                          <p class="mb-0">{{ fullName }}</p>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

              <div class="row g-3 my-3">
                <div class="container">
                  <div class="mb-3 row gy-3">
                    <div class="col-md-4 col-sm-12">
                      <div
                        class="d-flex justify-content-center align-items-center"
                      >
                        <input
                          type="search"
                          class="form-control form-control-sm me-2"
                          name="inputName"
                          id="inputName"
                          placeholder="Search by Tracking Number"
                        />
                        <button class="btn btn-sm btn-primary">Search</button>
                      </div>
                    </div>

                    <div class="col-md-8 col-sm-12">
                      <div class="row ms-auto w-custom">
                        <div class="col-md-6 col-sm-12 mb-3">
                          <select
                            class="form-control form-control-sm"
                            name="status"
                            id="status"
                          >
                            <option>Filter by Status</option>
                            <option>Pending</option>
                            <option>Transit</option>
                            <option>Delivered</option>
                          </select>
                        </div>

                        <div class="col-md-6 col-sm-12 mb-3">
                          <input
                            type="date"
                            name="date"
                            id="date"
                            class="form-control form-control-sm"
                            placeholder="Search by Date"
                            aria-describedby="helpId"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <h6 class="mb-0 fw-normal">
                      All Orders ({{ transactions.status.requests }})
                    </h6>

                    <router-link
                      :to="{ name: 'user.transaction' }"
                      class="btn btn-sm btn-primary"
                    >
                      <i class="bi bi-plus"></i>
                      Create
                      <span class="d-none d-sm-inline-block">New Order</span>
                    </router-link>
                  </div>

                  <div class="table-responsive my-5">
                    <div
                      class="toast border-0 m-auto mb-3"
                      :class="{ fade: copySucceeded, show: copySucceeded }"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                      style="font-size: 0.7rem; width: 80px"
                    >
                      <div class="toast-body text-center p-2">
                        <span class="text-muted"> Copied! </span>
                      </div>
                    </div>

                    <table
                      class="table table-borderless table-striped table-hover align-middle"
                      id="orderDataTable"
                    >
                      <thead class="thead-inverse">
                        <tr>
                          <th scope="col">Waybill No</th>
                          <th scope="col">Date</th>
                          <th scope="col">Received By</th>
                          <th scope="col">Mobile</th>
                          <th scope="col">Origin</th>
                          <th scope="col">Destination</th>
                          <th scope="col">Weight (Kg)</th>
                          <th scope="col">Price</th>
                          <th scope="col">Status</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="trans in transactions.data" :key="trans.id">
                          <td title="copy">
                            <a
                              href="#!"
                              class="me-2"
                              v-clipboard:copy="trans.waybill_no"
                              v-clipboard:success="onCopyStatus"
                              v-clipboard:error="onCopyError"
                            >
                              {{ trans.waybill_no }}
                            </a>
                          </td>
                          <td>{{ formatDate(trans.created_at) }}</td>
                          <td>
                            {{ trans.d_first_name + " " + trans.d_last_name }}
                          </td>
                          <td>{{ trans.d_phone }}</td>
                          <td>{{ trans.o_address }}</td>
                          <td>{{ trans.d_address }}</td>
                          <td class="text-center">{{ trans.weight }}</td>
                          <td>
                            {{ new Intl.NumberFormat().format(trans.price) }}
                          </td>
                          <td v-switch="trans.status">
                            <span v-case="'0'" class="badge text-warning">
                              <i class="bi bi-circle-fill"></i> Pending
                            </span>
                            <span v-case="'1'" class="badge text-warning">
                              <i class="bi bi-circle-fill"></i> Pending
                            </span>
                            <span v-case="'2'" class="badge text-primary">
                              <i class="bi bi-circle-fill"></i>
                              In-progress
                            </span>
                            <span v-case="'3'" class="badge text-success">
                              <i class="bi bi-circle-fill"></i> Delivered
                            </span>
                            <span v-case="'4'" class="badge text-aaj">
                              <i class="bi bi-circle-fill"></i>
                              In-progress
                            </span>
                            <span v-case="'5'" class="badge text-info">
                              <i class="bi bi-circle-fill"></i> Not Available
                            </span>
                            <span v-case="'6'" class="badge text-danger">
                              <i class="bi bi-circle-fill"></i> Cancelled
                            </span>
                            <span v-case="'7'" class="badge text-dark">
                              <i class="bi bi-circle-fill"></i> Returned
                            </span>
                            <span v-case="'9'" class="badge text-success">
                              <i class="bi bi-circle-fill"></i> Delivered
                            </span>
                          </td>

                          <td>
                            <button
                              class="border-0 text-info"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#viewOrder"
                              @click="openDetail(trans.waybill_no)"
                            >
                              <i class="bi bi-eye"></i>
                            </button>

                            <!-- <div class="btn-group">
                              <button
                                class="btn btn-sm dropdown-toggle p-0"
                                type="button"
                                data-bs-toggle="dropdown"
                              >
                                <i class="bi bi-three-dots-vertical"></i>
                              </button>
                              <div
                                class="
                                  dropdown-menu dropdown-menu-end
                                  z-index-3
                                "
                              >
                                <a
                                  class="dropdown-item text-info"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#viewOrder"
                                  @click="openDetail(trans.waybill_no)"
                                >
                                  <i class="bi bi-eye"></i>
                                  View
                                </a>
                                <a class="dropdown-item text-warning" href="#">
                                  <i class="bi bi-pencil-square"></i>
                                  Edit
                                </a>
                              </div>
                            </div> -->
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <div
      class="modal fade"
      id="viewOrder"
      tabindex="-1"
      aria-labelledby="viewOrderLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="viewOrderLabel">Order Details</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <template v-if="transaction != null">
              <div class="table-responsive">
                <table
                  class="table table-borderless table-striped table-hover align-middle"
                >
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Quantity</th>
                      <th>Weight</th>
                      <th class="text-end">Declared Cost</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="detail in transaction.data" :key="detail.id">
                      <td>{{ detail.description }}</td>
                      <td>{{ detail.quantity }}</td>
                      <td>{{ detail.weight }}</td>
                      <td class="text-end">
                        {{
                          new Intl.NumberFormat().format(
                            detail.declared_total_cost
                          )
                        }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Users/Sidebar.vue";
import { mapGetters, mapActions } from "vuex";
import { required, helpers } from "vuelidate/lib/validators";
import moment from "moment";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

export default {
  name: "UserOrder",

  components: { Sidebar },

  data() {
    return {
      form: {
        userdetail: "",
        country: "",
        amount: "",
      },

      isBigScreen: false,
      copySucceeded: null,
    };
  },

  computed: {
    ...mapGetters({
      transactions: "transaction/transactions",
      transaction: "transaction/transaction",
      user: "auth/user",
    }),

    fullName: function () {
      return this.user.first_name + " " + this.user.last_name;
    },
  },

  methods: {
    ...mapActions("transaction", ["getTransactions", "getSingleTransaction"]),

    ...mapActions("auth", ["logoutUser"]),

    onCopyStatus() {
      this.copySucceeded = true;
      setTimeout(() => {
        this.copySucceeded = null;
      }, 3000);
    },
    onCopyError() {
      this.copySucceeded = false;
    },

    logout() {
      this.logoutUser({ aksi: "logout" });
    },

    formatDate: function (params) {
      return moment(params).format("MMM. Do, YYYY");
    },

    submitRequest() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("Form successfully submitted.");
        // console.log(this.form);
      } else {
        // alert("Please fill out all the required field..!");
      }
    },

    submitSend() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("Form successfully submitted.");
        // console.log(this.form);
      }
    },

    openDetail: function (waybill) {
      if (waybill != "") {
        this.getSingleTransaction({ waybill: waybill });
      }
    },

    toggled() {
      this.isBigScreen = !this.isBigScreen;
    },
  },

  mounted() {
    this.getTransactions(this.user.id);

    setTimeout(() => {
      $("#orderDataTable").DataTable();
    }, 2000);
  },

  validations() {
    return {
      form: {
        userdetail: {
          required: helpers.withMessage("This field cannot be empty", required),
        },
        country: {
          required: helpers.withMessage(
            "Country field cannot be empty",
            required
          ),
        },
        amount: {
          required: helpers.withMessage(
            "Amount field cannot be empty",
            required
          ),
        },
      },
    };
  },
};
</script>

<style scoped>
.w-custom {
  width: 75%;
}

table {
  font-size: 12px;
}
.border-radius {
  border-radius: 16px;
}

.input-custom {
  border-radius: 0 3px 3px 0;
}

.group {
  min-height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
}

.btn-update {
  width: 160px;
}

.card-title {
  font-size: 18px;
  line-height: 22px;
}

.card-text {
  font-size: 15px;
  line-height: 18px;
  opacity: 0.5;
}
.dashboard {
  background: #f5f5f5;
}

aside {
  width: 230px;
  height: 100vh;
  top: 100px !important;
  background: #f5f5f5;
}

.big-screen {
  padding-left: 15rem;
}

#main {
  width: 100% !important;
  height: auto;
  background: #f5f5f5;
}

.dropdown-toggle::after {
  content: none;
}

.card-custom {
  box-shadow: 0px 2px 10px rgba(34, 34, 34, 0.05);
  border-radius: 24px;
}

.comp .card {
  border-radius: 16px;
}

.container-2 {
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
}

.container-2 input#search {
  width: 40px;
  height: 40px;
  border: none;
  font-size: 12px;
  float: right;
  color: #262626;
  padding-left: 35px;
  border-radius: 25px;
  color: #333;
  transition: width 0.55s ease;
}

.container-2 input#search::-webkit-input-placeholder {
  color: #65737e;
}

.container-2 input#search:-moz-placeholder {
  color: #65737e;
}

.container-2 input#search::-moz-placeholder {
  color: #65737e;
}

.container-2 input#search:-ms-input-placeholder {
  color: #65737e;
}

.container-2 .icon {
  position: absolute;
  top: 50%;
  right: 0;
  margin-right: 10px;
  margin-top: 8px;
  z-index: 1;
  color: #4f5b66;
}

.container-2 input#search:focus,
.container-2 input#search:active {
  outline: none;
  width: 250px;
  background: #ccc;
}

.container-2:hover input#search {
  width: 250px;
  background: #ccc;
}

.container-2:hover .icon {
  color: #93a2ad;
}

label {
  color: #595959;
}

.btn-primary:focus {
  box-shadow: none;
}

@media (min-width: 320px) {
  .w-custom {
    width: 100%;
  }

  .small-screen {
    padding-left: 0;
  }

  .big-screen {
    padding-left: 0;
  }

  .sm-viewport {
    flex-direction: column;
  }
}

@media (min-width: 640px) {
  .w-custom {
    width: 75%;
  }
  .big-screen {
    padding-left: 15rem;
  }
}

@media (min-width: 1024px) {
  .sm-viewport {
    flex-direction: row;
  }
}
</style>
