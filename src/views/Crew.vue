<template>
  <div class="home-container">
    <div class="container">
      <p id="para1" class="h5">
        <span id="first-para1">02 </span>MEET YOUR CREW
      </p>
      <div class="d-flex justify-content-center mt-5 gap-5" id="box-gap">
        <div class="d-flex align-items-center">
          <div class="text-box">
            <p id="name" class="h5">COMMANDER</p>
            <h1 class="text-white display-6" id="crewname">DOUGLAS HURLEY</h1>
            <p class="text h6">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>

            <div id="btn-box" class="d-flex gap-3">
              <button
                type="button"
                class="btn btn-secondary rounded-circle px-2 py-1 active"
              ></button>
              <button
                type="button"
                class="btn btn-secondary rounded-circle p-2"
              ></button>
              <button
                type="button"
                class="btn btn-secondary rounded-circle p-2"
              ></button>
              <button
                type="button"
                class="btn btn-secondary rounded-circle p-2"
              ></button>
            </div>
          </div>
        </div>
        <div>
          <img
            id="crewimage"
            class="width"
            src="/public/images/crew/image-douglas-hurley.png"
          />
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
  background-image: url(/public/images/crew/background-crew-desktop.jpg);
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
  /* text-align:justify; */
  /* margin-left: 200px; */
  /* margin-left: 150px; */
  /* font-size: 35px; */
}
.container {
  margin-top: 100px;
}

#first-para1 {
  color: #d0d6f9;
}

.width {
  width: 280px;
}

.text {
  color: #d0d6f9;
}

.text-box {
  width: 530px;
  /* border: 2px solid red; */
}

#name {
  color: #d0d6f9;
}

#btn-box {
  margin-top: 100px;
}

#btn-box .active {
  background-color: #ffffff;
}

@media (max-width: 769px) {
  .home-container {
    background-image: url(/public/images/crew/background-crew-mobile.jpg);
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
}

@media (max-width: 376px) {
  .home-container {
    background-image: url(/public/images/technology/background-technology-mobile.jpg);
  }
  #para1 {
    text-align: center;
    margin-left: 0px;
  }
}
</style>
