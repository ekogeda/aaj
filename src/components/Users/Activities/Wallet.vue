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
                    <span class="bi bi-list"></span>
                  </button>
                  <a class="navbar-brand" href="#">Wallet</a>

                  <button
                    class="btn btn-sm btn-outline-primary shadow-none border-0 d-lg-none"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#dashboardSide"
                    aria-controls="dashboardSide"
                    @click.prevent="toggled"
                  >
                    <span class="bi bi-list"></span>
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
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div
                      class="card border-success shadow"
                      style="border-left: 5px solid #198754"
                    >
                      <div
                        class="card-body py-1 px-3 d-flex align-items-center justify-content-center"
                      >
                        <span
                          class="bi bi-wallet d-block text-success fw-bold fs-3 me-2"
                        ></span>
                        <template v-if="wallet.total > 0">
                          <h5 class="mb-0">
                            {{ new Intl.NumberFormat().format(wallet.total) }}
                          </h5>
                        </template>
                        <template v-else> <h5 class="mb-0">0.00</h5> </template>
                      </div>
                    </div>

                    <router-link
                      :to="{ name: 'user.topupwallet' }"
                      class="btn btn-sm btn-primary d-flex align-items-center"
                    >
                      <span class="bi bi-piggy-bank fs-5"></span>
                      <span class="d-none d-sm-inline-block ms-1"
                        >Fund wallet</span
                      >
                    </router-link>
                  </div>

                  <div class="table-responsive my-5">
                    <table
                      class="table table-hover table-inverse"
                      id="walletDataTable"
                    >
                      <thead class="thead-inverse">
                        <tr>
                          <th>ID</th>
                          <th>Ref No</th>
                          <th>Trans No</th>
                          <th>Credit</th>
                          <th>Debit</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(wal, index) in wallet.data" :key="index">
                          <th>{{ ++index }}</th>
                          <td>{{ wal.ref_no }}</td>
                          <td>{{ wal.trans_no }}</td>
                          <td>{{ wal.wallet_debit }}</td>
                          <td>{{ wal.wallet_credit }}</td>
                          <td>{{ formatDate(wal.created_at) }}</td>
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
            <h5 class="modal-title" id="viewOrderLabel">Transaction Details</h5>
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
                    <tr v-for="detail in transaction" :key="detail.id">
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
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import moment from "moment";

export default {
  name: "CustomerWallet",

  components: { Sidebar },

  data() {
    return {
      form: {
        userdetail: "",
        country: "",
        amount: "",
      },

      isBigScreen: false,
    };
  },

  computed: {
    ...mapGetters({
      transactions: "transaction/transactions",
      transaction: "transaction/transaction",
      user: "auth/user",
      wallet: "wallet/wallet",
    }),

    fullName: function () {
      return this.user.first_name + " " + this.user.last_name;
    },
  },

  methods: {
    ...mapActions("wallet", ["getWallet"]),

    ...mapActions("auth", ["logoutUser"]),

    logout() {
      this.logoutUser({ aksi: "logout" });
    },

    submitRequest() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("Form successfully submitted.");
        console.log(this.form);
      } else {
        // alert("Please fill out all the required field..!");
      }
    },

    submitSend() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("Form successfully submitted.");
        console.log(this.form);
      }
    },

    formatDate: function (params) {
      return moment(params).format("MMM. Do, YYYY");
    },

    openDetail: function (waybill) {
      if (waybill != "") {
        this.getSingleTransaction(waybill);
      }
    },

    toggled() {
      this.isBigScreen = !this.isBigScreen;
    },
  },

  created() {
    this.getWallet(this.user.id);
  },

  mounted() {
    $("#walletDataTable").DataTable();
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
