<script setup>
import NavigationMenu from "./NavigationMenu.vue";
import ProductFilter from "@/components/store/filter/ProductFilter.vue";
</script>

<template>
  <div class="grid grid-cols-[10%_50%_40%] bg-amber-400 p-4 place-items-center">
    <div>STORE NAME</div>
    <div><NavigationMenu /></div>
    <ProductFilter />
  </div>
</template>

<style scoped></style>
