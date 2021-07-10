<template>
  <div v-editable="blok">
    <Scroller
      arrows 
      class="slider">
      <ScrollerSlide 
        :key="blok._uid"
        v-for="blok in blok.slides"
        class="slide" >
        <component :blok="blok" :is="blok.component" />
      </ScrollerSlide>
    </Scroller>
  </div>
</template>

<script>
import { Scroller, ScrollerSlide } from '@inniti/vue-horizontal-scroller';
export default {
  components: {
    Scroller,
    ScrollerSlide
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
  .slider {
    height: calc(100vh - 100px);
    overflow-y: hidden;
  }
  .slide {
    width: 100%;
    display: flex;
    height: calc(100vh - 100px);
    overflow-y: hidden;
  }
</style>