<template>
  <div class="faq">
    <p class="faq__item">
      Q: How long is the lesson?
      <br/>
      A: The lesson lasts about 1 hour.
    </p>
    <p class="faq__item">
      Q: Can a parent attend the lesson?
      <br/>
      A: Sure, but usually parents go to Whole Foods :)
    </p>
    <p class="faq__item">
      Q: How many kids are in the group?
      <br/>
      A: 6 is the maximum capacity for 1 lesson and 1 tutor.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.faq {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  max-width: 1350px;
  width: 100%;

  &__item {
    color: #000;
    font-size: 16px;
    font-weight: 500;

    padding: 25px;
    margin: 0;

    width: 100%;

    border-radius: 12px;
    background: #FFF;

    transition: all ease-in-out .3s;

    &:hover {
      color: #FFF;
      background: #5E376D;
    }
  }
}

@media screen and (max-width: 1400px) {
  .faq__item {
    width: calc(100% - 50px);
  }
}
</style>