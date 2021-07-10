<template>
  <div
    v-editable="blok" >
    <CImage
      :src="blok.image.filename"
      h="100%"
      w="100%"
      objectFit="cover"
      alt="blok.image.alt" />
    <span
      v-if="blok.image.copyright"
      class="copyright" >
      {{ blok.image.copyright }}
    </span>
  </div>
</template>
 
<script>
import { CImage } from "@chakra-ui/vue";

export default {
  components: {
    CImage
  },
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>