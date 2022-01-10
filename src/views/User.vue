<template>
  <div class="users">
    <transition-page>
      <router-view></router-view>
    </transition-page>
  </div>
</template>

<script>
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
