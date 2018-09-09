<template>
  <div class="container">
    <h3>
      Product List Two
      <small class="text-muted">Eeverthing what you need</small>
    </h3>
    <hr>
    <b-card-group deck class="mb-3">
    <b-card v-for="product in saleProductCards" v-bind:key="product.id" 
            v-bind:title="product.title"
            img-top
            v-bind:img-src="product.image"
            v-bind:tag="product.taging">
        <p class="card-text">{{ product.description }} <b-badge variant="warning">Only ${{ product.pricing }}</b-badge></p>
        <b-button href="#" variant="primary">Take tutorial</b-button>
    </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
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