<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
    <div class="splash">
      <div class="splash-inner">
        <div class="grid">
          <img src="/img/aaj-files/aaj-logo.png" width="100" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: ["isLoading"],

  // data() {
  //   return {
  //     isLoading: false,
  //   };
  // },

  // mounted() {
  //   document.onreadystatechange = () => {
  //     if (document.readyState == "complete") {
  //       this.isLoading = true;
  //     }
  //   };
  // },
};
</script>

<style>
.splash {
  background: linear-gradient(179.98deg, #ffad33 24.71%, #fd5800 99.99%);
  width: 100vw;
  height: 100vh;
}

.splash-inner {
  background: url("/img/aaj-files/shade1.png");
  background-repeat: no-repeat;
  background-size: 100% 50%;
  background-attachment: fixed;
  background-position: bottom;
}

.splash .grid {
  display: grid;
  place-items: center;
  align-content: center;
  height: 100vh;
}

.loader {
  overflow: hidden;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}

.fadeout {
  animation: fadeout 2s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}

@media (min-width: 320px) {
  .splash-inner {
    background-size: contain;
  }
}

@media (min-width: 760px) {
  .splash-inner {
    background-size: contain;
  }
}

@media (min-width: 1024px) {
  .splash-inner {
    background-size: 100% 50%;
  }
}
</style>
