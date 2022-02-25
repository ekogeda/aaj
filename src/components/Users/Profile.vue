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
                  <a class="navbar-brand" href="#">Profile</a>

                  <button
                    class="
                      btn btn-outline-primary
                      shadow-none
                      border-0
                      d-lg-none
                    "
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
                          class="
                            nav-link
                            d-flex
                            justify-content-center
                            align-items-center
                          "
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

              <div class="row g-3 my-4">
                <div class="col-lg-8 col-md-12 m-auto">
                  <div class="card border-radius shadow border-0">
                    <div
                      class="
                        card-header
                        border-radius border-0
                        bg-white
                        d-flex
                        justify-content-between
                        align-items-center
                      "
                    >
                      <h5 class="fw-normal mb-0">Edit Profile</h5>
                      <p class="text-muted mb-0">
                        User ID <span>1234567</span>
                      </p>
                    </div>

                    <hr class="mt-0 m-auto" style="width: 95%" />

                    <div class="m-auto my-3" style="width: 100px">
                      <img
                        class="img-thumbnail rounded-circle"
                        src="/img/aaj/admin.png"
                        alt="profile"
                      />
                    </div>
                    <div class="card-body">
                      <form @submit.prevent="update_user">
                        <div class="row">
                          <div class="mb-3 col-md-6">
                            <label for="first_name" class="form-label"
                              >First Name</label
                            >
                            <input
                              type="text"
                              v-model="user.first_name"
                              id="first_name"
                              name="first_name"
                              class="form-control form-control-sm"
                              placeholder="Enter your first name"
                            />
                          </div>

                          <div class="mb-3 col-md-6">
                            <label for="last_name" class="form-label"
                              >Last Name</label
                            >
                            <input
                              type="text"
                              v-model="user.last_name"
                              id="last_name"
                              name="last_name"
                              class="form-control form-control-sm"
                              placeholder="Enter your last name"
                            />
                          </div>

                          <div class="mb-3 col-lg-6 col-md-12">
                            <label for="email" class="form-label">Email</label>
                            <input
                              type="email"
                              v-model="user.email"
                              id="email"
                              name="email"
                              class="form-control form-control-sm"
                              placeholder="Enter your email"
                            />
                          </div>

                          <div class="mb-3 col-lg-6 col-md-12">
                            <label for="phone" class="form-label">Phone</label>
                            <vue-phone-number-input
                              default-country-code="NG"
                              v-model="user.phone"
                            />
                          </div>

                          <!-- <div class="mb-3 col-md-6">
                            <label for="country" class="form-label"
                              >Country</label
                            >
                            <input
                              type="text"
                              v-model="user.country"
                              id="country"
                              name="country"
                              class="form-control form-control-sm"
                              placeholder="Enter your country"
                            />
                          </div> -->

                          <h5 class="fw-normal mt-3">Change Password</h5>

                          <hr class="mt-0 m-auto my-3" style="width: 96%" />

                          <div class="mb-3 col-md-6">
                            <label for="password" class="form-label"
                              >Password</label
                            >
                            <input
                              type="password"
                              v-model="user.password"
                              id="password"
                              name="password"
                              class="form-control form-control-sm"
                              placeholder="Enter your password"
                            />
                          </div>

                          <div class="mb-3 col-md-6">
                            <label for="confirmPassword" class="form-label"
                              >Confirm Password</label
                            >
                            <input
                              type="password"
                              v-model="user.confirmPassword"
                              id="confirmPassword"
                              name="confirmPassword"
                              class="form-control form-control-sm"
                              placeholder="Confirm your password"
                            />
                          </div>
                        </div>

                        <button
                          class="
                            btn btn-sm btn-primary
                            d-block
                            m-auto
                            my-3
                            border-radius
                            btn-update
                          "
                        >
                          Update
                        </button>
                      </form>
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
  name: "Profile",

  components: { Sidebar },

  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        country: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        refcode: "",
      },

      submitted: false,
      isEdit: false,
      isBigScreen: false,
    };
  },

  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),

    fullName: function () {
      return this.user.first_name + " " + this.user.last_name;
    },
  },

  methods: {
    ...mapActions("auth", ["updateUser", "logoutUser"]),

    logout() {
      this.logoutUser({ aksi: "logout" });
    },

    edit() {
      this.isEdit = !this.isEdit;
    },

    update_user() {
      this.submitted = true;
      this.updateUser(this.user);
    },

    toggled() {
      this.isBigScreen = !this.isBigScreen;
    },
  },
};
</script>

<style scoped>
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

.w-custom {
  width: 30%;
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
  .sm-viewport {
    flex-direction: row;
  }
}
</style>
