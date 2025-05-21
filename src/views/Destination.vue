<template>
  <div class="home-container">
    <div class="container">
      <p id="para1" class="h5">
        <span id="first-para1">01</span> PICK YOUR DESTINATION
      </p>
      <div class="d-flex justify-content-center pt-5" id="box-gap">
        <div>
          <img src="" class="destination-img" />
        </div>
        <div id="text-container">
          <ul class="nav" id="destination-nav">
            <li class="nav-item">
              <RouterLink></RouterLink>
              <a href="#" class="nav-link active" id="color">MOON</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" id="color">MARS</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link active" id="color">EUROPA</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" id="color">TITAN</a>
            </li>
          </ul>
          <h1 class="text-white display-1" id="destination-name">MOON</h1>
          <p class="text" id="para2">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div>
            <hr class="text-white" />
          </div>
          <div class="d-flex" id="details-gap">
            <div>
              <p id="details">AVG. DISTANCE</p>
              <p class="dist text-white">384,400 km</p>
            </div>
            <div>
              <p id="details">EST. TRAVEL TIME</p>
              <p class="travel text-white">3 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    async fetchData() {
      try {
        const response = await fetch("/data/data.json");
        const data = await response.json();
        console.log(data);
        return data.destinations;
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    },
    setCurrentDestination() {},
  },

  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.home-container {
  background-image: url(/public/images/destination/background-destination-desktop.jpg);
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
.container {
  margin-top: 100px;
}

#para1 {
  color: #ffffff;
  word-spacing: 5px;
  margin-left: 150px;
  /* font-size: 35px; */
}

.destination-img {
  width: 300px;
}

#text-container {
  width: 400px;
}

#box-gap {
  gap: 150px;
}

#color {
  color: #d0d6f9;
}

#destination-name {
  font-family: "Bellefair", serif;
}

.text {
  color: #d0d6f9;
}

#details {
  color: #d0d6f9;
  margin-bottom: 0px;
}

#details-gap {
  gap: 100px;
}

.dist {
  font-size: 30px;
}

.travel {
  font-size: 30px;
}

#first-para1 {
  color: #d0d6f9;
}

@media (max-width: 765px) {
  .home-container {
    background-image: url(/public/images/destination/background-destination-desktop.jpg);
  }
  #box-gap {
    flex-direction: column;
    align-items: center;
    gap: 40px;
    text-align: center;
  }

  #destination-nav {
    display: flex;
    justify-content: center;
  }

  #details-gap {
    justify-content: center;
  }

  #para2 {
    font-size: 20px;
  }

  #destination-name {
    font-size: 100px;
  }

  #details {
    font-size: 25px;
  }

  .dist {
    font-size: 40px;
  }

  .travel {
    font-size: 40px;
  }
}

@media (max-width: 376px) {
  .home-container {
    background-image: url(/public/images/destination/background-destination-mobile.jpg);
  }
  .destination-img {
    width: 200px;
  }

  #destination-name {
    font-size: 50px;
  }

  #para2 {
    margin: 0px 30px;
  }

  #details {
    font-size: 20px;
  }

  .dist {
    font-size: 30px;
  }

  .travel {
    font-size: 30px;
  }

  #details-gap {
    flex-direction: column;
    gap: 0px;
  }
}
</style>
