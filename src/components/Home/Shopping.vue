<template>
  <div class="shopping my-5">
    <div class="container">
      <h2 class="text-center">
        Your Shopping experience <br />
        made simple
      </h2>

      <div class="row my-4">
        <div class="col-md-4 col-sm-12">
          <div class="card border-0 h-100 text-start">
            <img
              class="card-img-top h-100"
              src="/img/aaj-files/packed.png"
              alt="package"
            />
            <div class="card-body p-2">
              <h4 class="card-title">
                Shop from Uk &amp; get Deliver to Nigeria
              </h4>
              <p class="card-text">Secure delivery</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="card border-0 h-100 text-start">
            <img
              class="card-img-top"
              src="/img/aaj-files/invoice.png"
              alt="invoice"
            />
            <div class="card-body p-2">
              <h4 class="card-title">Invoicing</h4>
              <p class="card-text">Invoice well documented</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="card border-0 h-100 text-start">
            <img
              class="card-img-top"
              src="/img/aaj-files/store.png"
              alt="store"
            />
            <div class="card-body p-2">
              <h4 class="card-title">Packaging</h4>
              <p class="card-text">Goods packed and delivered</p>
            </div>
          </div>
        </div>
      </div>

      <button class="btn btn-primary mt-5 d-block m-auto explore">
        Explore
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shopping",
};
</script>

<style scoped>
.shopping h2 {
  font-size: 1.6rem;
  color: var(--aaj-blue);
}
.card-title {
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 32px;
  color: #595959;
}
.explore {
  width: 200px;
}

.btn-primary:focus {
  box-shadow: none;
}
</style>
