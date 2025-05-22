<template>
  <div class="home-container">
    <div class="container">
      <p id="para1" class="h5">
        <span id="first-para1">02 </span>MEET YOUR CREW
      </p>
      <div class="d-flex justify-content-center mt-5 gap-5" id="box-gap">
        <div class="d-flex align-items-center">
          <div class="text-box">
            <p id="name" class="h5">
              {{ crews[selected]?.role || "Loding..." }}
            </p>
            <h1 class="text-white display-6" id="crewname">
              {{ crews[selected]?.name || "Loding..." }}
            </h1>
            <p class="text h6">
              {{ crews[selected]?.bio || "Loding..." }}
            </p>

            <div id="btn-box" class="d-flex gap-3">
              <button
                @click="currentCrew(index)"
                v-for="(crew, index) in crews"
                :key="index"
                :class="{ active: selected === index }"
                type="button"
                class="btn btn-secondary rounded-circle p-2"
              ></button>
            </div>
          </div>
        </div>
        <div>
          <img
            id="crewimage"
            class="crewimg"
            :src="crews[selected]?.images?.png"
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
      crews: [],
      selected: 0,
    };
  },

  methods: {
    async fetchData() {
      try {
        const response = await fetch("/data/data.json");
        const data = await response.json();
        this.crews = data.crew;
        // console.log(this.crews);
      } catch (error) {
        console.error("Error fetching crews:", error);
      }
    },
    currentCrew(index) {
      this.selected = index;
      // console.log(this.crews[this.selected]);
    },
  },

  watch: {},

  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.home-container {
  background-image: url(/images/crew/background-crew-desktop.jpg);
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
  margin-left: 125px;
}
.container {
  margin-top: 100px;
}

#first-para1 {
  color: #d0d6f9;
}

.crewimg {
  width: 300px;
  height: 380px;
}

.text {
  color: #d0d6f9;
}

.text-box {
  max-width: 530px;
}

#name {
  color: #d0d6f9;
}

#btn-box {
  margin-top: 100px;
}

.active {
  background-color: #ffffff;
}

@media (max-width: 765px) {
  .home-container {
    background-image: url(/images/crew/background-crew-tablet.jpg);
    background-size: cover;
    background-position: center center;
    min-height: 100vh;
    width: 100%;
  }
  #box-gap {
    flex-direction: column;
    align-items: center;
    gap: 40px;
    text-align: center;
  }

  #btn-box {
    justify-content: center;
  }
  #para1 {
    /* text-align: center; */
    display: block;
    margin: 0 auto;
  }
}

@media (max-width: 376px) {
  .home-container {
    background-image: url(/images/technology/background-technology-mobile.jpg);
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
}
</style>
