<template>
  <header class="top-head">
    <div class="container">
      <nav class="nav">
        <div class="logo">
          <img src="/img/aaj/logo.png" alt="AAJ Logistics" />
        </div>
        <div class="login">
          <template v-if="!authenticated">
            <router-link class="login-anchor" :to="{ name: 'Registration' }"
              >Sign in</router-link
            >
          </template>
          <template v-else>
            <div class="flex">
              <router-link :to="{ name: 'user.dashboard' }" class="mx-2">
                <h1 v-if="user">{{ user.first_name }}</h1>
              </router-link>
              <button @click.prevent="logout">
                <i class="fa fa-power-off logout"></i>
              </button>
            </div>
          </template>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
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
.top-head {
  /* padding: 1rem 0.8rem; */
  position: sticky;
  top: 0;
  z-index: 1;
  transition: all 0.25s ease-in;
}
.scrolling-active {
  background: #fff;
  color: var(--aaj-primary);
  box-shadow: 0 3px 1rem rgba(0, 0, 0, 0.1);
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.8rem;
}
.logo img {
  display: block;
  width: 70px;
}
.login .login-anchor {
  display: block;
  padding: 0.5rem 1rem;
  background: var(--aaj-primary);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 400;
  text-transform: uppercase;
  transition: background 0.3s ease;
}
.login .login-anchor a:hover {
  background: hsl(25, 100%, 35%);
}

.login h1 {
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
}
.login button {
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  line-height: 2rem;
  background: none;
  outline: none;
  border: 0;
}

.login button i {
  width: 30px;
  height: 30px;
  color: var(--aaj-blue-h1);
  font-size: 1.2rem;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  padding: 0.3rem;
  margin-right: 1rem;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

@media (min-width: 320px) {
  /*  */
}
@media (min-width: 481px) {
  /*  */
}
@media (min-width: 641px) {
  /*  */
  /* .top-head {
    padding: 0.5rem 0.8rem;
  } */
  /* .logo img {
    width: 100px;
  } */
  .login a {
    padding: 0.5rem 0.8rem;
    font-size: 1rem;
    font-weight: 400;
  }
}
@media (min-width: 961px) {
  /*  */
}
@media (min-width: 1025px) {
  /* .top-head {
    padding: 0.8rem 0;
  } */
  /* .logo img {
    width: 100px;
  } */
  .login a {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
}
@media (min-width: 1281px) {
  /*  */
}
</style>
