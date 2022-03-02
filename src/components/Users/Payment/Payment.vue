<template>
  <div>
    <section>
      <div class="container">
        <form>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="" class="form-label">First Name</label>
              <input
                type="text"
                class="form-control border-0 border-custom"
                disabled
                v-model.trim="form.firstName"
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="" class="form-label">Last Name</label>
              <input
                type="text"
                class="form-control border-0 border-custom"
                disabled
                v-model.trim="form.lastName"
              />
            </div>
          </div>

          <div class="mb-3">
            <label for="" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control border-0 border-custom"
              v-model.trim.lazy="form.email"
              placeholder="Enter your email address"
            />
          </div>

          <div class="mb-3">
            <label for="" class="form-label">Amount:</label>
            <input
              type="number"
              class="form-control border-0 border-custom"
              v-model.trim.lazy="form.amount"
              placeholder="Enter amount to top-up"
            />
          </div>
        </form>
      </div>
    </section>

    <paystack
      :amount="form.amount * 100"
      :email="form.email"
      :first_name="form.firstName"
      :last_name="form.lastName"
      :paystackkey="paystackDetails['PUBLIC_KEY']"
      :reference="reference"
      :callback="processPayment"
      :close="paystackDetails['close']"
      class="btn btn-primary my-4"
    >
      Topup wallet
    </paystack>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Paystack from "vue-paystack";

export default {
  name: "MakePayment",
  components: { Paystack },

  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        amount: 0,
        topUp: 1,
      },
    };
  },

  computed: {
    ...mapGetters({
      user: "auth/user",
      paystackDetails: "wallet/get_paystack_details",
    }),

    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    },
  },

  methods: {
    ...mapActions("wallet", ["getWallet", "updateWallet"]),

    processPayment: function (response) {
      this.form.customerId = this.user.id;
      this.form.data = response;
      this.updateWallet(this.form);
    },
    close: () => {
      alert("You closed checkout page");
    },
  },

  mounted() {
    this.form.firstName = this.user.first_name;
    this.form.lastName = this.user.last_name;
  },
};
</script>

<style scoped>
.form-control {
  padding: 0.75rem 0.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: hsl(0, 0%, 44%);
  border-radius: 0;
}

.form-label {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #4f4f4f;
}

.border-custom {
  border-bottom: 1px solid #ccc !important;
  border-radius: none;
}

.border-custom:focus {
  border-bottom: 1px solid #333 !important;
}

.payButton {
  width: 200px;
  margin: 0 auto;
  display: grid;
  border-radius: 16px;
}

.btn-primary:focus {
  box-shadow: none;
}
</style>
