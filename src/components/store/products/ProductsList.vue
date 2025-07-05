<script setup>
import ProductSimple from "@/components/store/products/ProductSimple.vue";
import { onBeforeMount, ref } from "vue";
import { useFilterStore } from "@/states/FilterState.js";
import { storeToRefs } from "pinia";
import { getProductsJSON } from "@/components/data/products_local.js";
import axios from "axios";
import { APP_CONFIG } from "@/constants";

const props = defineProps(["title"]);

const filterStore = useFilterStore();
const { filter, isFiltered } = storeToRefs(filterStore);

const allProducts = ref(null);
const filteredProducts = ref(null);

onBeforeMount(() => {
  if (APP_CONFIG.local_data_mode) {
    getLocalProductsData();
  } else {
    getProductsData();
  }
});

function getProductsData() {
  axios.get(APP_CONFIG.remote_products_url + "/products").then((response) => {
    allProducts.value = response.data;
    filteredProducts.value = response.data;
    if (isFiltered.value) {
      filterProducts(filter.value);
    }
  });
}

function getLocalProductsData() {
  allProducts.value = getProductsJSON();
  filteredProducts.value = getProductsJSON();
  if (isFiltered.value) {
    filterProducts(filter.value);
  }
}

filterStore.$subscribe((mutation, state) => {
  if (isFiltered.value) {
    filterProducts(filter.value);
  } else {
    clearFilter();
  }
});

function filterProducts(currentFilter) {
  filteredProducts.value = allProducts.value.filter(
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
