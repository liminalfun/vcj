<template>
  <div class="marquee">
    <p class="marquee-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
</template>
<style scoped>
  .marquee{
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    height: 50px;
  }

  .marquee-text {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    line-height: 50px;
    text-align: center;
    -moz-transform: translate(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    -moz-animation: scroll-left 2s linear infinite;
    -webkit-animation: scroll-left 2s linear infinite;
    animation: scroll-left 20s linear infinite;
  }

  @-moz-keyframes scroll-left {
    0% {
        -moz-transform: translateX(100%);
    }
    100% {
        -moz-transform: translateX(-100%);
    }
  }
          
  @-webkit-keyframes scroll-left {
    0% {
        -webkit-transform: translateX(100%);
    }
    100% {
        -webkit-transform: translateX(-100%);
    }
  }

  @keyframes scroll-left {
    0% {
        -moz-transform: translateX(100%);
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
    }
    100% {
        -moz-transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
    }
  }
</style>