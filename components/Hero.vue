<template>
  <div class="background">
    <div class="hero">
      <div class="hero__title">
        <p>Join our coding and robotics lessons in Chicago</p>
      </div>
      <div class="hero__slider">
        <div v-show="activeSlide === 0" key=1 class="hero__slider__slide">
          <h3>Robotics</h3>
          <h2>If your kids love playing with Lego and enjoy using digital devices, robotics classes are a perfect match!
            Our lessons are built on the basis of the LEGO Education curriculum, aligned with NGSS, ISTE, and CSTA
            standards, and are powered by Lego SPIKE sets and coding software.</h2>
          <div class="hero__slider__slide__indicators">
            <span class="indicator active" @click="changeSlide(0)"></span>
            <span class="indicator" @click="changeSlide(1)"></span>
            <span class="indicator" @click="changeSlide(2)"></span>
          </div>
        </div>
        <div v-show="activeSlide === 1" key=2 class="hero__slider__slide">
          <h3>Robotics</h3>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.</h2>
          <div class="hero__slider__slide__indicators">
            <span class="indicator" @click="changeSlide(0)"></span>
            <span class="indicator active" @click="changeSlide(1)"></span>
            <span class="indicator" @click="changeSlide(2)"></span>
          </div>
        </div>
        <div v-show="activeSlide === 2" key=3 class="hero__slider__slide">
          <h3>Robotics</h3>
          <h2>A pellentesque sit amet porttitor eget. Pellentesque adipiscing commodo elit at imperdiet dui accumsan.
            Urna et pharetra pharetra massa massa ultricies. Sed tempus urna et pharetra pharetra massa. Pellentesque eu
            tincidunt tortor aliquam nulla facilisi cras fermentum. Phasellus faucibus scelerisque eleifend donec
            pretium vulputate.</h2>
          <div class="hero__slider__slide__indicators">
            <span class="indicator" @click="changeSlide(0)"></span>
            <span class="indicator" @click="changeSlide(1)"></span>
            <span class="indicator active" @click="changeSlide(2)"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const slidesCount = 2;
const activeSlide = ref(0);

function changeSlide(slide: number) {
  if (slide < 0 || slide > slidesCount) return;
  activeSlide.value = slide;
}

setInterval(() => {
  if (activeSlide.value >= slidesCount) {
    activeSlide.value = 0;
  } else {
    activeSlide.value++;
  }
}, 15000)
</script>

<style lang="scss" scoped>
.background {
  width: 100%;
  min-height: 665px;
  height: auto;

  background: rgba(0, 0, 0, 0.37) url("/assets/images/slider1.webp") no-repeat center;
  background-size: cover;
}

.hero {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  width: 100%;
  height: 665px;

  padding: 40px 0;

  backdrop-filter: blur(14.5px) brightness(.6);

  &__title {
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 1350px;
    width: 100%;

    padding: 24px;

    border-radius: 39px;
    background: #598C71;

    p {
      text-align: center;

      color: #FFF;
      font-size: 20px;
      font-weight: 700;

      margin: 0;
    }
  }

  &__slider {
    display: flex;

    max-width: 1350px;
    width: 100%;
    height: 100%;

    border-radius: 24px;
    background: linear-gradient(360deg, #000 0%, rgba(0, 0, 0, 0.00) 100%), url("/assets/images/slider1.webp"), lightgray 50%;
    background-size: cover;
    background-position: center;

    &__slide {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;

      padding: 50px 60px;

      h3 {
        padding: 19px 37px;

        border-radius: 41px;
        background: rgba(255, 255, 255, 0.10);
        backdrop-filter: blur(6px);

        color: #FFF;
        font-size: 15.719px;
        font-weight: 600;
      }

      h2 {
        color: #FFF;
        font-size: 19.183px;
        font-weight: 600;

        max-width: 590px;
        width: 100%;
      }


      &__indicators {
        display: flex;
        gap: 5px;

        .indicator {
          display: block;

          width: 18.826px;
          height: 5.578px;

          border-radius: 8.075px;
          opacity: 0.2;
          background: #D9D9D9;

          cursor: pointer;
        }

        .active {
          width: 25.799px;
          height: 5.578px;

          opacity: 1;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .background {
    height: auto;
    min-height: auto;
  }

  .hero {
    height: auto;

    &__slider {
      display: none;
    }
  }
}

@media screen and (max-width: 1400px) {
  .hero {
    &__title {
      width: calc(100% - 50px);
    }

    &__slider {
      max-width: calc(100% - 50px);
    }
  }
}
</style>