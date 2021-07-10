<template>
  <div v-editable="blok" class="slide__content">
    <component 
      :key="blok._uid"
      v-for="blok in blok.contents"
      :blok="blok" 
      :is="blok.component" />
  </div>
</template>

<script>
import { CBox } from "@chakra-ui/vue";
export default {
  components: {
    CBox
  },
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.slide__content {
  position: relative;
  height: 100%;
  display: flex;
  margin: 0;
  justify-content: center;
  align-items: center;
}

.slide__content > * {
  flex-basis: 50%;
}


.slide__caption {
  position: absolute;
  bottom: 1rem;
  left: 3.5rem;
  right: 3.5rem;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background: rgba(255, 255, 255, 0.7);
  padding: 1rem;
  opacity: 0.5;
  transition: opacity 300ms ease;
}
.slide:hover .slide__caption {
    opacity: 1;
}
</style>