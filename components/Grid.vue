<template>
  <CGrid
    v-editable="blok"
    template-columns="repeat(3, 1fr)"
    gap="6">
    <CBox
      :key="blok._uid"
      v-for="blok in blok.columns"
      w="100%"
      h="10"
      bg="blue.300">
      <component :blok="blok" :is="blok.component" />
    </CBox>
  </CGrid>
</template>
 
<script>
import { CGrid, CGridItem } from '@chakra-ui/vue'

export default {
  components: {
    CGrid,
    CGridItem
  },
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>