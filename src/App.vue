<template>
  <div>
    <div><br></div>
    <div class="container">
      <b-jumbotron header="Coding Camp" lead="Learn coding is very happy">
        <p>For more information visit website</p>
        <b-btn variant="primary" href="#">More Info</b-btn>
      </b-jumbotron>
    </div>
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from '@/components/ProductListOne'
import ProductListTwo from '@/components/ProductListTwo'

export default {
  name: 'App',
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo
  }
}
</script>

<style>

</style>
