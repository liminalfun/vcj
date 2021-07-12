<template>
  <nuxt-link :to="productLink" class="product-teaser">
    <div class="product-images">
      <img
        v-for="image in productContent.images"
        :key="image.filename"
        :src="image.filename"
      />
      <h4 class="product-name">
        {{ productContent.name }}
      </h4>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    productContent: {
      type: Object,
      required: true
    },
    productLink: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.article-teaser:hover {
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
}
</style>
