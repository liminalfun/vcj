<template>
  <div class="product" v-editable="blok">
    <div class="product__images">
      <div v-if="blok.images.length > 0">
        <img
          :src="
            (selectedImage.filename || blok.images[0].filename)
              | resize('550x0')
          "
          :alt="selectedImage.name || blok.images[0].name"
        />
      </div>
      <ul class="product__thumbs">
        <li
          class="product__thumb"
          v-for="image in blok.images"
          :key="image.filename"
          @click="selectedImage = image"
        >
          <img
            class="product__thumb-image"
            :src="image.filename | resize('55x55')"
            :alt="image.name"
          />
        </li>
      </ul>
    </div>
    <div class="product__information">
      <h1 class="product__headline">{{ blok.name }}</h1>
      <div class="product__price" v-if="blok.price">${{ blok.price }} CAD</div>
      <rich-text-renderer
        v-if="blok.description"
        class="product__description"
        :document="blok.description"
      />
      <a :href="blok.link.url" class="btn">Buy Now </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blok"],
  data() {
    return {
      selectedImage: {}
    };
  }
};
</script>

<style>
.product {
  padding-top: 60px;
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
}

.product__thumbs {
  margin-top: 50px;
}

.product__thumb {
  display: inline-block;
  padding-right: 10px;
  list-style: none;
  width: 55px;
  margin-right: 10px;
  padding: 5px;
  border: 1px solid #ccc;
}

.product__thumb-image {
  max-width: 100%;
}

.product__images {
  margin: 0 0.5rem;
  width: calc(100% / 3 * 2);
}

.product__information {
  margin: 0 0.5rem;
  width: calc(100% / 3 * 1);
}

.product__price {
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 25px;
}

.product__description {
  margin-bottom: 20px;
}

.product__description h2 {
  margin-top: 20px;
  margin-bottom: 10px;
}

.snipcart-add-item {
  appearance: none;
  display: inline-block;
  padding: 15px 20px;
  cursor: pointer;
  font-size: 20px;
  background: #000;
  color: #fff;
}

.alphachoice {
  color: #000;
  font-size: 80%;
  display: inline-block;
  padding-top: 5px;
}
</style>
