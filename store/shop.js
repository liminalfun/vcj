export const state = () => ({
  products: [],
  loaded: "0"
});

export const mutations = {
  setProducts(state, entries) {
    state.products = entries;
  },
  setLoaded(state, loaded) {
    state.loaded = loaded;
  }
};
