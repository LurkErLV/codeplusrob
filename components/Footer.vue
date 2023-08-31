<template>
  <footer class="wrapper">
    <div class="footer">
      <h1 class="footer__title">
        CODE+ROB
      </h1>
      <div class="footer__right">
        <a class="footer__right__location"
           href="https://www.google.com/maps/place/3158+N+Lincoln+Ave,+Chicago,+IL+60657,+USA/@41.9390241,-87.6706798,17z/data=!3m1!4b1!4m6!3m5!1s0x880fd259d8e49055:0x52c10699da599a90!8m2!3d41.9390241!4d-87.6681049!16s%2Fg%2F11c2cbrwdy?entry=ttu"
           target="_blank">
          3158 N Lincoln Ave, Chicago.
        </a>
        <a class="footer__right__phone" href="tel:(773)9614032">(773) 961 40 32</a>
        <a class="footer__right__email" href="mailto:info@codeandrobchicago.com">info@codeandrobchicago.com</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 120px;

  margin-top: 60px;

  background: #000;

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 25px;

    max-width: 1350px;
    width: 100%;

    &__title {
      color: #FFF;
      font-size: 16px;
      font-weight: 500;
    }

    &__right {
      display: flex;
      align-items: center;
      gap: 18px;

      &__location {
        color: #FFF;
        font-size: 16px;
        font-weight: 500;

        text-align: center;

        border-radius: 63px;
        background: #598C71;

        padding: 15px;

        transition: opacity ease-in-out .1s;

        &:hover {
          opacity: 0.8;
        }
      }

      &__phone {
        color: #000;
        font-size: 16px;
        font-weight: 500;

        border-radius: 63px;
        background: #FFF;

        padding: 15px;

        transition: opacity ease-in-out .1s;

        &:hover {
          opacity: .8;
        }
      }

      &__email {
        color: #FFF;
        font-size: 16px;
        font-weight: 500;

        transition: opacity ease-in-out .1s;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}

@media screen and (max-width: 850px) {
  .footer {
    flex-direction: column;
  }
}

@media screen and (max-width: 750px) {
  .wrapper {
    height: auto;

    padding: 15px 0;
  }
  .footer__right {
    flex-direction: column;
  }
}
</style>