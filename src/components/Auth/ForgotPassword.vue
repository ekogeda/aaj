<template>
  <div class="login">
    <div style="display: grid; place-items: center; height: 90vh">
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-5 col-md-8 col-sm-12 m-auto">
            <div class="card border-0 shadow">
              <div class="card-body">
                <button class="btn" @click="$router.back()">&#8592;</button>

                <h5 class="text-center">Forgot password?</h5>

                <p class="text-muted text-center mb-5">
                  Enter your email and a reset link will be sent to you
                </p>

                <div class="mb-3">
                  <label class="form-label text-muted fw-normal">Email</label>
                  <input
                    type="email"
                    v-model="email"
                    name="email"
                    :class="{
                      'is-invalid': submitted && $v.email.$error,
                    }"
                    class="form-control form-control-sm"
                    placeholder="Enter your email"
                  />
                  <div
                    v-if="submitted && $v.email.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.email.required">Email is required</span>
                    <span v-if="!$v.email.email">Email is invalid</span>
                  </div>
                </div>

                <button
                  type="button"
                  class="btn btn-sm btn-primary w-100 my-3"
                  @click.prevent="reset"
                >
                  Reset password
                </button>

                <p class="my-3 text-start">
                  <router-link :to="{ name: 'Login' }">Back to login</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "ForgotPassword",

  data() {
    return {
      email: "",
      submitted: false,
    };
  },

  methods: {
    ...mapActions("auth", ["passwordReset"]),

    reset() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) return;

      this.passwordReset({ recover: 1, email: this.email });
    },
  },

  validations() {
    return {
      email: { required, email },
    };
  },
};
</script>

<style scoped>
input,
.btn {
  border-radius: 8px;
}
.btn-primary:focus {
  box-shadow: none;
}
</style>
