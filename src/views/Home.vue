<template>
  <div class="home">
    <Navbar />

    <Hero msg="AAJ-Express" />

    <Shipping />

    <Estimate />

    <Provider />

    <Faq />

    <Shopping />

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Shipping from "@/components/Home/Shipping.vue";
import Estimate from "@/components/Home/Estimate.vue";
import Provider from "@/components/Home/Provider.vue";
import Faq from "@/components/Home/Faq.vue";
import Shopping from "@/components/Home/Shopping.vue";
import Footer from "@/components/Home/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Shipping,
    Estimate,
    Provider,
    Faq,
    Shopping,
    Footer,
  },
};
</script>

<style scoped></style>
