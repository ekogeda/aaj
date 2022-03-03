<template>
  <div aria-live="polite" aria-atomic="true" class="position-relative updates">
    <div class="toast-container position-absolute top-3 end-0 p-3">
      <div
        class="toast bg-light"
        :class="{ show: updateExists }"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header">
          <img
            src="/img/logo.82b9c7a5.png"
            width="20"
            class="rounded me-2"
            alt="logo"
          />
          <strong class="me-auto">AAJ Express</strong>
          <small class="text-muted">Just now </small>
        </div>
        <div class="toast-body">An update is available..!</div>
        <button
          type="button"
          @click="refreshApp"
          class="btn btn-primary btn-sm mb-3"
        >
          Update
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import update from "@/mixins/update";
export default {
  name: "HomeUpdate",
  mixins: [update],
};
</script>

<style scoped>
.updates {
  text-align: center;
  z-index: 2;
}

.btn-primary:focus {
  box-shadow: none;
}
</style>
