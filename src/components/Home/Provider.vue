<template>
  <div class="provider" id="about">
    <div class="bg-light pt-5 pb-1">
      <div class="container">
        <div class="provider-h text-center">
          <h2>The solutions provider with services that fit your needs.</h2>
          <p>
            From personal needs to platform integrations, we are ready to work
            with you.
          </p>
        </div>

        <div class="grid mt-5 mb-5">
          <div class="grids">
            <div class="card mb-4 p-3 border-0 hoverable shadow">
              <div class="card-body">
                <!-- <i class="fa fa-map-marker fa-3x text-aaj"></i> -->
                <img src="@/assets/marker.png" width="60px" alt="map-marker" />
                <h5 class="my-4">Personal</h5>
                <p>
                  We are here for the simple things. Use AAJExpress for one-off
                  local and international deliveries, e-commerce payments, bill
                  payments and more.
                </p>
                <small class="text-aaj fw-bold">Learn More &#8594;</small>
              </div>
            </div>
          </div>
          <div class="grids">
            <div class="card mb-4 p-3 border-0 hoverable shadow">
              <div class="card-body">
                <!-- <i class="fa fa-map-marker fa-3x text-aaj"></i> -->
                <img src="@/assets/cart.png" width="60px" alt="map-marker" />
                <h5 class="my-4">Online, offline &amp; Social Sellers</h5>
                <p>
                  Do you own your own physical store, e-commerce website or you
                  sell on Instagram? We have services that help you increase
                  your visibility and grow your sales.
                </p>
                <small class="text-aaj fw-bold">Learn More &#8594;</small>
              </div>
            </div>
          </div>
          <div class="grids">
            <div class="card mb-4 p-3 border-0 hoverable shadow">
              <div class="card-body">
                <!-- <i class="fa fa-map-marker fa-3x text-aaj"></i> -->
                <img src="@/assets/bag.png" width="60px" alt="map-marker" />
                <h5 class="my-4">Retailers &amp; Brands</h5>
                <p>
                  Increase visibility and distribution for your products and
                  services using our platform. We'd love to help you acheive
                  more.
                </p>
                <small class="text-aaj fw-bold">Learn More &#8594;</small>
              </div>
            </div>
          </div>
          <div class="grids">
            <div class="card mb-4 p-3 border-0 hoverable shadow">
              <div class="card-body">
                <!-- <i class="fa fa-map-marker fa-3x text-aaj"></i> -->
                <img src="@/assets/globe-b.png" width="60px" alt="map-marker" />
                <h5 class="my-4">Couriers</h5>
                <p>
                  Improve your operations and sales by working with us. You can
                  expand your services using our network.
                </p>
                <small class="text-aaj fw-bold">Learn More &#8594;</small>
              </div>
            </div>
          </div>
          <div class="grids">
            <div class="card mb-4 p-3 border-0 hoverable shadow">
              <div class="card-body">
                <!-- <i class="fa fa-map-marker fa-3x text-aaj"></i> -->
                <img src="@/assets/chimney.png" width="60px" alt="map-marker" />
                <h5 class="my-4">Platforms &amp; Market Places</h5>
                <p>
                  Are you building marketplace that requires payments and
                  deliveries? Do you need to automate distribution of products
                  and services? You've come to the right place.
                </p>
                <small class="text-aaj fw-bold">Learn More &#8594;</small>
              </div>
            </div>
          </div>
          <div class="grids">
            <div class="card mb-4 p-3 border-0 hoverable shadow">
              <div class="card-body">
                <!-- <i class="fa fa-map-marker fa-3x text-aaj"></i> -->
                <img src="@/assets/grid-p.png" width="60px" alt="map-marker" />
                <h5 class="my-4">Agents &amp; Franchise Partners</h5>
                <p>
                  Increase your income and maximize utility of your free space
                  by joining our network. Find out how right away
                </p>
                <small class="text-aaj fw-bold">Learn More &#8594;</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container d-none">
      <div class="row mt-cust mb-3">
        <div class="col-md-8 m-auto">
          <img src="@/assets/customer-care.png" width="100%" alt="lady" />
        </div>
      </div>

      <div class="grid-base">
        <div class="mb-2">
          <img src="@/assets/bar-code.png" width="100%" alt="lady" />
        </div>
        <div class="mb-2">
          <img src="@/assets/store.png" width="100%" alt="lady" />
        </div>
        <div class="mb-2">
          <img src="@/assets/invoice.png" width="100%" alt="lady" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.provider-h h2 {
  font-size: 1.6rem;
  color: var(--aaj-blue);
}

.provider-h h3 {
  font-size: 1rem;
  font-weight: 500;
  margin: 0.5rem 0;
}

.pt-5 {
  padding-top: 5rem;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.col-md-8.m-auto img {
  height: auto;
}

.grid-base {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.grid-base img {
  height: 100%;
}

.hoverable {
  transition: transform 0.3s linear;
  border-radius: 20px;
}
.hoverable p {
  line-height: 26px;
  font-size: 1rem;
}

.hoverable:hover {
  background: rgba(0, 0, 0, 0.2);
  transform: scale(0.95);
}

.card {
  min-height: 100%;
}

.mt-cust {
  margin-top: 4rem;
}

@media (min-width: 641px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .col-md-8.m-auto img {
    height: auto;
  }
}

@media (min-width: 968px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
