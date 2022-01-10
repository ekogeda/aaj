<template>
  <div class="on-boarding">
    <main v-if="!isLoading">
      <LoadingScreen :isLoading="isLoading" />
    </main>

    <div v-show="step === 1">
      <div class="on-board-shade">
        <div class="flex text-center">
          <div class="on-board-top">
            <img src="/img/aaj-files/img1.svg" />
            <h5 class="mt-5">
              Choose a delivery option <br />
              directly from the app
            </h5>
          </div>

          <div class="on-board-bottom w-100">
            <button
              class="btn btn-primary fw-bold w-75 d-block m-auto mb-3 text-capitalize"
              @click.prevent="next()"
            >
              Next
            </button>

            <a href="#" class="text-decoration-none text-dark" @click="skip()"
              >Skip</a
            >
          </div>
        </div>
      </div>
    </div>

    <div v-show="step === 2">
      <div class="on-board-shade">
        <div class="flex text-center">
          <div class="on-board-top">
            <img src="/img/aaj-files/img2.svg" />
            <h5 class="mt-5">
              Choose a delivery option <br />
              directly from the app
            </h5>
          </div>

          <div class="on-board-bottom w-100">
            <button
              class="btn btn-primary fw-bold w-75 d-block m-auto mb-3 text-capitalize"
              @click.prevent="next()"
            >
              Next
            </button>

            <a href="#" class="text-decoration-none text-dark" @click="skip()"
              >Skip</a
            >
          </div>
        </div>
      </div>
    </div>

    <div v-show="step === 3">
      <div class="on-board-shade">
        <div class="flex text-center">
          <div class="on-board-top">
            <img src="/img/aaj-files/img3.svg" />
            <h5 class="mt-5">
              Have your goods delivered to <br />
              tou at your preferred location
            </h5>
          </div>

          <div class="on-board-bottom w-100">
            <button
              class="btn btn-primary fw-bold w-75 d-block m-auto mb-3 text-capitalize"
              @click.prevent="next('skip')"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingScreen from "@/components/LoadingScreen";
export default {
  name: "Splash",

  components: { LoadingScreen },

  data() {
    return {
      step: 1,
      isLoading: false,
      isSkip: false,
    };
  },

  methods: {
    prev() {
      this.step--;
    },
    next(params) {
      if (params == "skip") {
        this.isSkip = true;
        console.log("this skip");
      }

      this.step++;
    },

    skip() {
      this.isSkip = true;
      console.log("this skip");
    },
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = true;
    }, 3000);
  },
};
</script>

<style scoped>
.on-board-shade {
  background: url("/img/aaj-files/shade1.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: fixed;
  background-position: bottom;

  width: 100vw;
  height: 100vh;
}

.flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  height: 100vh;
}

.btn {
  border-radius: 15px;
}

.btn-primary:focus {
  box-shadow: none;
}

@media (min-width: 641px) {
  .carousel-indicators {
    bottom: 255px;
  }
}

@media (min-width: 1024px) {
  .carousel-indicators {
    bottom: 165px;
  }
}

@media (min-width: 1280px) {
  .carousel-indicators {
    bottom: 195px;
  }
}
</style>
