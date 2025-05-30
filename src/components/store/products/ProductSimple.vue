<script setup>
import { useRoute } from "vue-router";
import { ROUTE_NAMES } from "@/router/router_names.js";

const route = useRoute();
const props = defineProps(["product"]);
</script>

<template>
  <router-link :to="'/product/' + product.id">
    <div class="shadow-xl m-6 text-center items-center">
      <div class="product-simple">
        <img
          class="h-26 w-26 object-contain m-auto"
          :src="product?.image"
          alt="product photo"
        />
        Price: {{ product.price }}
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.product-simple {
  padding: 6px;
  margin: 0px auto;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border: 1px solid rgb(255, 255, 255);
}

.product-simple:hover {
  border: 1px solid rgb(255, 196, 68);
}

.product-simple-selected {
  border: 1px solid rgb(190, 190, 190);
}
</style>
