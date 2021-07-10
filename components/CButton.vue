<template>
  <div v-editable="blok">
    <c-pseudo-box
      as="a"
      href="blok.link"
      textAlign="center"
      d="block"
      w="fit-content"
      py="2"
      px="4"
      rounded="md"
      m="auto"
      :_hover="{ bg: 'mid' }"
      :_focus="{ bg: 'mid' }"
    >
      {{ blok.text }}
    </c-pseudo-box>
  </div>
</template>

<script>
import { CPseudoBox } from "@chakra-ui/vue";
export default {
  components: {
    CPseudoBox
  },
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
};
</script>
