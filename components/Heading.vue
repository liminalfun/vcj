<template>
  <div v-editable="blok">
    <h1>{{ blok.title }}</h1>
    <h4>{{ blok.subtitle }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
};
</script>
