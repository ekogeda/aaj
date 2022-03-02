<template>
  <div id="app">
    <!-- <PageLoader /> -->
    <Update />
    <NotificationsList />

    <transition-page>
      <router-view></router-view>
    </transition-page>
  </div>
</template>

<script>
/* eslint-disable */
import "bootstrap/dist/js/bootstrap.min.js";
import { Toast } from "bootstrap/dist/js/bootstrap.esm.min.js";
import Update from "@/components/Update";
// import PageLoader from "@/components/PageLoader.vue";
import TransitionPage from "@/components/Transitions/TransitionPage.vue";
import NotificationsList from "@/components/NotificationsList.vue";

export default {
  name: "App",
  components: { TransitionPage, Update, NotificationsList },

  data: () => {
    return {};
  },

  mounted() {
    Array.from(document.querySelectorAll(".toast")).map(
      (toastNode) => new Toast(toastNode)
    );
  },
};
</script>

<style>
#nprogress .bar {
  background: var(--aaj-yellow-green) !important;
  height: 5px !important;
}

#nprogress .peg {
  box-shadow: 0 0 10px var(--aaj-yellow-green), 0 0 5px var(--aaj-yellow);
}

#nprogress .spinner .spinner-icon {
  border-top-color: var(--aaj-yellow-green);
  border-left-color: var(--aaj-yellow);
  width: 2rem;
  height: 2rem;
}

.form-control:focus,
.btn:focus {
  box-shadow: none;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
/* Track */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 8px;
  border-radius: 8px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 8px;
  border-radius: 8px;
  background: rgba(255, 0, 0, 0.8);
  -webkit-box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255, 0, 0, 0.4);
}
</style>
