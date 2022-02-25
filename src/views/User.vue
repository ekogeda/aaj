<template>
  <div class="users">
    <transition-page>
      <router-view></router-view>
    </transition-page>

    <!-- <footer class="footer shadow mt-auto py-4">
      <div class="container">
        <div class="row">
          <div class="col">
            <router-link :to="{ name: 'Home' }" exact>
              <div class="bg-aaj d-flex round p-2">
                <img
                  class="image-fluid text-center m-auto"
                  src="/img/aaj-files/home.svg"
                  alt="Home"
                />
              </div>
            </router-link>
          </div>

          <div class="col">
            <div class="d-flex round p-2 bg-light">
              <img
                class="image-fluid text-center m-auto"
                src="/img/aaj-files/location.svg"
                alt="location"
              />
            </div>
          </div>

          <div class="col">
            <router-link :to="{ name: 'user.wallet' }" exact>
              <div class="d-flex round p-2">
                <img
                  class="image-fluid text-center m-auto"
                  src="/img/aaj-files/Wallet_m.svg"
                  alt="Wallet"
                />
              </div>
            </router-link>
          </div>

          <div class="col">
            <div class="d-flex round p-2">
              <img
                class="image-fluid text-center m-auto"
                src="/img/aaj-files/notification.svg"
                alt="notification"
              />
            </div>
          </div>

          <div class="col">
            <router-link :to="{ name: 'user.profile' }" exact>
              <div class="d-flex round p-2">
                <img
                  class="image-fluid text-center m-auto"
                  src="/img/aaj-files/profile.svg"
                  alt="profile"
                />
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </footer> -->

    <!-- <Footer :isAuth="authenticated" /> -->
  </div>
</template>

<script>
// import Footer from "@/components/Users/Footer.vue";
import { mapGetters, mapActions } from "vuex";
import TransitionPage from "@/components/Transitions/TransitionPage.vue";

export default {
  name: "User",
  components: { TransitionPage },

  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },

  methods: {
    ...mapActions("auth", ["logoutUser"]),

    logout() {
      this.logoutUser({ aksi: "logout" });
    },
  },

  // mounted() {
  //   this.getAuthUser();
  // },
};
</script>

<style scoped>
.round {
  border-radius: 25px;
}

/* .user {
  background: var(--aaj-primary);
  padding: 1rem;
} */

@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
}

@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */
}
</style>
