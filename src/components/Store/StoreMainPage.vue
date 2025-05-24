<script setup>
import { onBeforeMount, ref } from "vue";
import ProductDetails from "./ProductDetails.vue";
import ProductsList from "./ProductsList.vue";
import StoreHeader from "./StoreHeader.vue";

const allProducts = ref(null);
const filteredProducts = ref(null);
const selectedProduct = ref(null);

onBeforeMount(() => prepareProductsData());

function prepareProductsData() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      allProducts.value = data;
      filteredProducts.value = data;
      selectedProduct.value = data[0];
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
    :products="filteredProducts"
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
      <ProductDetails :product="selectedProduct" />
    </div>
  </div>
</template>

<style></style>
