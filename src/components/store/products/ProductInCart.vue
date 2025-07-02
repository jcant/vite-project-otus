<script setup>
import { useCartStore } from "@/states/CartState";

const props = defineProps(["product", "count"]);
const cartStore = useCartStore();
function incCount() {
  cartStore.incProduct(props.product.id);
}
function decCount() {
  cartStore.decProduct(props.product.id);
}
function remove() {
  cartStore.removeProduct(props.product.id);
}
</script>

<template>
  <div class="grid grid-cols-[20%_20%_50%_10%] items-center mb-6 mr-10">
    <img :src="product.image" class="w-20 h-20 object-contain ml-10" />
    <div class="flex flex-row items-center">
      <span @click="incCount" class="text-3xl mr-1 ml-1 cursor-pointer">+</span>
      <span class="ml-2 mr-2 text-4xl">{{ count }}</span>
      <span @click="decCount" class="text-3xl ml-1 mr-1 cursor-pointer">-</span>
      <span @click="remove" class="ml-4 cursor-pointer"
        ><img class="w-4 h-4" src="@/assets/close.png"
      /></span>
    </div>
    <span class="p-2">{{ product.title }}</span>
    <span class="text-center text-4xl">{{ product.price * count }}</span>
  </div>
</template>

<style scoped></style>
