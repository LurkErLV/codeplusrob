<template>
  <div class="robotics">
    <h1 class="robotics__title">
      Why start robotics young?
    </h1>
    <div class="robotics__list">
      <p class="robotics__list__item">
        💡 Enhances problem-solving skills: Coding requires logical thinking and the ability to break down complex
        problems into smaller, manageable parts.
      </p>
      <p class="robotics__list__item">
        👩‍💻 Promotes computational thinking: Coding introduces children to computational thinking, which involves
        problem decomposition, pattern recognition, algorithmic thinking, and abstraction.
      </p>
      <p class="robotics__list__item">
        🌐 Fosters creativity and innovation: Coding provides a creative outlet for children to bring their ideas to
        life. They can design and develop their own projects, such as websites, games, and animations, allowing them to
        explore their imagination and think outside the box.
      </p>
      <p class="robotics__list__item">
        Develops collaboration and teamwork: By collaborating with others, children learn how to communicate
        effectively, share ideas while brainstorming, and work together towards a common goal.📚 Enhances learning in
        other subjects: Coding is a cross-disciplinary skill that can enhance learning in various subjects, including
        math, science, and language arts. It helps children grasp abstract concepts, make connections, and apply their
        knowledge in practical ways.
      </p>
      <p class="robotics__list__item">
        Expands future opportunities: In today's digital world, coding is becoming increasingly important. Learning
        coding at a young age equips children with a valuable skill set that can open doors to various career paths,
        such as software development, data analysis, robotics, and more.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.robotics {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  margin-top: 70px;

  &__title {
    color: #000;
    font-size: 79.287px;
    font-weight: 700;

    max-width: 430px;

    text-align: end;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 50px;

    max-width: 890px;
    width: 100%;

    border-radius: 24px;
    background: #598C71;

    &__item {
      padding: 25px;
      margin: 0;

      border-radius: 25.455px;
      background: #FFF;
    }
  }
}

@media screen and (max-width: 1400px) {
  .robotics {
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
  .robotics__title {
    font-size: 35px;
  }
}
</style>