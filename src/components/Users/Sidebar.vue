<template>
  <div>
    <div
      class="offcanvas offcanvas-start shadow border-0"
      :class="[isBigScreen ? 'show' : '']"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabindex="-1"
      id="dashboardSide"
    >
      <div class="offcanvas-header">
        <router-link to="/" class="w-custom d-block m-auto my-3"
          ><img src="@/assets/logo.png" alt="AAJ-Express" class="img-fluid" />
        </router-link>
      </div>

      <hr class="w-75 m-auto" />

      <div class="offcanvas-body justify-content-between">
        <ul class="nav flex-column">
          <li class="nav-item w-90 mb-2">
            <router-link
              :to="{ name: 'user.dashboard' }"
              class="nav-link ps-4 active-link d-flex align-items-center"
              exact
            >
              <span class="bi bi-columns-gap fs-5 d-block me-1"></span>
              Dashboard
            </router-link>
          </li>

          <li class="nav-item w-90 mb-2">
            <router-link
              :to="{ name: 'user.profile' }"
              class="nav-link ps-4 d-flex align-items-center"
              exact
            >
              <span class="bi bi-person-circle fs-5 d-block me-1"></span>
              Profile
            </router-link>
          </li>

          <li class="nav-item w-90 mb-2">
            <router-link
              :to="{ name: 'user.order' }"
              class="nav-link ps-4 d-flex align-items-center"
              exact
            >
              <span class="bi bi-truck fs-5 d-block me-1"></span>
              Orders
            </router-link>
          </li>

          <li class="nav-item w-90 mb-2">
            <router-link
              :to="{ name: 'TrackItems' }"
              class="nav-link ps-4 d-flex align-items-center"
              exact
            >
              <span class="bi bi-broadcast-pin fs-5 d-block me-1"></span>
              Tracking
            </router-link>
          </li>

          <li class="nav-item w-90 mb-2">
            <router-link
              :to="{ name: 'user.rate' }"
              class="nav-link ps-4 d-flex align-items-center"
              exact
            >
              <span class="bi bi-calculator fs-5 d-block me-1"></span>
              Get Estimate
            </router-link>
          </li>

          <li class="nav-item w-90 mb-2">
            <a href="#" class="nav-link ps-4 d-flex align-items-center">
              <span class="bi bi-graph-up-arrow fs-5 d-block me-1"></span>
              Report
            </a>
          </li>

          <li class="nav-item w-90 mb-2">
            <router-link
              :to="{ name: 'user.transaction' }"
              class="nav-link ps-4 d-flex align-items-center"
              exact
            >
              <span class="bi bi-boxes fs-5 d-block me-1"></span>
              Transaction
            </router-link>
          </li>

          <li class="nav-item w-90 mb-2">
            <a href="#" class="nav-link ps-4 d-flex align-items-center">
              <span class="bi bi-bag fs-5 d-block me-1"></span>
              Shopping
            </a>
          </li>

          <li class="nav-item w-90 mb-2">
            <router-link
              :to="{ name: 'user.wallet' }"
              class="nav-link ps-4 d-flex align-items-center"
              exact
            >
              <span class="bi bi-wallet d-block fs-5 me-1"></span>
              Wallet
            </router-link>
          </li>

          <li class="nav-item w-90 mb-2">
            <router-link
              :to="{ name: 'user.setting' }"
              class="nav-link ps-4 d-flex align-items-center"
              exact
            >
              <span class="bi bi-gear fs-5 d-block me-1"></span>
              Settings
            </router-link>
          </li>

          <a
            href="#"
            class="nav-link ps-4 d-flex align-items-center text-danger"
            @click.prevent="logout"
          >
            <span v-if="user" class="bi bi-power d-block fs-5 me-1"></span>
            Logout
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Sidebar",

  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),

    fullName: function () {
      return this.user.first_name + " " + this.user.last_name;
    },
  },

  data() {
    return {
      isBigScreen: false,
      isSmallScreen: false,
    };
  },

  methods: {
    ...mapActions("auth", ["logoutUser"]),

    logout() {
      this.logoutUser({ aksi: "logout" });
    },

    toggled() {
      this.isBigScreen = !this.isBigScreen;
      this.isSmallScreen = !this.isSmallScreen;
    },
  },
};
</script>

<style scoped>
.dashboard {
  background: #f5f5f5;
}

.router-link-exact-active.active {
  background: var(--aaj-primary);
  color: #fff;
  border-radius: 0px 16px 16px 0px;
}

.nav-item {
  line-height: 26px;
}

.nav-item:hover .ps-4 {
  background: var(--aaj-primary);
  color: #fff !important;
  border-radius: 0px 16px 16px 0px;
}
.nav-link {
  color: #595959;
  font-size: 14px;
}

.w-90 {
  width: 90%;
}

.w-custom {
  width: 60px;
}

.offcanvas-header,
.offcanvas-body {
  padding: 1rem 1rem 1rem 0;
}

.offcanvas-start {
  width: 230px;
  background: #f5f5f5;
}

.big-screen {
  padding-left: 15rem;
}

@media (min-width: 320px) {
  .small-screen {
    padding-left: 0;
  }

  .big-screen {
    padding-left: 0;
  }
}

@media (min-width: 640px) {
  .big-screen {
    padding-left: 15rem;
  }

  .offcanvas-start {
    width: 230px;
  }
}

@media (min-width: 1024px) {
}
</style>
