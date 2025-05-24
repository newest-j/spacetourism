<template>
  <div class="home-container">
    <div class="container-fluid">
      <p id="para1" class="h5">
        <span id="first-para1">03 </span>SPACE LAUNCH 101
      </p>
      <div
        class="d-flex justify-content-end align-items-center"
        id="container-gap"
      >
        <div class="d-flex align-items-center gap-5" id="border">
          <div class="gap-4 d-flex flex-column" id="techbtn">
            <a
              @click="currentTechnology(index)"
              v-for="(technology, index) in technologies"
              :key="index"
              :class="{ active: selected === index }"
              type="button"
              class="btn btn-secondary rounded-circle pt-2"
              href="#"
              >{{ index + 1 }}</a
            >
          </div>
          <div>
            <h3 class="para2">THE TECHNOLOGY...</h3>
            <h1 class="techname text-white">
              {{ technologies[selected]?.name.toUpperCase() || "Loding..." }}
            </h1>
            <p class="para3">
              {{ technologies[selected]?.description || "Loding..." }}
            </p>
          </div>
        </div>
        <div>
          <div v-if="isImageLoading">
            <div>
              <div class="spinner-border text-primary"></div>
              Image loading...
            </div>
          </div>

          <img
            v-show="!isImageLoading"
            @load="handleImageLoad"
            class="techimage img-fluid"
            :src="technologies[selected]?.images?.portrait"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      technologies: [],
      selected: 0,
      isImageLoading: true,
    };
  },

  methods: {
    async fetchData() {
      try {
        const response = await fetch("/data/data.json");
        const data = await response.json();
        this.technologies = data.technology;
        // console.log(this.technologies);
      } catch (error) {
        console.error("Error fetching crews:", error);
      }
    },
    currentTechnology(index) {
      this.selected = index;
      // console.log(this.technologies[this.selected]);
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
  font-family: "Barlow", sans-serif;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
#para1 {
  color: #ffffff;
  word-spacing: 5px;
  margin-left: 160px;
}
.container-fluid {
  margin-top: 100px;
  padding-right: 0;
}

#first-para1 {
  color: #d0d6f9;
  font-family: "Bellefair", serif;
}
.para2 {
  color: #d0d6f9;
}
.para3 {
  /* font-size: 1px; */
  color: #d0d6f9;
}
.techimage {
  height: 400px;
  margin-right: -11px;
}
#border {
  max-width: 520px;
}
.btn {
  width: 45px;
  height: 45px;
}
#container-gap {
  gap: 200px;
}
.techname {
  font-family: "Bellefair", serif;
}
#techbtn .active {
  background-color: #ffffff;
  color: black;
}

@media screen and (max-width: 824px) {
  .home-container {
    background-image: url(/images/technology/background-technology-desktop.jpg);
    background-size: cover;
    background-position: center center;
    min-height: 100vh;
    width: 100%;
  }
  #container-gap {
    flex-direction: column-reverse;
  }
  .techimage {
    width: 100vw;
    margin-left: 0;
    margin-right: 0;
    margin-top: 100px;
    object-fit: cover;
    display: block;
  }
  .container-fluid {
    padding-left: 0;
    padding-right: 0;
  }
  #border {
    flex-direction: column;
    text-align: center;
  }
  #techbtn {
    flex-direction: row !important;
    justify-content: center;
    align-items: center;
  }
  .para3 {
    font-size: 25px !important;
    text-align: center;
  }
  #container-gap {
    gap: 30px;
  }
}
@media screen and (max-width: 500px) {
  .home-container {
    background-image: url(/images/technology/background-technology-tablet.jpg);
    background-size: cover;
    background-position: center center;
    min-height: 100vh;
    width: 100%;
  }
  #para1 {
    display: block;
    margin: 0 auto;
  }
}

@media (max-width: 376px) {
  .home-container {
    background-image: url(/public/images/technology/background-technology-mobile.jpg);
    background-size: cover;
    background-position: center center;
    min-height: 100vh;
    width: 100%;
  }
  #para1 {
    text-align: center;
    display: block;
    margin: 0 auto;
  }
  .para3 {
    font-size: 20px;
  }
  #container-gap {
    gap: 30px;
  }
}
</style>
