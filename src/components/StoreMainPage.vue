<template>
  <div class="grid grid-cols-[30%_70%] gap-8">
    <div class="place-items-center">
      <div class="w-10/12"><ProductsList :title="'Products List'" /></div>
    </div>
    <div>second</div>
  </div>
</template>

<script setup>
import ProductsList from "./ProductsList.vue";
</script>

<style></style>
