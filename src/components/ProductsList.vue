<template>
  <div class="p-2 m-1 font-bold bg-amber-300 text-center">{{ title }}</div>
  <ProductSimple v-for="product in products" :title="product.title" />
</template>

<script setup>
import { reactive } from "vue";
import { getProductsJSON } from "./data/products";
import ProductSimple from "./ProductSimple.vue";

const products = reactive(getProductsJSON());
const props = defineProps({ title: String });
</script>

<style></style>
