<template>
  <!-- <div :class="{ 'modal-open': open }"> -->
  <div class="modal-comp">
    <div class="modal" :class="{ show: open, 'd-block': open }">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header alert-info">
            <slot name="modalHeader"></slot>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <!-- <div class="modal-footer alert-success">
            <slot name="modalFooter"></slot>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComp",
  props: ["open"],
};
</script>

<style scoped>
.modal-header {
  padding: 0.5rem;
}
</style>
