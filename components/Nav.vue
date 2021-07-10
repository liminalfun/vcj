<template>
  <CFlex
    class="nav"
    align="center"
    justify="space-around"
    pos="fixed"
    bottom="0"
    w="100%"
    h="50px"
  >
    <a class="nav-item" href="/process">Process</a>
    <a class="nav-item" href="/shop">Shop</a>
    <a class="nav-item" href="/contact">Contact</a>
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
.nav {
  background-color: $color-dark;
  color: $color-light;

  .nav-item {
    font-family: $font-heading !important;
    text-transform: uppercase;

    &:hover,
    &:active {
      color: $color-accent;
    }
  }
}
</style>
