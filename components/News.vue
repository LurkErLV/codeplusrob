<template>
  <div class="cards">
    <div class="cards-card card">
      <img alt="" class="card__img" src="~/public/assets/images/assembling.jpg">
      <div class="card-info">
        <h1 class="card__title">Assembling</h1>
        <span class="divider"></span>
        <p class="card__description">Assembling a mechanism on the topic of the lesson</p>
      </div>
    </div>

    <div class="cards-card card">
      <img alt="" class="card__img" src="~/public/assets/images/programming.jpg">
      <div class="card-info">
        <h1 class="card__title">Programming</h1>
        <span class="divider"></span>
        <p class="card__description">Programming the algorithm of the robot to solve the problem</p>
      </div>
    </div>

    <div class="cards-card card">
      <img alt="" class="card__img" src="~/public/assets/images/upgrading.jpg">
      <div class="card-info">
        <h1 class="card__title">Upgrading and solving new problems</h1>
        <span class="divider"></span>
        <p class="card__description">After solving the main problem, children are invited to improve the robot and
          solve an additional problem without the help of tutor</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;

  width: 100%;

  .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px;

    max-width: 430px;
    width: 100%;

    border-radius: 24px;
    background: #FFF;

    overflow: hidden;

    &-info {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .divider {
        width: 25px;
        height: 2px;

        opacity: 0.1;
        background: #000;

        margin: 0 0 0 33px;

        display: block;
      }
    }

    &__img {
      max-width: 364px;
      width: calc(100% - 66px);

      border-radius: 24px;

      margin: auto;
      display: block;
    }

    &__title {
      color: #000;
      font-size: 24px;
      font-weight: 700;

      margin: 0 0 0 33px;
    }

    &__description {
      color: rgba(0, 0, 0, .7);
      font-size: 14px;
      font-weight: 600;

      margin: 0 33px 33px 33px;
    }

    &-btn {
      padding: 15px 25px;

      border-radius: 54px;
      background: #000;

      color: rgba(255, 255, 255, .7);
      font-size: 14px;
      font-weight: 600;

      margin: 0 0 33px 33px;
    }
  }
}

@media screen and (max-width: 500px) {
  .cards {
    .card {
      width: calc(100% - 50px);
      padding: 25px 0 0;
    }
  }
}
</style>