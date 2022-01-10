<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <router-link to="/" class="navbar-brand"
          ><img src="@/assets/logo.png" alt="AAJ-Express" class="img-fluid" />
        </router-link>

        <button
          class="btn btn-outline-primary shadow-none border-0 d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#homeSide"
          aria-controls="homeSide"
        >
          <span class="bi bi-list"></span>
        </button>

        <div
          class="offcanvas offcanvas-end"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabindex="-1"
          id="homeSide"
          aria-labelledby="homeSideLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="homeSideLabel">
              <template v-if="!authenticated">
                <router-link
                  class="btn btn-sm btn-primary"
                  :to="{ name: 'Home' }"
                >
                  <span class="bi bi-house"></span>
                </router-link>
              </template>
              <template v-else>
                <div class="d-flex justify-content-center align-items-center">
                  <router-link
                    :to="{ name: 'user.dashboard' }"
                    class="nav-link text-light btn btn-sm btn-primary"
                  >
                    <i v-if="user" class="bi bi-box-arrow-in-right"></i>
                  </router-link>
                </div>
              </template>
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <div class="offcanvas-body justify-content-between">
            <nav class="nav m-auto mobile-port">
              <a href="#home" class="nav-link d-none d-sm-block">Home</a>
              <a href="#about" class="nav-link">About Us</a>
              <a href="#contact" class="nav-link">Contact Us</a>
              <a href="#blog" class="nav-link">Blog</a>
              <a href="#faq" class="nav-link">FAQs</a>
            </nav>

            <template v-if="!authenticated">
              <router-link
                class="btn btn-sm btn-primary border-0 ms-auto sm-center"
                :to="{ name: 'Login' }"
                >Login</router-link
              >
            </template>
            <template v-else>
              <div
                class="d-flex justify-content-center align-items-center d-none d-lg-block"
              >
                <router-link
                  :to="{ name: 'user.dashboard' }"
                  class="nav-link text-light btn btn-sm btn-primary"
                >
                  <i v-if="user" class="bi bi-box-arrow-in-right"></i>
                </router-link>
                <!-- <button @click.prevent="logout" class="btn btn-sm text-danger">
                  <i class="bi bi-box-arrow-left logout"></i>
                </button> -->
              </div>
            </template>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Navbar",

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
};
</script>

<style scoped>
.nav-link {
  color: #333;
}
.nav-link:hover {
  color: var(--aaj-primary);
}

.btn-primary:focus {
  box-shadow: none;
}
@media (min-width: 320px) {
  .sm-center {
    margin: 3rem auto;
    display: block;
    width: 50%;
  }
  .navbar-brand img {
    width: 40px;
  }

  .mobile-port {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .offcanvas-header .btn-close {
    padding: 0.5rem;
  }
}

@media (min-width: 641px) {
  .navbar-brand img {
    width: 75px;
  }
}

@media (min-width: 1024px) {
  .sm-center {
    margin: 0;
    display: inline-block;
    width: auto;
  }

  .mobile-port {
    flex-direction: row;
  }
}
</style>
