<template>
  <div class="login">
    <Navbar />

    <div class="container mt-3 mb-5">
      <div class="row">
        <div class="col-lg-4 col-md-8 col-sm-12 m-auto">
          <div class="card border-0 shadow p-3">
            <div class="card-body">
              <div class="animate__animated animate__fadeIn">
                <!-- <button class="btn btn-sm" @click="$router.back()">&#8592;</button> -->

                <p class="text-center fw-bold mb-4">
                  Get started with a free account
                </p>

                <p class="text-center text-secondary" style="font-size: 14px">
                  Continue with
                </p>

                <div class="d-flex align-items-center mb-3">
                  <div style="width: 95%" class="me-2">
                    <button class="btn btn-sm shadow w-100 text-secondary">
                      <img
                        src="/img/aaj-files/google.png"
                        alt="Google Icon"
                        class="me-1 d-inline-block"
                      />
                      Google
                    </button>
                  </div>
                  <div style="width: 95%">
                    <button class="btn btn-sm btn-primary shadow w-100">
                      <img
                        src="/img/aaj-files/facebook.png"
                        alt="Facebook Icon"
                        class="me-1 d-inline-block rounded-circle"
                      />
                      Facebook
                    </button>
                  </div>
                </div>

                <span class="divider my-3"></span> or
                <span class="divider"></span>

                <form @submit.prevent="register">
                  <div class="mb-2">
                    <label for="" class="form-label text-muted fs-sm"
                      >First Name</label
                    >
                    <input
                      type="text"
                      v-model="user.firstName"
                      id="firstName"
                      name="firstName"
                      class="form-control form-control-sm"
                      :class="{
                        'is-invalid': submitted && $v.user.firstName.$error,
                      }"
                      placeholder="Enter your first name"
                    />
                    <div
                      v-if="submitted && !$v.user.firstName.required"
                      class="invalid-feedback"
                    >
                      First Name is required
                    </div>
                  </div>

                  <div class="mb-2">
                    <label for="" class="form-label text-muted fs-sm"
                      >Last Name</label
                    >
                    <input
                      type="text"
                      v-model="user.lastName"
                      id="lastName"
                      name="lastName"
                      class="form-control form-control-sm"
                      :class="{
                        'is-invalid': submitted && $v.user.lastName.$error,
                      }"
                      placeholder="Enter your last name"
                    />
                    <div
                      v-if="submitted && !$v.user.lastName.required"
                      class="invalid-feedback"
                    >
                      Last Name is required
                    </div>
                  </div>

                  <div class="mb-2">
                    <label for="" class="form-label text-muted fs-sm"
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
                  </div>

                  <div class="mb-2">
                    <label for="" class="form-label text-muted fs-sm"
                      >Email</label
                    >
                    <input
                      type="email"
                      v-model="user.email"
                      id="email"
                      name="email"
                      class="form-control form-control-sm"
                      :class="{
                        'is-invalid': submitted && $v.user.email.$error,
                      }"
                      placeholder="Enter your email"
                    />
                    <div
                      v-if="submitted && $v.user.email.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.email.required"
                        >Email is required</span
                      >
                      <span v-if="!$v.user.email.email">Email is invalid</span>
                    </div>
                  </div>
                  <div class="mb-2">
                    <label for="" class="form-label text-muted fs-sm"
                      >Phone Number</label
                    >
                    <input
                      type="tel"
                      v-model="user.phone"
                      id="phone"
                      name="phone"
                      class="form-control form-control-sm"
                      :class="{
                        'is-invalid': submitted && $v.user.phone.$error,
                      }"
                      placeholder="Enter your phone number"
                    />
                    <div
                      v-if="submitted && $v.user.phone.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.phone.required"
                        >Phone is required</span
                      >
                    </div>
                  </div>

                  <div class="mb-2">
                    <label for="" class="form-label text-muted fs-sm"
                      >Password</label
                    >
                    <input
                      type="password"
                      v-model="user.password"
                      id="password"
                      name="password"
                      class="form-control form-control-sm"
                      :class="{
                        'is-invalid': submitted && $v.user.password.$error,
                      }"
                      placeholder="Enter your password"
                    />
                    <div
                      v-if="submitted && $v.user.password.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.password.required"
                        >Password is required</span
                      >
                      <span v-if="!$v.user.password.minLength"
                        >Password must be at least 6 characters</span
                      >
                    </div>
                  </div>
                  <div class="mb-2">
                    <label for="" class="form-label text-muted fs-sm"
                      >Confirm Password</label
                    >
                    <input
                      type="password"
                      v-model="user.confirmPassword"
                      id="confirmPassword"
                      name="confirmPassword"
                      class="form-control form-control-sm"
                      :class="{
                        'is-invalid':
                          submitted && $v.user.confirmPassword.$error,
                      }"
                      placeholder="Confirm your password"
                    />
                    <div
                      v-if="submitted && $v.user.confirmPassword.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.confirmPassword.required"
                        >Confirm Password is required</span
                      >
                      <span v-else-if="!$v.user.confirmPassword.sameAsPassword"
                        >Passwords must match</span
                      >
                    </div>
                  </div>

                  <div class="form-check mb-3">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      name="remember"
                      id="remember"
                      checked
                    />
                    <label class="text-muted" for="remember">
                      I agree to terms &amp; conditions
                    </label>
                  </div>

                  <button class="btn btn-sm btn-primary w-100">Sign up</button>
                </form>
              </div>

              <p
                class="mt-3 mb-4 text-start text-secondary"
                style="font-size: 14px"
              >
                Already have an account?
                <router-link :to="{ name: 'Login' }">Login here</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
/* eslint-disable */
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Home/Footer.vue";
import { mapActions, mapState } from "vuex";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "Registration",

  components: { Navbar, Footer },

  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        country: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      },
      submitted: false,
    };
  },

  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
    }),
  },

  methods: {
    ...mapActions("auth", ["addUser"]),

    register() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) return;
      this.addUser(this.user);
    },
  },

  validations: {
    user: {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      phone: { required },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
    },
  },
};
</script>

<style scoped>
span.divider {
  background: lightgrey;
  width: 45%;
  height: 1px;
  display: inline-block;
  vertical-align: middle;
}

.login-box .grid {
  display: grid;
  place-items: center;
}

.grid-child {
  width: 85%;
}
label {
  font-size: 14px;
}
input,
.btn {
  border-radius: 8px;
}

a {
  text-decoration: none;
}
</style>
