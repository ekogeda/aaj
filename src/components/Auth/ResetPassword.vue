<template>
  <div style="display: grid; place-items: center; height: 90vh">
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-5 col-md-8 col-sm-12 m-auto">
          <div class="card border-0 shadow">
            <div class="card-body">
              <button class="btn" @click="$router.back()">&#8592;</button>

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
                      'is-invalid': submitted && $v.user.confirmPassword.$error,
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
                  Recover
                </button>
              </form>
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
    };
  },

  computed: {
    ...mapGetters({
      email: "auth/userEmail",
    }),
  },

  methods: {
    ...mapActions("auth", ["passwordConfirmation"]),

    resetPws() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) return;

      this.user.email = this.email;
      this.passwordConfirmation(this.user);
    },
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
input,
.btn {
  border-radius: 8px;
}
.btn-primary:focus {
  box-shadow: none;
}
</style>
