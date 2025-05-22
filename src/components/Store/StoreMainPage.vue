<script setup>
import { onBeforeMount, ref } from "vue";
import ProductDetails from "./ProductDetails.vue";
import ProductsList from "./ProductsList.vue";
import { getProductsJSON } from "../data/products_local";

// const products = reactive(getProductsJSON());
const products = ref(null);
const selectedProduct = ref(null);

onBeforeMount(() => prepareProductsData());

function prepareProductsData() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      products.value = data;
      selectProduct.value = data[0];
    });
}

function selectProduct(id) {
  selectedProduct.value = products.value.find((product) => product.id == id);
}
</script>

<template>
  <div class="grid grid-cols-[30%_70%]">
    <div class="place-items-center">
      <div class="w-10/12">
        <ProductsList
          @select-product="selectProduct($event)"
          :title="'Products List'"
          :products="products"
        />
      </div>
    </div>
    <div>
      <ProductDetails :product="selectedProduct" />
    </div>
  </div>
</template>

<style></style>
