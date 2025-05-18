<script setup>
import { reactive, ref } from "vue";
import { getProductsJSON } from "../data/products";
import ProductSimple from "./ProductSimple.vue";

const products = reactive(getProductsJSON());
const props = defineProps({ title: String });
const selectedId = ref(0);
const emit = defineEmits(["select-product"]);

function selectProduct(id) {
  selectedId.value = id;
  emit("select-product", id);
}
</script>

<template>
  <div class="p-2 m-1 font-bold bg-amber-300 text-center">{{ title }}</div>
  <ProductSimple
    v-for="product in products"
    :key="product.id"
    :title="product.title"
    :id="product.id"
    :isSelected="product.id == selectedId"
    @select-product="selectProduct($event)"
  />
</template>

<style></style>
