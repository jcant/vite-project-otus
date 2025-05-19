<script setup>
import { ref } from "vue";
import ProductSimple from "./ProductSimple.vue";

const props = defineProps({ title: String, products: Object });
const selectedId = ref(0);
const emit = defineEmits(["select-product"]);

function selectProduct(id) {
  selectedId.value = id;
  emit("select-product", id);
}
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
