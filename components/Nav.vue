<template>
  <CFlex
    align="center"
    justify="space-around"
    pos="sticky"
    bottom="0"
    w="100%"
    h="50px"
    bg="inherit"
  >
    <a class="nav-item" href="/">Contact</a>
    <a class="nav-item" href="/">Shop</a>
    <a class="nav-item" href="/">Process</a>
  </CFlex>
</template>
<script>
import { CFlex } from "@chakra-ui/vue";

export default {
  components: {
    CFlex
  }
};
</script>
<style lang="scss" scoped>
nav {
  position: sticky;
  bottom: 0;
  height: 50px;
  width: 100%;
  background-color: $color-light;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .nav-item {
    font-family: $font-heading !important;
  }
}
</style>
