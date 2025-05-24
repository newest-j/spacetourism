<template>
  <div class="home-container">
    <div class="container">
      <p id="para1" class="h5">
        <span id="first-para1">01</span> PICK YOUR DESTINATION
      </p>
      <div
        class="d-flex align-items-center justify-content-center pt-5"
        id="box-gap"
      >
        <div class="text-primary">
          <div v-if="isImageLoading">
            <div>
              <div class="spinner-border text-primary"></div>
              Image loading...
            </div>
          </div>
          <img
            v-show="!isImageLoading"
            :src="destinations[selected]?.images?.png"
            class="destination-img img-fluid"
            alt="Destination image"
            @load="handleImageLoad"
          />
        </div>
        <div id="text-container">
          <ul class="nav" id="destination-nav">
            <li
              @click="currentDestination(index)"
              class="nav-item"
              v-for="(destination, index) in destinations"
              :key="index"
            >
              <a
                href="#"
                :class="{ active: selected === index }"
                class="nav-link"
                id="color"
                >{{ destination.name.toUpperCase() }}</a
              >
            </li>
          </ul>
          <h1 class="text-white display-1" id="destination-name">
            {{ destinations[selected]?.name.toUpperCase() || "Loding..." }}
          </h1>
          <p class="text" id="para2">
            {{ destinations[selected]?.description || "Loding..." }}
          </p>
          <div>
            <hr class="text-white" />
          </div>
          <div class="d-flex" id="details-gap">
            <div>
              <p id="details">AVG. DISTANCE</p>
              <p class="dist text-white">
                {{ destinations[selected]?.distance || "Loding..." }}
              </p>
            </div>
            <div>
              <p id="details">EST. TRAVEL TIME</p>
              <p class="travel text-white">
                {{ destinations[selected]?.travel || "Loding..." }}
              </p>
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
    return {
      destinations: [],
      selected: 0,
      isImageLoading: true,
    };
  },

  methods: {
    async fetchData() {
      try {
        const response = await fetch("/data/data.json");
        const data = await response.json();
        this.destinations = data.destinations;
        // console.log(this.destinations);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    },
    currentDestination(index) {
      this.selected = index;
      // console.log(this.destinations[this.selected]);
    },
    handleImageLoad() {
      this.isImageLoading = false;
    },
  },

  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.home-container {
  background-image: url(/images/destination/background-destination-desktop.jpg);
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
.nav-item {
  position: relative;
}

.active::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 10px;
  width: 70%;
  border-bottom: 3px solid #ffffff;
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
  max-width: 400px;
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
    background-image: url(/images/destination/background-destination-tablet.jpg);
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
  #para1 {
    /* text-align: center; */
    display: block;
    margin: 0 auto;
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
    background-image: url(/images/destination/background-destination-mobile.jpg);
  }
  .destination-img {
    width: 200px;
  }

  #destination-name {
    font-size: 50px;
  }
  #para1 {
    text-align: center;
    display: block;
    margin: 0 auto;
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
