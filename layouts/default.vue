<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox
          font-family="body"
          as="main"
          bg="$color-light"
          color="dark"
          mb="50px"
        >
          <CReset />
          <Marquee />
          <Nuxt />
          <Nav />
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>
<script>
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox
} from "@chakra-ui/vue";
import Marquee from "~/components/Marquee.vue";
import Nav from "~/components/Nav.vue";

export default {
  name: "App",
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
    Marquee,
    Nav
  }
};
</script>
