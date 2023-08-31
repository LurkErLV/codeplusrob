<template>
  <div class="wrapper">
    <div class="reviews">
      <div id="content" class="reviews__items">
        <div class="reviews__items__item">
          <img alt="" src="~/public/assets/images/card.jpg">
        </div>
        <div class="reviews__items__item">
          <img alt="" src="~/public/assets/images/card.jpg">
        </div>
        <div class="reviews__items__item">
          <img alt="" src="~/public/assets/images/card.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #598C71;
  width: 100vw;
  height: auto;

  position: relative;

  left: calc(-50vw + 50%);

  margin-top: 50px;
}

.reviews {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  position: relative;
  left: calc(-50vw + 50%);

  width: 100vw;
  height: 100%;

  padding: 57px 0;

  &__items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 28px;

    max-width: 1500px;
    width: 100%;

    &__item {
      display: flex;
      flex-direction: column;
      gap: 19px;

      overflow: hidden;

      border-radius: 14px;
      background: transparent;
      border: 2px solid rgba(255, 255, 255, 0.40);


      max-width: 450px;
      height: auto;

      @media screen and (max-width: 600px) {
        & {
          width: calc(100% - 50px);
          height: auto;
          max-height: none;
        }
      }
    }
  }
}
</style>
<script lang="ts" setup>
</script>