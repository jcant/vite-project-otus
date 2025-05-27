<script setup>
import StoreHeader from "@/components/store/StoreHeader.vue";
</script>

<template>
  <StoreHeader
    :products="allProducts"
    @filter-products="filterProducts($event)"
    @clear-filter="clearFilter()"
  />
  <router-view></router-view>
</template>

<style scoped></style>
