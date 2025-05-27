<script setup>
import ProductsList from "./ProductsList.vue";
</script>

<template>
  <div class="grid grid-cols-[30%_70%]">
    <div class="place-items-center">
      <div class="w-10/12">
        <ProductsList
          :title="'Products List'"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
