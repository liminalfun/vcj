<template>
  <CFlex
    align="center"
    justify="space-around"
    pos="sticky"
    bottom="0"
    w="100%" 
    h="50px"
    bg="inherit" >
    <a href="/">Contact</a>
    <a href="/">Shop</a>
    <a href="/">Process</a>
  </CFlex>
</template>
<script>
import { CFlex } from "@chakra-ui/vue";

export default {
  components: {
    CFlex
  }
}
</script>
<style scoped>
  nav {
    position: sticky;
    bottom: 0;
    height: 50px;
    width: 100%;
    background-color: #DDDAD1;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
</style>