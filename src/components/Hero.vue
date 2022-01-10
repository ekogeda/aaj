<template>
  <div>
    <div
      id="heroCarousel"
      class="carousel carousel-dark slide carousel-fade position-relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item bg-light active">
          <img
            src="@/assets/slider.png"
            width="auto"
            style="float: right"
            alt="..."
            class="slide-sm"
          />
          <div class="carousel-caption d-md-block">
            <h2>
              Trusted Logistics <br />
              Service Provider.
            </h2>
            <p class="my-3">
              We offer doorstep delivery not only to all states within <br />
              Nigeria but also worldwide.
            </p>
            <form
              class="form-subscribe"
              id="trackCargo"
              data-sb-form-api-token="API_TOKEN"
            >
              <div class="row">
                <div class="col-lg-5 col-md-7 col-sm-12">
                  <div class="input-group mb-1">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Input tracking ID to track your goods"
                      aria-label="Input tracking ID to track your goods"
                      aria-describedby="button-track"
                    />
                    <button
                      class="btn btn-sm btn-primary"
                      type="button"
                      id="button-track"
                    >
                      Search &#8594;
                    </button>
                  </div>
                  <small class="d-inline-block">Send . Track . Receive</small>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="carousel-item bg-light">
          <img
            src="@/assets/slider1.png"
            width="auto"
            style="float: right"
            alt="..."
            class="slide-sm"
          />
          <div class="carousel-caption d-md-block">
            <h2>
              Build trust with your customers <br />
              by choosing
              <span class="text-aaj">AAJ Express</span>
            </h2>
            <p class="my-3">Fast and reliable deliveries</p>

            <form
              class="form-subscribe"
              id="trackCargo"
              data-sb-form-api-token="API_TOKEN"
            >
              <div class="row">
                <div class="col-lg-5 col-md-7 col-sm-12">
                  <div class="input-group mb-1">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Input tracking ID to track your goods"
                      aria-label="Input tracking ID to track your goods"
                      aria-describedby="button-track"
                    />
                    <button
                      class="btn btn-sm btn-primary"
                      type="button"
                      id="button-track"
                    >
                      Search &#8594;
                    </button>
                  </div>
                  <small class="d-inline-block">Send . Track . Receive</small>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- <div class="carousel-item">
          <img
            src="@/assets/3a.png"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-md-block">
            <h5 class="">
              <span class="text-aaj">Fast</span> and
              <span class="text-aaj">reliable</span> deliveries <br />
              Improves customer retention.
            </h5>
            <p class="">
              <span class="text-aaj">Fast</span> and
              <span class="text-aaj">reliable</span> deliveries <br />
              Improves customer retention.
              <span class="text-aaj">AAJ Express</span> is here to help with
              that
            </p>
          </div>
        </div> -->
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>

      <div
        class="position-absolute top-100 start-50 translate-middle"
        style="z-index: 9"
      >
        <div class="card border border-0 shadow cust b-radius">
          <div class="card-body cust">
            <div class="grid">
              <div class="grid-1 border-end">
                <img
                  src="@/assets/bike-thumb.png"
                  width="50px"
                  class="rounded-circle"
                  alt="box"
                />
                <small class="fw-bold d-block fs-h">Local Delivery</small>
                <small class="d-block fs-t">Within Lagos</small>
                <a href="#!" class="text-aaj fw-bold fs-h">Explore &#8594;</a>
              </div>

              <div class="grid-2 border-end border-sm-end">
                <img
                  src="@/assets/bus-thumb.png"
                  width="50px"
                  class="rounded-circle"
                  alt="box"
                />
                <small class="fw-bold d-block fs-h">Interstate Delivery</small>
                <small class="d-block fs-t">Across Nigeria</small>
                <a href="#!" class="text-aaj fw-bold fs-h">Explore &#8594;</a>
              </div>

              <div class="grid-2 border-end">
                <img
                  src="@/assets/plane-thumb.png"
                  width="50px"
                  class="rounded-circle"
                  alt="box"
                />
                <small class="fw-bold d-block fs-h"
                  >International Delivery</small
                >
                <small class="d-block fs-t">Export</small>
                <a href="#!" class="text-aaj fw-bold fs-h">Explore &#8594;</a>
              </div>

              <div class="grid-2">
                <div class="position-relative" style="width: 50px">
                  <span
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-aaj"
                    style="
                      font-size: 7px;
                      left: 80% !important;
                      top: 5px !important;
                    "
                  >
                    New
                  </span>
                  <img
                    src="@/assets/cart-thumb-2.png"
                    width="50px"
                    class="rounded-circle"
                    alt="box"
                  />
                </div>
                <small class="fw-bold d-block fs-h">Shopping</small>
                <small class="d-block fs-t"
                  >Shop from UK and get delivered in Nigeria
                </small>
                <a href="#!" class="text-aaj fw-bold fs-h">Explore &#8594;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.carousel-caption {
  bottom: 8.25rem;
  left: 9%;
  color: #0c1a57;
  text-align: left;
}
.carousel-control-prev,
.carousel-control-next {
  width: 7%;
}

.b-radius {
  border-radius: 15px;
}

.fs-t {
  font-size: 10px;
}

.fs-h {
  font-size: 13px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 13px;
}

a.text-aaj {
  text-decoration: none;
}

.input {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.btn-primary:focus {
  box-shadow: none;
}
@media (min-width: 320px) {
  .carousel-caption {
    bottom: auto;
  }

  .slide-sm {
    width: 0;
    height: 420px;
  }
  .card.cust {
    width: 20rem;
  }

  .border-sm-end {
    border-right: 0 !important;
  }
}

@media (min-width: 410px) {
  .card.cust {
    width: 25rem;
  }
}

@media (min-width: 641px) {
  .carousel-caption {
    bottom: 8.25rem;
  }

  .slide-sm {
    width: auto;
    height: 450px;
  }

  .card.cust {
    width: 45rem;
  }

  .border-sm-end {
    border-right: 1px solid #dee2e6 !important;
  }

  .grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-2 {
    padding-left: 0;
  }
}

@media (min-width: 1024px) {
  .card.cust {
    width: 70rem;
  }

  .card-body.cust {
    padding: 1rem 2rem;
  }

  .grid-2 {
    padding-left: 28px;
  }
}
</style>
