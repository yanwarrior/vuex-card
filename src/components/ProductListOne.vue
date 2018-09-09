<template>
  <div class="container">
      <h3>
        Product List One
        <small class="text-muted">Eeverthing what you need</small>
        <button v-on:click="reducePrice(4)" class="btn btn-secondary">.:: Reduce Price</button>
      </h3>
      <hr>
      <b-card-group deck class="mb-3">
        <b-card v-for="product in saleProductCards" v-bind:key="product.id" 
                v-bind:title="product.title"
                img-top
                v-bind:img-src="product.image"
                :tag="product.taging">
            <p class="card-text">{{ product.description }} <b-badge variant="warning">Only ${{ product.pricing }}</b-badge></p>
            <b-button href="#" variant="primary">Take tutorial</b-button>
        </b-card>
      </b-card-group>
  </div>
</template>

<script>
export default {
  methods: {
    reducePrice(amount) {
      // This code below not track on Vue DevTools and 
      // if i add strict true mode to store, i get error.
      // Error: [vuex] Do not mutate vuex store state outside mutation handlers."
      // ------------------------------------------------------------------------
      // this.$store.state.productCards.forEach(product => {
      //   product.pricing -= 1;
      // });

      // Recommended using mutations for 
      // change state on store.
      // -------------------------------
      // this.$store.commit('reducePrice');

      // If you have actions, this example use actions.
      // reducePrice name is actions.
      // ----------------------------------------------
      let payload = {amount: amount}
      this.$store.dispatch('reducePrice', payload);
    }
  },
  computed: {
    productCards() {
      return this.$store.state.productCards
    },
    saleProductCards() {
      return this.$store.getters.saleProductCards;
    }
  }
}
</script>

<style>

</style>