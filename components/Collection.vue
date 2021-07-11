<template>
  <div v-editable="blok">
    <h2 class="pt-2 pl-6 text-lg text-gray-700 italic">{{ blok.title }}</h2>
    <ul class="flex py-6 mb-6">
      <li
        v-for="product in sortedCollection"
        :key="product._uid"
        class="flex-auto px-6"
        style="min-width: 33%"
      >
        <article-teaser
          v-if="product.content"
          :article-link="product.full_slug"
          :article-content="product.content"
        />
        <p v-else class="px-4 py-2 text-white bg-red-700 text-center rounded">
          This content loads on save. <strong>Save the entry & reload.</strong>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  computed: {
    sortedCollection() {
      // Load reference data/content from store
      const collection = this.$store.state.shop.shop.filter(product => {
        return this.blok.shop.includes(article.uuid);
      });

      // Enable the ordering of the article previews
      collection.sort((a, b) => {
        return this.blok.shop.indexOf(a.uuid) - this.blok.shop.indexOf(b.uuid);
      });

      return collection;
    }
  }
};
</script>
