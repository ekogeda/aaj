<template>
  <div class="notification position-relative">
    <NotificationMessage
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import NotificationMessage from "./NotificationMessage";
export default {
  name: "NotificationsList",
  components: {
    NotificationMessage,
  },

  computed: {
    ...mapState({
      notifications: (state) => state.notifications,
    }),
  },
};
</script>

<style scoped></style>
