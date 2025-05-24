<script setup>
import { onBeforeMount, ref } from "vue";
import ProductDetails from "./ProductDetails.vue";
import ProductsList from "./ProductsList.vue";
import StoreHeader from "./StoreHeader.vue";
import axios from "axios";

const allProducts = ref(null);
const filteredProducts = ref(null);
const selectedProduct = ref(null);

onBeforeMount(() => prepareProductsData());

function prepareProductsData() {
  axios.get("https://fakestoreapi.com/products").then((response) => {
    allProducts.value = response.data;
    filteredProducts.value = response.data;
    selectedProduct.value = response.data[0];
  });
}

function selectProduct(id) {
  selectedProduct.value = filteredProducts.value.find(
    (product) => product.id == id
  );
}

function filterProducts(receivedFilteredProducts) {
  filteredProducts.value = receivedFilteredProducts;
  selectedProduct.value = receivedFilteredProducts[0];
}

function clearFilter() {
  filteredProducts.value = allProducts.value;
}
</script>

<template>
  <StoreHeader
    :products="allProducts"
    @filter-products="filterProducts($event)"
    @clear-filter="clearFilter()"
  />
  <div class="grid grid-cols-[30%_70%]">
    <div class="place-items-center">
      <div class="w-10/12">
        <ProductsList
          @select-product="selectProduct($event)"
          :title="'Products List'"
          :products="filteredProducts"
        />
      </div>
    </div>
    <div>
      <ProductDetails v-if="selectedProduct" :product="selectedProduct" />
      <div v-else class="text-2xl text-center pt-10">
        Please select a product
      </div>
    </div>
  </div>
</template>

<style></style>
