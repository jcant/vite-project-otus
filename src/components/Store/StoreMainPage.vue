<script setup>
import { ref } from "vue";
import ProductDetails from "./ProductDetails.vue";
import ProductsList from "./ProductsList.vue";
import { getProductsJSON } from "../data/products";

var selectedProduct = ref(getProductsJSON()[0]);

function selectProduct(id) {
  selectedProduct.value = getProductsJSON().find((product) => product.id == id);
}
</script>

<template>
  <div class="grid grid-cols-[30%_70%]">
    <div class="place-items-center">
      <div class="w-10/12">
        <ProductsList
          @select-product="selectProduct($event)"
          :title="'Products List'"
        />
      </div>
    </div>
    <div>
      <ProductDetails :product="selectedProduct" />
    </div>
  </div>
</template>

<style></style>
