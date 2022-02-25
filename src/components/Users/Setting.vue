<template>
  <div class="dashboard position-absolute start-0 end-0 h-100 overflow-auto">
    <div class="container-fluid">
      <Sidebar />

      <main :class="[isBigScreen ? 'big-screen' : 'small-screen']" id="main">
        <div class="container">
          <div class="card my-4 px-3 border-0 card-custom">
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
                </div>
              </nav>

              <a
                class="
                  text-decoration-none text-dark text-center
                  bg-light
                  fw-bold
                  d-inline-block
                  p-2
                  rounded
                "
                style="width: 150px"
                href="#"
                >Settings</a
              >

              <div class="security my-4">
                <h5>Security Information</h5>
                <div class="row g-3 mb-4">
                  <div class="col-md-4">
                    <a
                      href="#"
                      class="text-primary text-decoration-none"
                      style="font-size: 14px"
                      data-bs-toggle="modal"
                      data-bs-target="#newEmail"
                      >Change email address</a
                    >
                  </div>
                  <div class="col-md-4">
                    <a
                      href="#"
                      class="text-primary text-decoration-none"
                      style="font-size: 14px"
                      data-bs-toggle="modal"
                      data-bs-target="#newPassword"
                      >Change password</a
                    >
                  </div>
                  <div class="col-md-4">
                    <a
                      href="#"
                      class="text-primary text-decoration-none"
                      style="font-size: 14px"
                      data-bs-toggle="modal"
                      data-bs-target="#newSecurity"
                      >Change security question</a
                    >
                  </div>
                </div>
              </div>

              <div class="notifications">
                <h5 class="mt-5">Notifications</h5>
                <div class="row g-3 mb-4">
                  <div class="col-md-4">
                    <a
                      href="#"
                      class="text-primary text-decoration-none"
                      style="font-size: 14px"
                      >Activate phone number</a
                    >
                  </div>
                  <div class="col-md-4">
                    <a
                      href="#"
                      class="text-primary text-decoration-none"
                      style="font-size: 14px"
                      >Activate email</a
                    >
                  </div>
                  <div class="col-md-4"></div>

                  <div class="my-3"></div>

                  <div class="col-md-4">
                    <div class="form-check form-switch">
                      <label class="form-check-label" for="orders"
                        >Orders</label
                      >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="orders"
                        checked
                      />
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="form-check form-switch">
                      <label class="form-check-label" for="promotions"
                        >Promotions</label
                      >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="promotions"
                      />
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="form-check form-switch">
                      <label class="form-check-label" for="others"
                        >Others</label
                      >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="others"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-75 m-auto">
                <div class="card shadow border-0 bg-light">
                  <div class="card-body">
                    <p class="card-text text-center">
                      Turn off the buttons to disable notifications
                    </p>
                  </div>
                </div>
              </div>

              <div class="notifications mb-5">
                <h5 class="mt-5">Shipping address</h5>
                <button
                  class="btn btn-sm btn-primary my-3"
                  data-bs-toggle="modal"
                  data-bs-target="#newAddress"
                >
                  Add a new address
                </button>
                <div class="row g-3 my-4">
                  <div class="col-md-5">
                    <div class="card border-0 shadow">
                      <div class="card-body">
                        <div class="d-flex align-items-center">
                          <img
                            src="/img/aaj-files/avatar.png"
                            class="img-fluid d-block me-4"
                            width="25px"
                            alt="Avatar"
                          />
                          <h6 class="card-title mb-0" style="font-size: 1rem">
                            {{ fullName }}, {{ user.phone }}
                          </h6>
                        </div>

                        <div class="d-flex align-items-center my-3">
                          <img
                            src="/img/aaj-files/anchor.png"
                            class="img-fluid d-block me-4"
                            alt="Location"
                          />
                          <p class="card-title mb-0" style="font-size: 1rem">
                            Address
                          </p>
                        </div>

                        <p class="card-text ms-5">
                          Note: To receive your package, <br />
                          please update this address
                        </p>

                        <div
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            ms-5
                          "
                        >
                          <a href="#" class="text-decoration-none text-primary"
                            >Edit</a
                          >
                          <a href="#" class="text-decoration-none text-danger"
                            >Delete</a
                          >
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

    <!-- Modal -->
    <div
      class="modal fade"
      id="newAddress"
      tabindex="-1"
      aria-labelledby="newAddressLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newAddressLabel">
              New Shipping Address
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3 col-md-12">
                <textarea
                  id="update-address"
                  cols="30"
                  rows="10"
                  class="form-control"
                ></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-sm btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-sm btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="newEmail"
      tabindex="-1"
      aria-labelledby="newEmailLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newEmailLabel">Change Email</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="row">
                <div class="mb-3 col-md-12">
                  <label class="form-label text-muted fw-normal">Email</label>
                  <input
                    type="email"
                    v-model="userSet.email"
                    name="email"
                    :class="{
                      'is-invalid': submitted && $v.userSet.email.$error,
                    }"
                    class="form-control form-control-sm"
                    placeholder="Enter your email"
                  />
                  <div
                    v-if="submitted && $v.userSet.email.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.userSet.email.required"
                      >Email is required</span
                    >
                    <span v-if="!$v.userSet.email.email">Email is invalid</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-sm btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-sm btn-primary"
              @click.prevent="changeEmail"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="newPassword"
      tabindex="-1"
      aria-labelledby="newPasswordLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newPasswordLabel">Change Password</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="row">
                <div class="mb-3">
                  <label for="" class="form-label text-muted fs-sm"
                    >Enter New Password</label
                  >
                  <input
                    type="password"
                    v-model="userSet.password"
                    id="password"
                    name="password"
                    class="form-control form-control-sm"
                    :class="{
                      'is-invalid': submitted && $v.userSet.password.$error,
                    }"
                    placeholder="Create new password"
                  />
                  <div
                    v-if="submitted && $v.userSet.password.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.userSet.password.required"
                      >Password is required</span
                    >
                    <span v-if="!$v.userSet.password.minLength"
                      >Password must be at least 6 characters</span
                    >
                  </div>
                </div>
                <div class="mb-3">
                  <label for="" class="form-label text-muted fs-sm"
                    >Confirm New Password</label
                  >
                  <input
                    type="password"
                    v-model="userSet.confirmPassword"
                    id="confirmPassword"
                    name="confirmPassword"
                    class="form-control form-control-sm"
                    :class="{
                      'is-invalid':
                        submitted && $v.userSet.confirmPassword.$error,
                    }"
                    placeholder="Confirm new password"
                  />
                  <div
                    v-if="submitted && $v.userSet.confirmPassword.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.userSet.confirmPassword.required"
                      >Confirm Password is required</span
                    >
                    <span v-else-if="!$v.userSet.confirmPassword.sameAsPassword"
                      >Passwords must match</span
                    >
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-sm btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-sm btn-primary"
              @click.prevent="resetPws"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="newSecurity"
      tabindex="-1"
      aria-labelledby="newSecurityLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newSecurityLabel">
              Change security question
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="row">
                <div class="mb-3 col-md-12">
                  <p>Security Question : What's your favorite colour ?</p>
                  <div class="mb-3">
                    <label for="security" class="form-label"
                      >Security question</label
                    >
                    <select class="form-control" id="security">
                      <option>Select answer</option>
                      <option>What's the name of your favorite uncle ?</option>
                      <option>Where did you meet your spouse ?</option>
                      <option>What's your favorite colour ?</option>
                      <option>What's your favorite food ?</option>
                      <option>What's your hometown ?</option>
                      <option>What's the name of your best friend ?</option>
                      <option>What's your favorite book ?</option>
                    </select>
                  </div>

                  <div class="mb-3 col-md-12">
                    <label for="answer" class="form-label">Answer</label>
                    <input
                      type="text"
                      id="answer"
                      name="answer"
                      class="form-control form-control-sm"
                      placeholder="Enter your answer"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-sm btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-sm btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Users/Sidebar.vue";
import { mapGetters, mapActions } from "vuex";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
  name: "Setting",

  components: { Sidebar },

  data() {
    return {
      first_name: "",
      last_name: "",
      country: "",
      phone: "",
      password: "",
      confirmPassword: "",
      refcode: "",

      userSet: {
        email: "",

        reset: 1,
        password: "",
        confirmPassword: "",
      },

      submitted: false,
      isBigScreen: false,
    };
  },

  computed: {
    ...mapGetters({
      user: "auth/user",
    }),

    fullName: function () {
      return this.user.first_name + " " + this.user.last_name;
    },
  },

  methods: {
    ...mapActions("auth", [
      "updateUser",
      "passwordConfirmation",
      "passwordReset",
      "logoutUser",
    ]),

    resetPws() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) return;

      this.userSet.email = this.user.email;
      this.passwordConfirmation(this.userSet);
    },

    changeEmail() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) return;

      this.updateUser(this.userSet);
    },

    toggled() {
      this.isBigScreen = !this.isBigScreen;
    },

    logout() {
      this.logoutUser({ aksi: "logout" });
    },
  },

  validations: {
    userSet: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
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
