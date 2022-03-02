<template>
  <div aria-live="polite" aria-atomic="true" class="position-relative">
    <div
      class="toast-container position-fixed top-0 end-0 p-3 me-md-3 z-index-cus"
    >
      <div
        class="toast"
        :class="{ fade: isAlert, show: isAlert }"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header fw-light">
          <img
            src="/img/logo.82b9c7a5.png"
            width="20"
            class="rounded me-2"
            alt="logo"
          />
          <strong class="me-auto">AAJ Express</strong>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationAlert",
  props: ["message", "isAlert"],
};
</script>

<style scoped>
.z-index-cus {
  z-index: 10;
}
</style>
