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
                  <a class="navbar-brand" href="#">Dashboard</a>

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
                            src="/img/aaj/admin.png"
                            class="img-thumbnail rounded-circle me-2"
                            alt="Avatar"
                            width="30px"
                          />
                          <p class="mb-0">{{ fullName }}</p>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

              <div class="row g-3 my-4">
                <div class="col-md-9">
                  <div class="d-flex align-items-center">
                    <div class="me-2" style="width: 30px">
                      <img
                        src="/img/aaj-files/hi.png"
                        width="100%"
                        alt="hi five"
                      />
                    </div>
                    <p class="mb-0">Welcome {{ user.first_name }}</p>
                  </div>
                </div>
                <div class="col-md-3">
                  <router-link
                    :to="{ name: 'user.transaction' }"
                    class="btn btn-sm btn-primary w-100"
                    exact
                  >
                    Create shipment
                  </router-link>
                </div>
              </div>

              <div class="row g-3 my-4 comp">
                <div class="col-lg-3 col-md-6">
                  <div class="card shadow border-0 h-100">
                    <div
                      class="card-body d-flex justify-content-between align-items-center"
                    >
                      <div class="text">
                        <p class="card-text text-secondary">All Orders</p>
                        <h6 class="card-title">50</h6>
                      </div>
                      <img
                        src="/img/aaj-files/comp1.png"
                        class="img-fluid"
                        alt="components"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6">
                  <div class="card shadow border-0 h-100">
                    <div
                      class="card-body d-flex justify-content-between align-items-center"
                    >
                      <div class="text">
                        <p class="card-text text-secondary">Process</p>
                        <h6 class="card-title">50</h6>
                      </div>
                      <img
                        src="/img/aaj-files/comp2.png"
                        class="img-fluid"
                        alt="components"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6">
                  <div class="card shadow border-0 h-100">
                    <div
                      class="card-body d-flex justify-content-between align-items-center"
                    >
                      <div class="text">
                        <p class="card-text text-secondary">Pending</p>
                        <h6 class="card-title">50</h6>
                      </div>
                      <img
                        src="/img/aaj-files/comp3.png"
                        class="img-fluid"
                        alt="components"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6">
                  <div class="card shadow border-0 h-100">
                    <div
                      class="card-body d-flex justify-content-between align-items-center"
                    >
                      <div class="text">
                        <p class="card-text text-secondary">Delivered</p>
                        <h6 class="card-title">50</h6>
                      </div>
                      <img
                        src="/img/aaj-files/comp4.png"
                        class="img-fluid"
                        alt="components"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="row g-3 my-4">
                <div class="col-md-6 col-sm-12">
                  <div class="card shadow border-0 h-100">
                    <div class="card-body">
                      <h5 class="card-title">Transactions</h5>
                      <apexchart
                        width="100%"
                        height="350"
                        type="bar"
                        :options="options"
                        :series="series"
                      ></apexchart>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12">
                  <div class="card shadow border-0 h-100">
                    <div class="card-body">
                      <h5 class="card-title">Recent shipments</h5>
                      <div class="table-responsive">
                        <table class="table table-hover">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Tracking ID</th>
                              <th scope="col">Name</th>
                              <th scope="col">Status</th>
                              <th scope="col">Option</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="trans in transactions" :key="trans.id">
                              <th scope="row">1</th>
                              <td>{{ trans.waybill_no }}</td>
                              <td>{{ user.first_name }}</td>
                              <td>
                                <span class="p-1 rounded delivered">
                                  Processing
                                </span>
                              </td>
                              <td>
                                <router-link
                                  :to="{ name: 'Track' }"
                                  class="p-1 rounded text-light bg-aaj text-decoration-none"
                                >
                                  Track
                                </router-link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="container">
                  <div class="card border-0 shadow">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-7 col-sm-12 mt-5">
                          <div class="row">
                            <div class="col-md-6">
                              <apexchart
                                type="radialBar"
                                width="100%"
                                :options="chartOptionsR1"
                                :series="seriesR1"
                              ></apexchart>
                            </div>
                            <div class="col-md-6">
                              <apexchart
                                type="radialBar"
                                width="100%"
                                :options="chartOptionsR2"
                                :series="seriesR2"
                              ></apexchart>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-5 col-sm-12">
                          <div class="h-100 w-100">
                            <h5 class="card-title">Statistics</h5>
                            <apexchart
                              class="w-custom"
                              type="donut"
                              :options="chartOptions"
                              :series="seriesD"
                            ></apexchart>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Users/Sidebar.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Dashboard",

  components: { Sidebar },

  data() {
    return {
      series: [
        {
          name: "Transactions",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 45, 22, 18, 95],
        },
      ],
      options: {
        legend: {
          show: false,
        },
        chart: {
          id: "basic-bar",
        },
        dataLabels: {
          enabled: true,
        },
        plotOptions: {
          bar: {
            distributed: true,
          },
        },

        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },

      seriesD: [44, 17, 15],
      chartOptions: {
        legend: {
          show: true,
          position: "left",
          horizontalAlign: "center",
        },
        plotOptions: {
          pie: {
            startAngle: 0,
            endAngle: 360,
            expandOnClick: true,
            donut: {
              labels: {
                show: true,
                name: {
                  show: true,
                  offsetY: -10,
                  formatter: function (val) {
                    return val;
                  },
                },
                value: {
                  show: true,
                  fontWeight: 700,
                  offsetY: 5,
                  formatter: function (val) {
                    return val + "%";
                  },
                },
              },
            },
          },
        },
        colors: ["#FE6802", "#00B140", "#F90005"],
        labels: ["Pending", "Delivered", "Cancelled"],
      },

      seriesR1: [70],
      chartOptionsR1: {
        chart: {
          type: "radialBar",
        },
        colors: ["#00B140"],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "60%",
            },
          },
        },
        labels: ["Paid Bills"],
      },

      seriesR2: [20],
      chartOptionsR2: {
        chart: {
          type: "radialBar",
        },
        colors: ["#FE6802"],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "60%",
            },
          },
        },
        labels: ["On-Route"],
      },

      isBigScreen: false,
      isSmallScreen: false,
    };
  },

  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      transactions: "transaction/transactions",
      transaction: "transaction/transaction",
    }),

    fullName: function () {
      return this.user.first_name + " " + this.user.last_name;
    },
  },

  methods: {
    ...mapActions("auth", ["logoutUser"]),
    ...mapActions("transaction", ["getTransactions"]),

    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },

    logout() {
      this.logoutUser({ aksi: "logout" });
    },

    toggled() {
      this.isBigScreen = !this.isBigScreen;
      this.isSmallScreen = !this.isSmallScreen;
    },
  },

  created() {
    this.getTransactions(this.user.id);
  },
};
</script>

<style scoped>
.dashboard {
  background: #f5f5f5;
}
.w-custom {
  width: 75%;
}
.pending {
  background: hsl(3, 100%, 81%);
  color: #ff7875;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
}

.delivered {
  background: hsla(142, 44%, 70%, 0.361);
  color: #2dc071;
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
  .big-screen {
    padding-left: 15rem;
  }
}

@media (min-width: 1024px) {
  .w-custom {
    width: 75%;
  }
  .sm-viewport {
    flex-direction: row;
  }
}
</style>
