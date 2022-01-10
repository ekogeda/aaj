<template>
  <div>
    <div class="login" style="display: grid; place-items: center; height: 90vh">
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-5 col-md-8 col-sm-12 m-auto">
            <div class="card border-0 shadow">
              <div class="card-body">
                <button class="btn" @click="$router.back()">&#8592;</button>

                <h5 class="text-center my-4">Let's verify it's you</h5>

                <div class="text-center">
                  <small class="d-block text-muted">
                    Input the 6 digits code that has been sent to
                  </small>
                  <small class="d-block text-muted mb-5"
                    >{{ email ? email : "Email not available" }}
                  </small>
                </div>

                <div class="mb-3">
                  <input
                    type="number"
                    class="form-control d-none"
                    v-model="otp"
                  />

                  <input
                    type="number"
                    class="form-control"
                    v-model.trim.lazy.number="$v.confirmOtp.$model"
                    required="required"
                    :class="{
                      'is-invalid': $v.confirmOtp.$error,
                    }"
                    name="verify"
                    placeholder="Enter your OTP"
                  />

                  <div v-if="$v.confirmOtp.$error" class="invalid-feedback">
                    <span v-if="!$v.confirmOtp.required">
                      OTP code is required.
                    </span>
                    <span v-else-if="!$v.confirmOtp.minLength">
                      OTP code must have at least
                      {{ $v.confirmOtp.$params.minLength.min }} digits.
                    </span>
                    <span v-else-if="!$v.confirmOtp.sameAsOtp">
                      OTP code not matched.
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  @click.prevent="verifyOtp"
                  class="btn btn-primary w-100 my-2"
                >
                  Verify Account
                </button>

                <p class="mb-5 text-start fw-normal">
                  Didn't get OTP?
                  <button
                    @click="resendOtp"
                    class="btn btn-sm text-aaj fst-italic"
                  >
                    Resend
                  </button>
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
import { mapGetters, mapActions } from "vuex";
import { required, sameAs, minLength } from "vuelidate/lib/validators";
export default {
  name: "VerifyAccount",

  data() {
    return {
      otp: "",
      confirmOtp: "",
    };
  },

  computed: {
    ...mapGetters({
      email: "auth/userEmail",
      otp_code: "auth/otp",
    }),
  },

  methods: {
    ...mapActions("auth", ["confirmAccount"]),

    verifyOtp() {
      this.$v.$touch();
      if (this.$v.$invalid) return;

      this.confirmAccount({ email: this.email });
    },

    resendOtp() {
      this.confirmAccount({ resend: 1, email: this.email });
    },
  },

  mounted() {
    this.otp = this.otp_code;
  },

  validations: {
    confirmOtp: { required, minLength: minLength(6), sameAsOtp: sameAs("otp") },
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
