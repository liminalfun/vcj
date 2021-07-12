export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: "false",
  target: "server",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Valerie Crawford Jewelry",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/components",
    "~/plugins/composition-api.js",
    "~/plugins/storyblok-rich-text-renderer.js",
    { src: "~/plugins/vue-stripe.js", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/chakra
    "@chakra-ui/nuxt",
    // https://go.nuxtjs.dev/emotion
    "@nuxtjs/emotion",
    "@nuxtjs/style-resources",
    [
      "storyblok-nuxt",
      {
        accessToken: process.env.STORYBLOK_SPACE_TOKEN,
        cacheProvider: "memory"
      }
    ]
  ],

  // Add extend the plugin options under the `chakra` key.
  chakra: {
    extendTheme: {
      colors: {
        light: "#DDDAD1",
        dark: "#505342",
        mid: "#7B8065",
        accent: "#9AB108"
      }
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/sass/main.scss"],

  styleResources: {
    scss: ["~assets/sass/helpers/_vars.scss"]
  },

  // Stripe integration: https://github.com/vue-stripe/vue-stripe-checkout-nuxt-demo
  env: {
    STRIPE_PK: process.env.STRIPE_PK
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
