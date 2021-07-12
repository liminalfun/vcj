<template>
  <section class="shop">
    <CBox>
      <h1>Sinthome</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Egestas quis ipsum
        suspendisse ultrices gravida dictum. Sem integer vitae justo eget magna
        fermentum iaculis eu. Ullamcorper eget nulla facilisi etiam dignissim
        diam quis enim lobortis. Sit amet mauris commodo quis imperdiet massa.
        Nulla aliquet enim tortor at auctor urna nunc. Sit amet purus gravida
        quis blandit turpis cursus. Non consectetur a erat nam at lectus urna
        duis convallis. Sit amet nulla facilisi morbi tempus iaculis urna id.
        Viverra maecenas accumsan lacus vel facilisis volutpat est velit
        egestas. Elementum eu facilisis sed odio morbi quis commodo odio.
      </p>
    </CBox>
    <CGrid template-columns="repeat(3, 1fr)" gap="2">
      <div v-for="product in stories" :key="product._uid">
        <product-teaser
          v-if="product.content"
          :product-link="product.full_slug"
          :product-content="product.content"
        />
      </div>
    </CGrid>
  </section>
</template>

<script>
import { CFlex, CGrid, CGridItem } from "@chakra-ui/vue";

export default {
  components: {
    CFlex,
    CGrid,
    CGridItem
  },
  data() {
    return {
      story: { content: {} },
      stories: []
    };
  },
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        starts_with: "shop/",
        version: "draft"
      })
      .then(res => {
        return res.data;
      })
      .catch(res => {
        if (!res.response) {
          console.error(res);
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api"
          });
        } else {
          console.error(res.response.data);
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          });
        }
      });
  }
};
</script>
