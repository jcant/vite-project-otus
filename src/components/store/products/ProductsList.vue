<script setup>
import ProductSimple from "@/components/store/products/ProductSimple.vue";
import { onBeforeMount, ref } from "vue";
import { getFromStorage } from "@/components/data/storage";
// import { getProductsJSON } from "@/components/data/products_local.js"
import axios from "axios";

const props = defineProps(["title"]);

const allProducts = ref(null);
const filteredProducts = ref(null);

onBeforeMount(() => prepareProductsData());

function prepareProductsData() {
  axios.get("https://fakestoreapi.com/products").then((response) => {
    allProducts.value = response.data;
    filteredProducts.value = response.data;
  });
}

// function prepareProductsData() {
//   allProducts.value = getProductsJSON();
//   filteredProducts.value = getProductsJSON();
// }

//callback from localstorage change...
function onLocalStorageChange(key) {
  if (key == "currentProductFilter") {
    currentFilter = getFromStorage(key);
    if (currentFilter == "") {
      clearFilter();
    } else {
      filterProducts(currentFilter);
    }
  }
}

function filterProducts(currentFilter) {
  filteredProducts.value = allProducts.filter(
    (product) =>
      product.price == currentFilter ||
      product.title.toLowerCase().indexOf(currentFilter.toLowerCase()) !== -1
  );
}

function clearFilter() {
  filteredProducts.value = allProducts.value;
}
</script>

<template>
  <div class="p-2 m-1 font-bold bg-amber-300 text-center">{{ title }}</div>
  <div class="flex flex-wrap">
    <ProductSimple
      v-for="product in filteredProducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style></style>
