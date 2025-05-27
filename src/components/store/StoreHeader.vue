<script setup>
import NavigationMenu from "./NavigationMenu.vue";
import ProductFilter from "./ProductFilter.vue";

const props = defineProps(["products"]);
const emit = defineEmits(["filter-products", "clear-filter"]);
</script>

<template>
  <div class="grid grid-cols-[70%_30%] bg-amber-400 p-4 place-items-center">
    <div>STORE NAME</div>
    <div><NavigationMenu /></div>
    <ProductFilter
      :products="products"
      @filter-products="emit('filter-products', $event)"
      @clear-filter="$emit('clear-filter')"
    />
  </div>
</template>

<style scoped></style>
