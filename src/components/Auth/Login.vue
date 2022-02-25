<template>
  <div>
    <Navbar />

    <div class="login mt-3 mb-5" style="display: grid; place-items: center">
      <!-- <div class="on-boarding" :class="{ show: isSkip }">
      <LoadingScreen :isLoading="isLoading" />

      <main v-if="!isLoading">
        <div v-show="step === 1">
          <div class="on-board-shade animate__animated animate__fadeIn">
            <div class="flex text-center">
              <div class="on-board-top">
                <img src="/img/aaj-files/img1.svg" />
                <h5 class="mt-5">
                  Choose a delivery option <br />
                  directly from the app
                </h5>
              </div>

              <div class="on-board-bottom w-100">
                <img src="/img/aaj-files/in-1.png" class="mb-3" />

                <button
                  class="
                    btn btn-primary
                    fw-bold
                    w-75
                    d-block
                    m-auto
                    mb-3
                    text-capitalize
                  "
                  @click.prevent="next()"
                >
                  Next
                </button>

                <a
                  href="#"
                  class="text-decoration-none text-dark"
                  @click="skip()"
                  >Skip</a
                >
              </div>
            </div>
          </div>
        </div>

        <div v-show="step === 2">
          <div class="on-board-shade animate__animated animate__fadeIn">
            <div class="flex text-center">
              <div class="on-board-top">
                <img src="/img/aaj-files/img2.svg" />
                <h5 class="mt-5">
                  Choose a delivery option <br />
                  directly from the app
                </h5>
              </div>

              <div class="on-board-bottom w-100">
                <img src="/img/aaj-files/in-2.png" class="mb-3" />
                <button
                  class="
                    btn btn-primary
                    fw-bold
                    w-75
                    d-block
                    m-auto
                    mb-3
                    text-capitalize
                  "
                  @click.prevent="next()"
                >
                  Next
                </button>

                <a
                  href="#"
                  class="text-decoration-none text-dark"
                  @click="skip()"
                  >Skip</a
                >
              </div>
            </div>
          </div>
        </div>

        <div v-show="step === 3">
          <div class="on-board-shade animate__animated animate__fadeIn">
            <div class="flex text-center">
              <div class="on-board-top">
                <img src="/img/aaj-files/img3.svg" />
                <h5 class="mt-5">
                  Have your goods delivered to <br />
                  tou at your preferred location
                </h5>
              </div>

              <div class="on-board-bottom w-100">
                <img src="/img/aaj-files/in-3.png" class="mb-3" />
                <button
                  class="
                    btn btn-primary
                    fw-bold
                    w-75
                    d-block
                    m-auto
                    mb-3
                    text-capitalize
                  "
                  @click.prevent="next('skip')"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div> -->

      <!-- <div class="login-box" :class="{ show: !isSkip }"> -->
      <div class="container mb-3">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12 m-auto">
            <div class="card border-0 shadow p-3">
              <div class="card-body">
                <div class="animate__animated animate__fadeIn">
                  <div class="d-flex">
                    <router-link
                      :to="{ name: 'Home' }"
                      class="fs-5 text-dark"
                      exact
                      >&#8592;</router-link
                    >
                    <router-link
                      :to="{ name: 'VerifyAccount' }"
                      class="ms-auto d-block fst-italic"
                      style="font-size: 14px"
                      exact
                      >Verify Account</router-link
                    >
                  </div>

                  <p class="text-center fw-bold my-4">Login to your account</p>
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

                  <form @submit.prevent="loginForm">
                    <div class="mb-2">
                      <label for="" class="form-label text-muted">Email</label>
                      <input
                        type="email"
                        v-model="user.email"
                        name="email"
                        :class="{
                          'is-invalid': submitted && $v.user.email.$error,
                        }"
                        class="form-control form-control-sm"
                        placeholder="Enter your email"
                      />
                      <div
                        v-if="submitted && $v.user.email.$error"
                        class="invalid-feedback"
                      >
                        <span v-if="!$v.user.email.required"
                          >Email is required</span
                        >
                        <span v-if="!$v.user.email.email"
                          >Email is invalid</span
                        >
                      </div>
                    </div>

                    <div class="mb-2">
                      <label for="" class="form-label text-muted"
                        >Password</label
                      >
                      <input
                        type="password"
                        v-model="user.password"
                        name="password"
                        :class="{
                          'is-invalid': submitted && $v.user.password.$error,
                        }"
                        class="form-control form-control-sm"
                        placeholder="Enter your password"
                      />
                      <div
                        v-if="submitted && $v.user.password.$error"
                        class="invalid-feedback"
                      >
                        <span v-if="!$v.user.password.required"
                          >Password is required</span
                        >
                      </div>
                    </div>

                    <div
                      class="
                        d-flex
                        justify-content-between
                        align-items-center
                        fs-sm
                        mb-3
                      "
                    >
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          name="remember"
                          id="remember"
                          checked
                        />
                        <label
                          class="text-muted"
                          for="remember"
                          style="font-size: 14px"
                        >
                          Remember me</label
                        >
                      </div>
                      <router-link
                        :to="{ name: 'ForgotPassword' }"
                        style="font-size: 14px"
                      >
                        <em>Forgot password?</em>
                      </router-link>
                    </div>

                    <button type="submit" class="btn btn-sm btn-primary w-100">
                      Login
                    </button>
                  </form>
                  <p
                    class="mt-3 mb-4 text-start text-secondary"
                    style="font-size: 14px"
                  >
                    Don't have an account?
                    <router-link :to="{ name: 'Signup' }"
                      >Get Started</router-link
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
// import LoadingScreen from "@/components/LoadingScreen";
// import Splash from "@/components/Splash/OnBoard.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Home/Footer.vue";
import { mapActions, mapState } from "vuex";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Login",
  components: { Navbar, Footer },

  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      submitted: false,

      step: 1,
      isLoading: false,
      isSkip: false,
    };
  },

  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
    }),
  },

  methods: {
    ...mapActions("auth", ["loginUser"]),

    loginForm() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) return;

      this.loginUser(this.user);
    },

    prev() {
      this.step--;
    },
    next(params) {
      if (params == "skip") {
        this.isSkip = true;
      }

      this.step++;
    },
    skip() {
      this.isSkip = true;
    },
  },

  validations() {
    return {
      user: {
        email: { required, email },
        password: { required },
      },
      submitted: false,
    };
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

.on-board-bottom img {
  width: 90px;
  height: 8px;
}

.show {
  display: none;
}

.flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
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
