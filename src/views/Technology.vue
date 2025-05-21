<template>
  <div class="home-container"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.home-container {
  background-image: url(/public/images/destination/background-destination-desktop.jpg);
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

@media (max-width: 768px) {
  .home-container {
    background-image: url(/public/images/technology/background-technology-desktop.jpg);
  }
}

@media (max-width: 375px) {
  .home-container {
    background-image: url(/public/images/technology/background-technology-mobile.jpg);
  }
}
</style>
