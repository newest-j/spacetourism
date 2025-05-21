<template>
  <div class="home-container">
    <div class="container" id="section">
      <div
        class="d-flex flex-wrap flex-column flex-md-row align-items-center justify-content-between"
        id="gap"
      >
        <div id="para-container" class="text-center text-md-start">
          <p id="para1" class="h5">SO, YOU WANT TO TRAVEL TO</p>
          <h1 class="text-white display-1" id="name">SPACE</h1>
          <p id="para2">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div
          class="d-flex justify-content-center align-items-center mt-5 mt-md-0"
        >
          <RouterLink
            type="button"
            class="btn btn-lg btn-light rounded-circle"
            id="button"
            to="/destination"
          >
            EXPLORE
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home-container {
  background-image: url(/public/images/home/background-home-desktop.jpg);
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  font-family: "Barlow Condensed", sans-serif;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

#para1,
#para2 {
  color: #d0d6f9;
}

#section {
  padding-top: 280px;
}

#gap {
  gap: 100px;
}

#para-container {
  max-width: 400px;
}

#name {
  letter-spacing: 6px;
  font-family: "Bellefair", serif;
}

#button {
  width: 150px;
  height: 150px;
  padding-top: 60px;
  font-size: 1.5rem;
  letter-spacing: 2px;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  transition: box-shadow 0.3s;
  animation: pulse 2s infinite;
}

#button:hover,
#button:focus {
  animation: pulse-grow 0.6s;
  box-shadow: 0 0 0 40px rgba(255, 255, 255, 0.1);
}

/* Animations */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  70% {
    box-shadow: 0 0 0 30px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

@keyframes pulse-grow {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  100% {
    box-shadow: 0 0 0 40px rgba(255, 255, 255, 0.1);
  }
}

/* Tablet */
@media screen and (max-width: 765px) {
  .home-container {
    background-image: url(/public/images/home/background-home-tablet.jpg);
  }

  #gap {
    flex-direction: column;
    text-align: center;
    flex-wrap: wrap;
    gap: 40px;
  }

  #para1 {
    font-size: 30px;
  }

  #name {
    font-size: 100px;
  }

  #para2 {
    font-size: 20px;
  }

  #button {
    width: 200px;
    height: 200px;
    padding-top: 80px;
  }
  #section {
    padding-top: 200px;
  }
  #para-container {
    max-width: 1000px;
  }
}

/* Mobile */
@media screen and (max-width: 375px) {
  .home-container {
    background-image: url(/public/images/home/background-home-mobile.jpg);
  }

  #para1 {
    font-size: 10px;
  }

  #name {
    font-size: 55px;
  }

  #para2 {
    font-size: 10px;
  }

  #button {
    width: 150px;
    height: 150px;
    padding-top: 60px;
  }

  #para-container {
    width: 100%;
  }
}
</style>
