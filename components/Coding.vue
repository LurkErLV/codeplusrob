<template>
  <div class="coding">
    <h1 class="coding__title">
      Why start robotics young?
    </h1>
    <div class="coding__list">
      <p class="coding__list__item">
        Develops problem-solving skills and spatial thinking.
        By learning robotics, children develop their critical thinking and problem-solving skills, which they can apply
        to other areas of their lives.
      </p>
      <p class="coding__list__item">
        Enhances creativity
        Robotics offers children the opportunity to build and design robots, which allows them to explore their
        creativity and imagination.
      </p>
      <p class="coding__list__item">
        Builds teamwork skills
        In our classes kids are involved working in groups, which teaches children how to communicate effectively and
        collaborate with others.
      </p>
      <p class="coding__list__item">
        Develops technical skills
        Robotics involves using technology and programming languages, which can help children to develop technical
        skills that will be valuable in many areas of their lives.
      </p>
      <p class="coding__list__item">
        Boosts confidence
        As children learn to design, build, and program robots, they gain a sense of accomplishment and pride in their
        abilities.
      </p>
      <p class="coding__list__item">
        Prepares for the future
        The field of robotics is rapidly growing, and it's predicted that there will be a high demand for robotics
        professionals in the future.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.coding {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    color: #000;
    font-size: 79.287px;
    font-weight: 700;

    max-width: 430px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 50px;

    max-width: 890px;
    width: 100%;

    border-radius: 24px;
    background: #5E376D;

    &__item {
      padding: 25px;
      margin: 0;

      border-radius: 25.455px;
      background: #FFF;
    }
  }
}

@media screen and (max-width: 1400px) {
  .coding {
    flex-direction: column;
    align-items: center;
    gap: 30px;

    &__title {
      margin: 0;
      text-align: center;
      font-size: 70px;
    }

    &__list {
      padding: 20px;

      width: calc(100% - 50px);
    }
  }
}

@media screen and (max-width: 700px) {
  .coding__title {
    font-size: 35px;
  }
}
</style>