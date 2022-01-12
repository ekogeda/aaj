<template>
  <div style="display: grid; place-items: center; height: 90vh">
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-5 col-md-8 col-sm-12 m-auto">
          <div class="card border-0 shadow">
            <div class="card-body">
              <router-link :to="{ name: 'Login' }" class="btn btn-sm">
                &#8592;
              </router-link>

              <template v-if="isUsed == true">
                <h5 class="text-center">Reset password?</h5>
                <p class="text-muted text-center mb-5">Set up a new password</p>

                <form>
                  <div class="mb-3">
                    <label for="" class="form-label text-muted fs-sm"
                      >Enter New Password</label
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
                      placeholder="Create new password"
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
                  <div class="mb-3">
                    <label for="" class="form-label text-muted fs-sm"
                      >Confirm New Password</label
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
                      placeholder="Confirm new password"
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
                  <button
                    type="button"
                    class="btn btn-sm btn-primary w-100 my-3"
                    @click.prevent="resetPws"
                  >
                    Reset
                  </button>
                </form>
              </template>
              <template v-else-if="isFailed == true">
                <h6 class="text-danger text-center">Authentication failed</h6>
              </template>
              <template v-else>
                <div class="grid">
                  <div class="spinner-grow" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <samp class="fs-4">Please wait...</samp>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { required, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "ResetPassword",

  data() {
    return {
      user: {
        reset: 1,
        password: "",
        confirmPassword: "",
      },
      submitted: false,
      isUsed: false,
      isFailed: false,
    };
  },

  computed: {
    ...mapGetters({
      email: "auth/userEmail",
      token: "auth/token",
    }),
  },

  methods: {
    ...mapActions("auth", ["passwordConfirmation", "confirmAccount"]),

    resetPws() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) return;

      this.user.email = this.email;
      this.passwordConfirmation(this.user);
    },

    isConfirmed() {
      if (this.token == this.$route.query.user_token) {
        this.isUsed = true;
        this.confirmAccount({
          email: this.email,
          token: this.token,
          used: true,
        });
      } else {
        this.isFailed = true;
      }
    },
  },

  mounted() {
    setTimeout(() => {
      this.isConfirmed();
    }, 3000);
  },

  validations: {
    user: {
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
    },
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  place-items: center;
  height: 35vh;
  color: var(--aaj-primary);
}

.spinner-grow {
  width: 3rem;
  height: 3rem;
}

input,
.btn {
  border-radius: 8px;
}

.btn-primary:focus {
  box-shadow: none;
}
</style>
