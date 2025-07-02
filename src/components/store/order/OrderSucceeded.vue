<script setup>
import { useCartStore } from "@/states/CartState";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { ROUTE_NAMES } from "@/router/router_names";

const cartStore = useCartStore();
const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    cartStore.$reset();
    router.push({ name: ROUTE_NAMES.HOME });
  }, 2000);
});
</script>

<template>
  <div class="text-5xl m-10">ORDER SUCCEEDED!!</div>
</template>

<style scoped></style>
