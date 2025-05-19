<script setup>
import { onMounted, onUpdated, reactive, ref } from "vue";

const props = defineProps({ product: Object });
</script>

<template>
  <div class="p-2 m-1 font-bold bg-amber-300 text-center">
    {{ product?.title }}
  </div>
  <div>
    <span>Price: </span><span>{{ product?.price }}</span>
  </div>
  <div>
    <span>Description: </span><span>{{ product?.description }}</span>
  </div>
  <div>
    <span>Categoty: </span><span>{{ product?.category }}</span>
  </div>
  <div>
    <span>Image: </span
    ><img
      class="h-48 w-96 object-contain"
      :src="product?.image"
      alt="product photo"
    />
  </div>
  <div>
    <span>Rating: </span><span>Rate: {{ product?.rating.rate }}</span
    ><span> Count: {{ product?.rating.count }}</span>
  </div>
</template>

<style scoped></style>
