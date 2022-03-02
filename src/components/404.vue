<template>
  <div class="container grid">
    <div class="grid text-center">
      <div class="error">
        <img src="/img/aaj/404.svg" alt="Error 404" />
      </div>
      <div class="error mx-auto" data-text="404">404</div>
      <p class="lead text-gray-800 mb-5">Page Not Found</p>
      <p class="text-gray-500 mb-0">
        It looks like you found a glitch in the matrix...
      </p>
      <router-link :to="{ name: 'Home' }">
        &larr; Please take me to the homepage
      </router-link>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.container {
  height: 100vh;
}
.grid {
  display: grid;
  place-items: center;
}
.error img {
  display: block;
  width: 100%;
}

a {
  display: block;
  color: #fff;
  background: var(--aaj-primary);
  padding: 1rem;
  margin: 1rem;
  border-radius: 26px;
  text-decoration: none;
}

@media (min-width: 1025px) {
  .error img {
    width: 50%;
    margin: 5rem auto 3rem;
  }

  a {
    width: 40%;
    margin: 1rem auto;
    transition: 0.3s linear;
  }

  a:hover {
    background: var(--aaj-blue);
  }
}
</style>
