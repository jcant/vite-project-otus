<script setup>
import NavigationMenu from "./NavigationMenu.vue";
import ProductFilter from "./ProductFilter.vue";

</script>

<template>
  <div class="grid grid-cols-[70%_30%] bg-amber-400 p-4 place-items-center">
    <div>STORE NAME</div>
    <div><NavigationMenu /></div>
    <ProductFilter />
  </div>
</template>

<style scoped></style>
