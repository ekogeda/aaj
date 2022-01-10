<template>
  <div
    class="position-fixed bottom-0 end-0 w-101 p-1"
    style="z-index: 11"
    role="alert"
  >
    <div
      class="toast fade show text-white"
      :class="typeClass"
      style="z-index: 11"
      role="alert"
    >
      <div class="toast-header">
        <img
          src="@/assets/logo.png"
          width="40px"
          class="rounded me-2"
          alt="AAJ-Express"
        />
        <strong class="me-auto"></strong>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body d-flex justify-content-between align-items-center">
        <p class="m-0">{{ notification.message }}</p>
        <template v-if="notification.type == 'danger'">
          <img src="../assets/pensive-face.png" width="30px" />
        </template>
        <template v-else>
          <img src="../assets/thumbs-up.png" width="30px" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["notification"],

  data() {
    return {
      timeout: null,
    };
  },

  computed: {
    typeClass() {
      return `bg-${this.notification.type}`;
    },
  },

  created() {
    this.timeout = setTimeout(() => {
      this.removeNotification(this.notification);
    }, 5000);
  },

  beforeUnmount() {
    clearTimeout(this.timeout);
  },

  methods: mapActions(["removeNotification"]),
};
</script>

<style scoped>
@media (min-width: 320px) {
  .toast {
    width: 315px;
  }
}
@media (min-width: 640px) {
  .toast {
    width: 350px;
  }
}
</style>
