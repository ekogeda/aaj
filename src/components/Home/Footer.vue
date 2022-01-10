<template>
  <div class="footer" id="contact">
    <div class="container">
      <div class="grid fs-cust">
        <div class="grid-3">
          <img
            src="/img/aaj-files/aaj-logo.png"
            class="rounded mb-2"
            alt="AAJ-Express"
          />

          <ul class="nav flex-column">
            <li class="nav-item">
              <i class="fa fa-envelope"></i> info@aajexpress.org
            </li>
            <li class="nav-item">
              <i class="fa fa-whatsapp"></i> +234 813 2269 487
            </li>
            <li class="nav-item">
              <i class="fa fa-map-marker"></i> Shop F217, First Floor Tejuosho
              Ultra modern market. Yaba, Lagos State
            </li>
          </ul>
        </div>

        <div class="grid-3">
          <h6>Product</h6>
          <ul class="nav flex-column">
            <li class="nav-item"><a href="#home">Home</a></li>
            <li class="nav-item"><a href="#features">Features</a></li>
            <li class="nav-item"><a href="#contact">Contact Us</a></li>
            <li class="nav-item"><a href="#track">Track your Goods</a></li>
            <li class="nav-item"><a href="#estimate">Get Estimate</a></li>
          </ul>
        </div>

        <div class="grid-3">
          <h6>Company</h6>
          <ul class="nav flex-column">
            <li class="nav-item"><a href="#about">About</a></li>
            <li class="nav-item"><a href="#blog">Blog</a></li>
            <li class="nav-item"><a href="#services">Services</a></li>
            <li class="nav-item"><a href="#career">Career</a></li>
            <li class="nav-item"><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="grid-3">
          <h6>Support</h6>
          <ul class="nav flex-column">
            <li class="nav-item"><a href="#!">Getting Started</a></li>
            <li class="nav-item"><a href="#tutorials">Tutorials</a></li>
            <li class="nav-item"><a href="#support">Contact Support</a></li>
            <li class="nav-item"><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div class="grid-3">
          <h6>Legal</h6>
          <ul class="nav flex-column">
            <li class="nav-item"><a href="#!">Buyer & Seller Protection</a></li>
            <li class="nav-item"><a href="#policy">Privacy Policy</a></li>
            <li class="nav-item"><a href="#services">Terms of Services</a></li>
          </ul>
        </div>

        <div class="gridl-3">
          <h6>Follow us</h6>
          <div class="social-media">
            <a href="#!"><i class="fab fa-facebook"></i></a>
            <a href="#!"><i class="fab fa-instagram"></i></a>
            <a href="#!"><i class="fab fa-linkedin"></i></a>
            <a href="#!"><i class="fab fa-twitter"></i></a>
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
.fs-cust {
  font-size: 12px;
}

.footer {
  padding: 3rem 0;
  background: var(--aaj-blue);
  color: #fff;
}

.footer a {
  color: #fff;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
  color: hsl(0, 0%, 100%);
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.grid-3 img {
  width: 80px;
}

.grid-3 li {
  line-height: 2.5;
}
.social-media a {
  display: inline-block;
  margin-right: 0.6rem;
  font-size: 1.6rem;
}

@media (min-width: 641px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 961px) {
  .grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
