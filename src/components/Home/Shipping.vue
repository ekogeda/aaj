<template>
  <div class="container my-5 shipping">
    <div class="my-cust">
      <div class="row">
        <div class="col-md-6">
          <div class="position-relative">
            <img src="@/assets/aaj-lady.png" class="lady" alt="box" />

            <div class="position-absolute top-100 start-50 translate-middle">
              <img
                src="@/assets/aaj-plane-b.png"
                class="sub-lady img-thumbnail"
                alt="box"
              />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="lady position-relative lady-custom">
            <img src="/img/aaj-files/aajexpress.png" alt="aaj express" />
            <p>
              We offer doorstep delivery not only to all states within Nigeria
              but also worldwide.
            </p>

            <div class="offer">
              <div class="d-flex align-items-center">
                <img src="@/assets/check-o.png" class="rounded-circle" alt="" />
                <strong class="ms-4 fs-h w-max"
                  >Fast, Secure, Affordable and Reliable</strong
                >
              </div>
              <div class="d-flex align-items-center my-4">
                <img src="@/assets/check-o.png" class="rounded-circle" alt="" />
                <strong class="ms-4 fs-h w-max">
                  Doorstep Delivery Locally and Internationally
                </strong>
              </div>
              <div class="d-flex align-items-center">
                <img src="@/assets/check-o.png" class="rounded-circle" alt="" />
                <strong class="ms-4 fs-h w-max">
                  Chip to USA, CA, UK, EU, SA, GH for as low as
                  <span class="text-aaj">N2500/kg.</span>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: "HomeShipping" };
</script>

<style scoped>
.fs-h {
  font-size: 0.9rem;
  font-weight: 700;
}

.w-max {
  max-width: 200px;
}

/* .shipping {
  margin-top: 145px;
} */

.my-cust {
  margin-top: 12rem;
  margin-bottom: 9rem;
}

.lady {
  width: 95%;
  height: 270px;
  margin: 0 auto;
  display: block;
  border-radius: 10px;
}

.sub-lady {
  width: 210px;
  height: 100px;
  border-radius: 10px;
}

.line {
  width: 48px;
  height: 5px;
  background-color: var(--aaj-blue);
}
.plane.start-100 {
  left: 55% !important;
}
.plane.top-0 {
  top: 6px !important;
}
.plane .fa-plane {
  color: var(--aaj-blue);
  transform: rotate(-45deg);
  font-size: 1.3rem;
}

.offer img {
  width: 40px;
}

@media (min-width: 320px) {
  .plane.start-100 {
    left: 60% !important;
  }
  .lady-custom {
    margin-top: 7rem;
  }
}

@media (min-width: 360px) {
  .plane.start-100 {
    left: 55% !important;
  }
}

@media (min-width: 411px) {
  .plane.start-100 {
    left: 48% !important;
  }
}

@media (min-width: 641px) {
  .shipping {
    margin-top: 130px;
  }
  .lady {
    height: 290px;
  }

  .lady-custom {
    margin-top: 0;
  }

  /* .my-cust {
    margin-top: 12rem;
    margin-bottom: 10rem;
  } */

  .line {
    width: 48px;
    height: 5px;
    background-color: var(--aaj-blue);
  }
  .plane.start-100 {
    left: 65% !important;
  }
  .plane.top-0 {
    top: 6px !important;
  }
  .plane .fa-plane {
    color: var(--aaj-blue);
    transform: rotate(-45deg);
    font-size: 1.3rem;
  }

  .offer img {
    width: 40px;
  }
}

@media (min-width: 1024px) {
  .plane.start-100 {
    left: 55% !important;
  }
}

@media (min-width: 1025px) {
  .lady {
    height: 400px;
  }

  .sub-lady {
    width: 275px;
    height: 140px;
  }
}
</style>
