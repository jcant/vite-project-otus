<script setup>
import { ref } from "vue";
import ProductSimple from "./ProductSimple.vue";
import { onBeforeMount, ref } from "vue";
import axios from "axios";

const props = defineProps(['title']);
const selectedId = ref(0);
const emit = defineEmits(["select-product"]);

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

// function selectProduct(id) {
//   selectedId.value = id;
//   emit("select-product", id);
// }
</script>

<template>
  <div class="overflow-auto h-screen">
    <div class="p-2 m-1 font-bold bg-amber-300 text-center">{{ title }}</div>
    <ProductSimple
      v-for="product in products"
      :key="product.id"
      :product="product"
      :isSelected="product.id == selectedId"
      @select-product="selectProduct($event)"
    />
  </div>
</template>

<style></style>
