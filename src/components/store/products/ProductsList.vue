<script setup>
import { ref } from "vue";
import ProductSimple from "./ProductSimple.vue";
import { onBeforeMount, ref } from "vue";
import axios from "axios";
import { getFromStorage } from "../../data/storage";

const props = defineProps(['title']);

const allProducts = ref(null);
const filteredProducts = ref(null);

onBeforeMount(() => prepareProductsData());

function prepareProductsData() {
  axios.get("https://fakestoreapi.com/products").then((response) => {
    allProducts.value = response.data;
    filteredProducts.value = response.data;
  });
}

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
  <div class="overflow-auto h-screen">
    <div class="p-2 m-1 font-bold bg-amber-300 text-center">{{ title }}</div>
    <ProductSimple
      v-for="product in filteredProducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style></style>
