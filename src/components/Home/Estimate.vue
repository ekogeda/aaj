<template>
  <div>
    <div class="container">
      <div class="initial mb-5">
        <div class="py-5 pl-cust estimate-1">
          <h5 class="mb-4 h1-w-max">
            Local and Inter-state Shipping for Personal and Business use
          </h5>
          <div class="ship mb-4">
            <div class="d-flex align-items-center">
              <img src="@/assets/check-o.png" class="rounded-circle" alt="" />
              <strong class="ms-4 fs-h w-max"
                >Request a pickup or delivery from you or from the
                seller</strong
              >
            </div>
            <div class="d-flex align-items-center my-4">
              <img src="@/assets/check-o.png" class="rounded-circle" alt="" />
              <strong class="ms-4 fs-h w-max">
                Get it delivered to where you need it to go.
              </strong>
            </div>
          </div>
          <a href="#!" class="btn btn-sm bg-aaj fw-bold text-blue"
            >Get Estimate</a
          >
        </div>

        <div class="bg-white estimate-2">
          <img src="@/assets/bus-blue.png" alt="estimate" />
        </div>
      </div>
    </div>

    <div class="grid-cust">
      <div class="bg-white estimate-3" id="plane1">
        <img src="@/assets/aaj-plane-globe.png" alt="estimate" />
      </div>

      <div class="py-5 estimate-4 ml-cust">
        <h5 class="mb-4 h1-w-max">
          Local and Inter-state Shipping for Personal and Business use
        </h5>
        <div class="ship mb-4">
          <div class="d-flex align-items-center">
            <img src="@/assets/check-o.png" class="rounded-circle" alt="" />
            <strong class="ms-4 fs-h w-max"
              >Request a pickup or delivery from you or from the seller</strong
            >
          </div>
          <div class="d-flex align-items-center my-4">
            <img src="@/assets/check-o.png" class="rounded-circle" alt="" />
            <strong class="ms-4 fs-h w-max">
              Get it delivered to where you need it to go.
            </strong>
          </div>
        </div>
        <a href="#!" class="btn btn-sm bg-aaj fw-bold text-blue"
          >Get Estimate</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default { name: "HomeEstimate" };
</script>

<style scoped>
.btn-primary:focus {
  box-shadow: none;
}
.my-cust {
  margin: 5rem 0;
}

.mb-cust {
  margin-bottom: 5rem;
}

.ml-cust {
  margin-left: 5rem;
}

.text-blue {
  color: var(--aaj-blue);
  /* margin-left: 63px; */
}

.initial {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  grid-template-areas: "estimate-2" "estimate-1";
  gap: 20px;
}
.estimate-2 {
  grid-area: estimate-2;
}
.estimate-1 {
  grid-area: estimate-1;
}

.grid,
.grid-cust {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

.initial .bg-white img,
.grid-cust .bg-white img {
  display: block;
  width: 100%;
  /* height: 100%; */
}

.grid .bg-white img,
.grid-cust .bg-white img {
  height: 100%;
}

.h1-w-max {
  max-width: 280px;
}

.w-max {
  max-width: 245px;
}

.bg-blue {
  background-color: var(--aaj-blue);
  color: #fff;
}

.bg-aaj {
  background-color: var(--aaj-primary);
  color: #fff;
}

.ship img {
  width: 40px;
}

.fs-h {
  font-size: 1rem;
  font-weight: 500;
}

@media (min-width: 320px) {
  /* smartphones, iPhone, portrait 480x320 phones */
  /* #plane1 {
    display: none;
  } */

  .py-5 {
    padding-bottom: 0;
  }

  .ml-cust {
    margin-left: 0.8rem;
  }
}

@media (min-width: 481px) {
  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
}

@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  .initial {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "estimate-1 estimate-2";
  }

  .grid {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  .grid-cust {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  /* .grid .bg-white img,
  .grid-cust .bg-white img {
    height: 100%;
  } */

  /* #plane1 {
    display: block;
  } */

  .ml-cust {
    margin-left: 5rem;
  }
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}

@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */
  .ps-cust {
    padding-left: 7rem !important;
  }

  /* .grid .bg-white img,
  .grid-cust .bg-white img {
    height: 68vh;
  } */
}

@media (min-width: 1281px) {
  /* hi-res laptops and desktops */
}
</style>
